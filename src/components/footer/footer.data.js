import { FaLinkedinIn} from 'react-icons/fa';

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
        path: 'https://www.linkedin.com/company/infallible-accounting-group/',
        label: 'Linkedin',
        name: 'Linkedin',
        icon: <FaLinkedinIn />,
      },
    ],
  },
];
