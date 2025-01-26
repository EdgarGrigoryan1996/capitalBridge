import { FaFacebook, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

export default [
  {
    header: 'Menu',
    items: [
      {
        path: '#home',
        label: 'Home',
      },
      {
        path: '#about',
        label: 'About us',
      },
      {
        path: '#services',
        label: 'Services',
      },
      {
        path: '#whyChooseUs',
        label: 'Why Choose Us',
      },
    ],
  },
  {
    header: 'Contact',
    items: [
      {
        path: '/',
        label: 'Facebook',
        name: 'facebook',
        icon: <FaFacebook />,
      },
      {
        path: '/',
        label: 'Twitter',
        name: 'twitter',
        icon: <FaTwitter />,
      },
      {
        path: '/',
        label: 'Github',
        name: 'github',
        icon: <FaGithub />,
      },
    ],
  },
];
