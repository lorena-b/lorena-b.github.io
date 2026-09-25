export type ThemeName = 'lavender' | 'rose' | 'matcha';

export const THEMES: { id: ThemeName; label: string; swatch: string }[] = [
  { id: 'matcha', label: 'Sage Matcha', swatch: '#5f8a5a' },
  { id: 'lavender', label: 'Lavender Cream', swatch: '#7c5cd6' },
  { id: 'rose', label: 'Rose Blush', swatch: '#d4578a' },
];

export const SITE = {
  title: 'Lorena Buciu — Software Engineer',
  description:
    'Lorena Buciu — Software Engineer 2 at HelloFresh building React referral experiences.',
};

export const PROFILE = {
  name: 'Lorena Buciu',
  initials: 'LB',
  firstName: 'Lorena',
  shortRole: 'software engineer',
  title: 'Software Engineer II at HelloFresh',
  tagline: 'Building referral experiences @ HelloFresh 🍋',
  email: 'lorena.buciu@mail.utoronto.ca',
  emailDisplay: 'Email me',
  github: 'https://github.com/lorena-b',
  linkedin: 'https://www.linkedin.com/in/lorena-buciu/',
  resume: '/resume.pdf',
  avatar: '/img/pfp.png',
  bio: [
    "Hi, I'm Lorena! I'm a Software Engineer 2 at HelloFresh, where I build React interfaces for referral experiences across our Ready-to-Eat brands.",
    "I graduated in Computer Science from the University of Toronto, and I'm experienced in full-stack development with Python and JavaScript/TypeScript. In the past I helped build PythonTA, hacked at TreeHacks and Hack the North, interned as a full-stack developer at Dash Hudson, and completed a 16-month internship at HelloFresh working on React and React Native apps for Factor and Youfoodz.",
    'I love learning new tools and expanding my web skills. Always up for learning opportunities — feel free to connect!',
  ],
  skills: ['Python', 'TypeScript', 'JavaScript', 'React', 'React Native', 'Full-stack'],
};

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    title: 'UofT Course Scheduling App',
    description:
      'Specify courses plus filters like "no classes after 5 PM" through the CLI. The program queries the U of T Academic Calendar for lecture and tutorial sections, generates every conflict-free schedule, and exports the chosen one to .ics / .csv / .jpg for calendar apps.',
    image: '/img/schedule.png',
    link: 'https://github.com/lorena-b/UofT-Course-Scheduling-Application',
    tags: ['Java'],
  },
  {
    title: 'Reddit Topic Analysis',
    description:
      'Enter a topic or keyword and the app scans ~1,000 Reddit posts to report market popularity plus consumer sentiment from negative to positive. Flask back-end and API serve the processing pipeline, with the PRAW wrapper pulling Reddit data.',
    image: '/img/demogif.gif',
    link: 'https://github.com/lorena-b/TreeHacks',
    tags: ['Python', 'Flask'],
  },
  {
    title: 'VSLR Model',
    description:
      'Extrapolates Vancouver sea-level rise from CSV data using SARIMAX and Theil-Sen regression, then plots predictions on an interactive Dash + Plotly map with a slider showing flood-susceptible areas 280 years out.',
    image: '/img/frontend.png',
    link: 'https://github.com/lorena-b/VSLR-model',
    tags: ['Python', 'Dash', 'Plotly'],
  },
];

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const SHARED = {
  resume: 'Résumé',
  github: 'GitHub',
  linkedin: 'LinkedIn',
  email: 'Email',
};

export const NAV_TEXT = {
  homeAria: 'Back to top',
  primaryAria: 'Primary',
  mobileAria: 'Mobile',
  menuAria: 'Toggle menu',
  menuIcon: '☰',
  themeGroupAria: 'Color theme',
  switchToLight: 'Switch to light mode',
  switchToDark: 'Switch to dark mode',
  lightIcon: '☀',
  darkIcon: '☾',
};

export const HERO_TEXT = {
  greetingBefore: "Hi, I'm",
  greetingAfter: '!',
  ctaProjects: 'View projects ↓',
  ctaContact: 'Get in touch',
  skillsAria: 'Skills',
};

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export const EXPERIENCE: Job[] = [
  {
    role: 'Software Developer',
    company: 'HelloFresh',
    location: 'Toronto, ON',
    period: 'Jun 2025 – Present',
    highlights: [
      'Architected a unified referrals experience across 15+ markets, replacing fragmented legacy code so commercial teams can self-serve loyalty campaigns with minimal engineering support.',
      'Shipped Next.js pages and React components for the Factor Programs launch with React Query caching, while fixing retention-critical bugs.',
      'Built frontend interfaces for an internal referrals campaign tool with segmentation overrides, cutting campaign testing delays by 24h.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'HelloFresh',
    location: 'Toronto, ON',
    period: 'May 2023 – Aug 2024',
    highlights: [
      'Developed responsive React and React Native interfaces for Ready-to-Eat brands including Factor and Youfoodz.',
      'Ran Statsig-powered A/B tests on meal-choice features that drove a $4.3M net CVA increase and cut cancellations by 2.3%.',
      'Built 20+ React Native components for the Factor mobile shopping cart (Redux) and added Jest + Cypress coverage for critical flows.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Dash Social',
    location: 'Toronto, ON',
    period: 'May 2022 – Aug 2022',
    highlights: [
      'Shipped features in a Vue.js + Flask + MySQL SaaS platform used by leading global brands for social marketing insights.',
      'Built 10+ Celery async tasks for Instagram data processing and Flask APIs that improved YouTube metrics accuracy.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'University of Toronto',
    location: 'Toronto, ON',
    period: 'May 2021 – Aug 2021',
    highlights: [
      'Contributed to PythonTA, an open-source static analysis tool used by 1K+ students — including custom pylint/astroid checkers and an expanded test suite.',
    ],
  },
];

export const EXPERIENCE_TEXT = {
  eyebrow: 'Career',
  heading: 'Experience',
  intro: 'From open source to production systems serving millions.',
};

export const PROJECTS_TEXT = {
  eyebrow: 'Selected work',
  heading: 'Projects',
  intro:
    'A few favourites from school, hackathons, and side projects.',
  cardLink: 'View on GitHub →',
  cardLinkAriaSuffix: 'on GitHub',
};

export const CONTACT_TEXT = {
  heading: 'Let’s connect!',
  body: 'I’m always looking for learning opportunities and ways to grow as a software engineer.',
};

export const FOOTER_TEXT = {
  tagline: '· Made with ♥ in Toronto',
  navAria: 'Footer',
};

export const BACK_TO_TOP_TEXT = {
  aria: 'Back to top',
  icon: '↑',
};
