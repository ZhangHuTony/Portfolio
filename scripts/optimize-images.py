#!/usr/bin/env python3
"""Generate optimized site images from the originals in assets-src/.

Run with: npm run images
Requires Pillow. Outputs go to src/assets/img/ (bundled by Vite) and public/og.jpg.
"""
import io
import os
import sys

from PIL import Image, ImageCms, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "assets-src")
OUT = os.path.join(ROOT, "src", "assets", "img")
PUBLIC = os.path.join(ROOT, "public")

SRGB = ImageCms.createProfile("sRGB")


def load(name):
    im = Image.open(os.path.join(SRC, name))
    im = ImageOps.exif_transpose(im)
    icc = im.info.get("icc_profile")
    if icc:
        try:
            im = ImageCms.profileToProfile(
                im.convert("RGB"), ImageCms.ImageCmsProfile(io.BytesIO(icc)), SRGB, outputMode="RGB"
            )
        except Exception as exc:  # fall back to a plain conversion
            print(f"  (icc conversion skipped for {name}: {exc})")
    return im.convert("RGB")


def crop_aspect(im, aspect, fx=0.5, fy=0.5, zoom=1.0):
    """Crop to width/height == aspect, centred on the focal point (fractions).

    zoom > 1 shrinks the crop window for a tighter view.
    """
    w, h = im.size
    if w / h > aspect:
        nw, nh = int(round(h * aspect)), h
    else:
        nw, nh = w, int(round(w / aspect))
    nw, nh = int(round(nw / zoom)), int(round(nh / zoom))
    left = min(max(int(round(fx * w - nw / 2)), 0), w - nw)
    top = min(max(int(round(fy * h - nh / 2)), 0), h - nh)
    return im.crop((left, top, left + nw, top + nh))


def fit_width(im, max_w):
    if im.width <= max_w:
        return im
    return im.resize((max_w, int(round(im.height * max_w / im.width))), Image.LANCZOS)


def save_webp(im, name, quality=82, limit_kb=300):
    path = os.path.join(OUT, name)
    for q in (quality, 76, 70, 64):
        im.save(path, "WEBP", quality=q, method=6)
        size = os.path.getsize(path) / 1024
        if size <= limit_kb:
            break
    print(f"  {name:32s} {im.width}x{im.height}  q{q}  {size:6.1f} KB")


def main():
    os.makedirs(OUT, exist_ok=True)
    print("Generating images...")

    lake = load("IMG_3264.jpg")
    save_webp(fit_width(lake, 1800), "hero-auv.webp", limit_kb=350)
    save_webp(fit_width(lake, 960), "hero-auv-960.webp", limit_kb=200)

    og = fit_width(crop_aspect(lake, 1200 / 630, 0.65, 0.45), 1200)
    og.save(os.path.join(PUBLIC, "og.jpg"), "JPEG", quality=80, progressive=True, optimize=True)
    print(f"  {'public/og.jpg':32s} {og.width}x{og.height}  {os.path.getsize(os.path.join(PUBLIC, 'og.jpg'))/1024:6.1f} KB")

    # Figures taken from the project websites (zhanghutony.github.io/ibmarl, frostlab.byu.edu/consort-planner)
    save_webp(fit_width(load("ibmarl-fig2-method.webp"), 1400), "research-ibmarl-method.webp", quality=90)
    save_webp(
        fit_width(crop_aspect(load("consort-fig7-holoocean.webp"), 16 / 10, 0.5, 0.5), 1200),
        "research-consort-holoocean.webp",
    )

    podium = load("IMG_5698.png")
    save_webp(fit_width(crop_aspect(podium, 16 / 10, 0.50, 0.58), 1200), "talk-iros-podium.webp")

    camp = load("IMG_5525.jpg")
    save_webp(fit_width(crop_aspect(camp, 4 / 3, 0.50, 0.40), 960), "teaching-chip-camp.webp")

    urban = load("UsUrbanGrowthMap.png")
    save_webp(fit_width(crop_aspect(urban, 16 / 10, 0.5, 0.5), 1200), "project-urban-growth.webp")

    for src, dst in (("d1chemgradsim.png", "project-1d-chemokine.webp"),
                     ("twodchemokinevis.png", "research-adler-2d.webp")):
        save_webp(load(src), dst, quality=90)


if __name__ == "__main__":
    sys.exit(main())
