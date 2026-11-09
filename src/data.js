// All site content lives here. Edit text, links and tags in this file only.
// - A link with `href: null` is hidden until you fill in a URL.
// - `image: null` renders a card without a figure.
// - `image.fit: 'contain'` shows a diagram uncropped on a light panel.

import heroImg from './assets/img/hero-auv.webp';
import heroImg960 from './assets/img/hero-auv-960.webp';
import ariaImg from './assets/img/research-aria-poster.webp';
import frostImg from './assets/img/research-frost-auv.webp';
import chemokine2dImg from './assets/img/project-2d-chemokine.webp';
import chemokine1dImg from './assets/img/project-1d-chemokine.webp';
import urbanImg from './assets/img/project-urban-growth.webp';
import podiumImg from './assets/img/talk-iros-podium.webp';
import campImg from './assets/img/outreach-chip-camp.webp';

export const site = {
  name: 'Tony Zhang',
  title:
    'Undergraduate researcher in multi-agent RL and multi-robot planning · University of Utah',
  intro:
    "I'm an undergraduate at the University of Utah studying Data Science and Robotics, and I'm applying to PhD programs for Fall 2027. I want to study how people and teams of robots can work together, especially how one person can teach and correct a whole team. My background is in multi-agent reinforcement learning from human demonstrations in Daniel Brown's ARIA Lab, and in planning for teams of underwater robots at BYU's FROST Lab.",
  education: [
    'B.S. Data Science, Minor in Robotics, University of Utah · expected May 2027 · GPA 3.94',
    'Exchange student, Dept. of Computer Science & Technology, Tsinghua University · Spring 2026',
  ],
  email: 'zhanghutony@gmail.com',
  cv: 'Tony_Zhang_CV.pdf', // lives in public/, resolved with the site base path
  heroImage: {
    src: heroImg,
    srcSet: `${heroImg960} 960w, ${heroImg} 1800w`,
    alt: 'Tony Zhang standing on lakeshore rocks beside a blue autonomous underwater vehicle',
    width: 1800,
    height: 1350,
    position: '65% 40%',
  },
  social: [
    { label: 'GitHub', href: 'https://github.com/ZhangHuTony', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tony-hu-zhang/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:zhanghutony@gmail.com', icon: 'mail' },
  ],
  // href 'cv' resolves to the CV PDF. `primary` gives the solid button.
  cta: [
    { label: 'Research', href: '#research', primary: true },
    { label: 'CV', href: 'cv', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tony-hu-zhang/', external: true },
    { label: 'GitHub', href: 'https://github.com/ZhangHuTony', external: true },
  ],
  contact:
    "I'm happy to talk about multi-robot learning, human-in-the-loop teaching, or PhD opportunities.",
};

export const nav = [
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const research = [
  {
    id: 'ibmarl',
    title: 'IBMARL: Imitation Bootstrapped Multi-Agent RL',
    org: 'ARIA Lab, University of Utah',
    role: 'Undergraduate Researcher · Advisor: Daniel S. Brown',
    period: 'Jul 2025 – present',
    summary:
      'One human teaches a whole team of agents through round-robin behavior cloning. An ensemble of centralized critics chooses between imitation and RL actions for each agent, and a gated imitation loss lets the final policies run decentralized. It surpasses imitation learning 2.6–4.2× faster than demonstration-based baselines on four VMAS tasks, and exceeds the demonstrator on two.',
    badge: 'IROS 2026 workshop · Best Paper Finalist',
    tags: ['Multi-agent RL', 'Imitation learning', 'PyTorch', 'VMAS'],
    image: {
      src: ariaImg,
      alt: 'Tony Zhang standing next to his IBMARL poster at IROS 2026',
      fit: 'cover',
    },
    links: [
      // TODO: add the paper / poster / code URLs when they are public
      { label: 'Paper', href: null },
    ],
  },
  {
    id: 'consort',
    title: 'CONSORT: Cooperative Navigation for GPS-Denied Escort Missions',
    org: 'FROST Lab, Brigham Young University',
    role: 'NSF REU Researcher · Advisor: Brady Moon',
    period: 'Jun – Aug 2026',
    summary:
      "A centralized planner that routes support agents so a primary agent reaches its goal in minimum time while its localization uncertainty stays under a bound. It solved 80% of 50 randomized scenarios versus 54% for the strongest baseline, and Monte Carlo validation in HoloOcean matched predicted terminal uncertainty within 6%.",
    badge: 'ICRA 2027 submission',
    tags: ['Belief-space planning', 'Multi-robot', 'Cooperative localization', 'Julia', 'HoloOcean'],
    image: {
      src: frostImg,
      alt: "A blue autonomous underwater vehicle on a stand among lakeshore rocks",
      fit: 'cover',
    },
    links: [
      // TODO: add the lab project page / code URL
      { label: 'Project page', href: null },
    ],
  },
  {
    id: 'adler',
    title: 'Modeling the Immune Response to Heterogeneous Tumors',
    org: 'Adler Lab, University of Utah',
    role: 'Undergraduate Researcher · Advisor: Fred Adler',
    period: 'Jan 2024 – May 2025',
    summary:
      'Built 1D and 2D simulations of chemokine gradients and T-cell migration in R and C++, compared with mouse-model data from Huntsman Cancer Institute. Also built ML pipelines that score melanoma cell-track quality from quantitative phase imaging.',
    badge: 'UROP grant · SRI funding',
    tags: ['Computational simulation', 'R', 'C++', 'ParaView'],
    image: {
      src: chemokine2dImg,
      alt: 'ParaView visualization of a 2D chemokine gradient and T-cell positions',
      fit: 'contain',
    },
    links: [{ label: 'Code', href: 'https://github.com/ZhangHuTony/2D_ChemokineGradientVis' }],
  },
];

export const publications = [
  {
    title:
      'CONSORT: Cooperative Navigation with Support-Optimized Routing and Trajectories for GPS-Denied Escort Missions',
    authors: ['T. Zhang', 'R. Bartholomew', 'K. Velasco', 'J. Mangelson', 'B. Moon'],
    venue: 'IEEE International Conference on Robotics and Automation (ICRA)',
    year: 2027,
    type: 'Under review',
    badge: null,
    links: [], // TODO: add arXiv / project page when available
  },
  {
    title: 'Imitation Bootstrapped Multi-Agent Reinforcement Learning',
    authors: ['T. Zhang', 'C. Mattson', 'D. S. Brown'],
    venue: 'International Conference on Autonomous Agents and Multiagent Systems (AAMAS)',
    year: 2027,
    type: 'Under review',
    badge: null,
    links: [],
  },
  {
    title: 'Imitation Bootstrapped Multi-Agent Reinforcement Learning',
    authors: ['T. Zhang', 'C. Mattson', 'D. S. Brown'],
    venue: 'PhysCollaBot Workshop, IEEE/RSJ IROS, Pittsburgh, PA · talk and poster',
    year: 2026,
    type: 'Workshop paper',
    badge: 'Best Paper Finalist',
    links: [], // TODO: add the workshop paper URL
  },
  {
    title: 'Modeling Phenotypic Plasticity with Barbie',
    authors: ['T. Zhang', 'A. Voorhis', 'A. Husband', 'B. Wright'],
    venue: 'Math4All Conference, Salt Lake City, UT',
    year: 2024,
    type: 'Poster',
    badge: null,
    links: [],
  },
];

export const talkFigure = {
  src: podiumImg,
  alt: 'Tony Zhang presenting IBMARL at the podium of the PhysCollaBot workshop, IROS 2026',
  caption: 'Presenting IBMARL at the PhysCollaBot workshop, IROS 2026, Pittsburgh',
};

export const projects = [
  {
    title: 'US Urban Growth Visualization',
    description:
      'A D3.js web visualization of urban growth factors across the United States from 2012 to 2024, built as the final project for a data visualization course.',
    tags: ['D3.js', 'JavaScript', 'Data visualization'],
    badge: null,
    image: { src: urbanImg, alt: 'Choropleth map of US urban growth', fit: 'cover' },
    links: [
      {
        label: 'Live demo',
        href: 'https://dataviscourse2024.github.io/group-project-urban-growth-visualization/index.html',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/dataviscourse2024/group-project-urban-growth-visualization',
      },
    ],
  },
  {
    title: '1D Tumor Chemokine Gradient T-Cell Simulation',
    description:
      'An R simulation of T-cell movement through a tumor, driven by chemokine produced by two cancer phenotypes.',
    tags: ['R', 'Simulation'],
    badge: null,
    image: { src: chemokine1dImg, alt: 'Plot from the 1D chemokine gradient simulation', fit: 'contain' },
    links: [{ label: 'GitHub', href: 'https://github.com/ZhangHuTony/1D-ChemokineGradientSim/' }],
  },
  {
    title: '2D Chemokine Gradient Visualization',
    description:
      'Extends the 1D model to two dimensions for chemokine diffusion and T-cell movement, visualized in ParaView.',
    tags: ['C++', 'ParaView', 'Scientific visualization'],
    badge: 'Best Project nominee, Scientific Visualization 2025',
    image: { src: chemokine2dImg, alt: 'ParaView rendering of the 2D simulation', fit: 'contain' },
    links: [{ label: 'GitHub', href: 'https://github.com/ZhangHuTony/2D_ChemokineGradientVis' }],
  },
  {
    title: 'Flash vs. Native Sparse Attention Benchmark',
    description:
      'Course project at Tsinghua University: benchmarked Flash Sparse Attention against Native Sparse Attention on an NVIDIA A10 GPU for Hardware/Software Co-designed AI Systems.',
    tags: ['GPU', 'Sparse attention', 'ML systems'],
    badge: null,
    image: null,
    links: [], // TODO: add the repo link if it is public
  },
];

export const outreachPhoto = {
  src: campImg,
  alt: 'Tony Zhang helping a camper solder a circuit board at BYU Chip Camp',
  caption: 'Volunteering at BYU Chip Camp, 2026',
};
