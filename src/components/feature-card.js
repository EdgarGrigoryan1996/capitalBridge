/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';
import {MdDone} from "react-icons/md";

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  texts,
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.img} />

      <Box sx={styles.wrapper}>
        <Heading sx={{ variant: 'text.heading' }}>{title}</Heading>
        {texts.map((text,i) => {
          return (


                <Text as="p" sx={styles.wrapper.description}>

                  <MdDone color="#164EA2"/>
                  {text}
                </Text>


          )
        })}

      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: ['column', null, 'row'],
    px: [0, 5, 0],
  },

  img: {
    width: ['45px', null, '40px', '42px', null, null, null, '60px'],
    height: 'auto',
    flexShrink: 0,
    mr: ['auto', null, 3, 4, null, null, null, 4],
    mb: ['22px', 5],
    ml: 'auto',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: ['center', null, 'left'],
    mt: ['-4px', '-7px'],
    mb: -1,
    description: {
      fontSize: [1, 2],
      fontWeight: 'body',
      lineHeight: 1.9,
      position: 'relative',
      pt: 1,
    },
  },
};
