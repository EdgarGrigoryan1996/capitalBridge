/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';
import {
  IoIosMail,
  IoIosPhonePortrait,
  IoMdPin
} from 'react-icons/io';

import ContactImage from 'assets/images/contact.svg';
import DrawingArrow from 'assets/drawing-arrow.svg';

const data = {
  title:
    'Contact Us',
  // description:
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  // btnName: 'Explore Details',
  // btnURL: '#',
  points: [
    {
      icon: <IoIosPhonePortrait color="#164EA2"/>,
      text: 'Phone: +7 (495) 123-45-67',
    },
    {
      icon: <IoIosMail color="#164EA2"/>,
      text: 'Email: contact@capitalbridge.ru',
    },
    {
      icon: <IoMdPin color="#164EA2"/>,
      text: 'Address: 46, building 1, Friedrich Engels Street',
    },
  ],
};

export default function ContactUs() {
  return (
    <section sx={styles.containerBox} id="contact">
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={ContactImage} alt="Thumbnail" width="700" height="565" />
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            points={data.points}
          />
        </Box>
      </Container>
      <Box sx={styles.bottomArrow}>
        <Image src={DrawingArrow} alt="Arrow" />
      </Box>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['flex-Start', null, null, 'space-between'],
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, null, null, null, null, null, null, 8],
    backgroundColor: 'white',
  },
  thumbnail: {
    pr: [2, null, 7, 4, 7, 8, null, 10],
    pl: [0, null, 7, 0],
    display: 'flex',
    order: [2, null, null, 0],
    mx: ['auto', 0],
    img: {
      ml: [0, null, null, -3],
      height: [265, 'auto'],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    width: ['100%', null, null, 350, 400, '470px'],
    pb: [7, null, null, 0],
    '.btn__link': {
      mt: [4, null, 5],
    },
  },
  bottomArrow: {
    position: 'absolute',
    bottom: -185,
    left: '33%',
    display: ['none', null, null, null, null, null, null, 'block'],
  },
};
