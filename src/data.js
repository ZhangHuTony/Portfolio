// All site content lives here. Edit text, links and tags in this file only.
// - A link with `href: null` is hidden until you fill in a URL.
// - `image: null` renders a card without a figure.
// - `image.fit: 'contain'` shows a diagram uncropped on a light panel.

import heroImg from './assets/img/hero-auv.webp';
import heroImg960 from './assets/img/hero-auv-960.webp';
import ibmarlImg from './assets/img/research-ibmarl-method.webp';
import consortImg from './assets/img/research-consort-holoocean.webp';
import adlerImg from './assets/img/research-adler-2d.webp';
import chemokine1dImg from './assets/img/project-1d-chemokine.webp';
import urbanImg from './assets/img/project-urban-growth.webp';
import podiumImg from './assets/img/talk-iros-podium.webp';
import campImg from './assets/img/teaching-chip-camp.webp';

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
  { label: 'Other Projects', href: '#projects' },
  { label: 'Teaching', href: '#teaching' },
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
      'One person teaches a whole team by controlling one agent at a time. Each agent proposes an imitation action and an RL action, an ensemble of centralized critics picks among them, and a gated imitation loss lets the final policies run decentralized. On four cooperative benchmarks it surpasses imitation learning 2.6–4.2× faster than baselines on two tasks, is the only method to surpass it on the other two, and exceeds the demonstrator on two.',
    badge: 'IROS 2026 workshop · Best Paper Finalist',
    tags: ['Multi-agent RL', 'Imitation learning', 'PyTorch', 'VMAS'],
    image: {
      src: ibmarlImg,
      alt: 'IBMARL method diagram: round-robin behavior cloning, online action proposals chosen by an ensemble of critics, and gated imitation during RL training',
      fit: 'contain',
    },
    links: [{ label: 'Project page', href: 'https://zhanghutony.github.io/ibmarl/' }],
  },
  {
    id: 'consort',
    title: 'CONSORT: Multi-Robot Planning for Cooperative Localization in GPS-Denied Environments',
    org: 'FROST Lab, Brigham Young University',
    role: 'NSF REU Researcher · Advisor: Brady Moon',
    period: 'Jun – Aug 2026',
    summary:
      'A centralized planner for the escort problem: a primary vehicle must reach its goal in minimum time with its localization uncertainty under a bound, while support vehicles are routed to hold it there. It searches a hexagonal lattice and refines with B-splines. It solved 80% of 50 scenarios versus 54% for the best baseline, and HoloOcean plans stayed collision-free with terminal uncertainty within 6% of the prediction.',
    badge: 'ICRA 2027 submission',
    tags: ['Belief-space planning', 'Multi-robot', 'Cooperative localization', 'Julia', 'HoloOcean'],
    image: {
      src: consortImg,
      alt: 'HoloOcean simulation of two autonomous underwater vehicles above a seafloor with kelp',
      fit: 'cover',
    },
    links: [{ label: 'Project page', href: 'https://frostlab.byu.edu/consort-planner/' }],
  },
  {
    id: 'adler',
    title: 'Modeling the Immune Response to Heterogeneous Tumors',
    org: 'Adler Lab, University of Utah',
    role: 'Undergraduate Researcher · Advisor: Fred Adler',
    period: 'Jan 2024 – May 2025',
    summary:
      'Built 1D and 2D simulations of chemokine gradients and T-cell migration in R and C++, compared with mouse-model data from Huntsman Cancer Institute, and visualized them in ParaView (a Best Project nominee in Scientific Visualization). Also built ML pipelines that score melanoma cell-track quality from quantitative phase imaging.',
    badge: 'UROP grant · SRI funding',
    tags: ['Computational simulation', 'R', 'C++', 'ParaView'],
    image: {
      src: adlerImg,
      alt: 'ParaView visualization of a 2D chemokine gradient and T-cell positions',
      fit: 'contain',
    },
    links: [
      { label: '1D simulation', href: 'https://github.com/ZhangHuTony/1D-ChemokineGradientSim/' },
      { label: '2D visualization', href: 'https://github.com/ZhangHuTony/2D_ChemokineGradientVis' },
    ],
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
    links: [{ label: 'Project page', href: 'https://frostlab.byu.edu/consort-planner/' }],
  },
  {
    title: 'Imitation Bootstrapped Multi-Agent Reinforcement Learning',
    authors: ['T. Zhang', 'C. Mattson', 'D. S. Brown'],
    venue: 'International Conference on Autonomous Agents and Multiagent Systems (AAMAS)',
    year: 2027,
    type: 'Under review',
    badge: null,
    links: [{ label: 'Project page', href: 'https://zhanghutony.github.io/ibmarl/' }],
  },
  {
    title: 'Imitation Bootstrapped Multi-Agent Reinforcement Learning',
    authors: ['T. Zhang', 'C. Mattson', 'D. S. Brown'],
    venue: 'PhysCollaBot Workshop, IEEE/RSJ IROS, Pittsburgh, PA · talk and poster',
    year: 2026,
    type: 'Workshop paper',
    badge: 'Best Paper Finalist',
    links: [{ label: 'Project page', href: 'https://zhanghutony.github.io/ibmarl/' }], // TODO: add the workshop paper URL
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
    title: 'Flash vs. Native Sparse Attention Benchmark',
    description:
      'Course project at Tsinghua University: benchmarked Flash Sparse Attention against Native Sparse Attention on an NVIDIA A10 GPU for Hardware/Software Co-designed AI Systems.',
    tags: ['GPU', 'Sparse attention', 'ML systems'],
    badge: null,
    image: null,
    links: [], // TODO: add the repo link if it is public
  },
];

export const teaching = [
  {
    kind: 'Tutoring',
    title: 'Mathematics Tutor',
    org: 'Learning Center, University of Utah',
    period: 'Aug 2025 – present',
    points: [
      'Tutor NCAA student-athletes in weekly standing sessions on college algebra, quadratic equations, statistics, and calculus.',
      "Hold appointment-based sessions for students across the university, adapting explanations to each student's course and preparation.",
    ],
  },
  {
    kind: 'Outreach',
    title: 'Volunteer Helper, Chip Camp',
    org: 'Department of Electrical and Computer Engineering, Brigham Young University',
    period: 'Summer 2026',
    points: [
      'Helped run a three-day engineering camp for students aged 12–14.',
      'Led chemistry demonstrations and helped campers build and launch model rockets.',
    ],
  },
];

export const teachingFigure = {
  src: campImg,
  alt: 'Tony Zhang helping a camper solder a circuit board at BYU Chip Camp',
  caption: 'Helping a camper solder at BYU Chip Camp, summer 2026',
};
