import { FaLinkedinIn} from 'react-icons/fa';
import {IoIosMail} from "react-icons/io";

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
      {
        path: `mailto:info@infallibleaccgroup.com?subject=&body=`,
        label: 'Email Us',
        name: 'Email Us',
        icon: <IoIosMail color="#849184"/>,
      },
    ],
  },
];
