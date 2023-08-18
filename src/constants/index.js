import {
  computerscience,
  mathematics,
  business,
  economics,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Computer Science',
    icon: computerscience,
  },
  {
    title: 'Mathematics',
    icon: mathematics,
  },
  {
    title: 'Business',
    icon: business,
  },
  {
    title: 'Economics',
    icon: economics,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Computer Science and Engineering Society UC San Diego',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'June 2023 - Present',
  },
  {
    title: 'Lead Developer',
    company_name: 'Burmese Student Association UC San Diego',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2023 - Present',
  },
  {
    title: 'Project Manager',
    company_name: 'City of Chula Vista',
    icon: kelhel,
    iconBg: '#333333',
    date: 'January 2021 - June 2021',
  },

];

const projects = [
  {
    id: 'project-1',
    name: 'CSES ',
    description: 'An informative websiet for Computer Science and Engineering Society at UC San Diego',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/Will-Hsu/cses_webdev',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'BURSA',
    description:
      'A website for Burmese Student Association UC San Diego',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/kaung-min-khant/bursa-ucsd',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Add Your Recipe',
    description: 'An iOS app that allows users to add their own recipes and share them with others.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/kaung-min-khant/add-your-recipe',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'PDF to Excel',
    description: `A website that converts PDF to Excel sheet for UC San Diego Library.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/kaung-min-khant/circuit',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Chatty',
    description:
      'An AI chat with ChatGPT',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/kaung-min-khant/chatty',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
