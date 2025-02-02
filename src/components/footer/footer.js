/** @jsx jsx */
import { jsx, Heading, Box, Text, Flex, Container } from 'theme-ui';
import { Link } from 'components/link';
import { Link as LinkScroll} from 'react-scroll';
import Logo from 'components/logo';
import menuItems from './footer.data';

import FooterLogo from 'assets/logo.png';
import CallToAction from 'sections/call-to-action';
export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <CallToAction />
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          <Box sx={styles.copyrightArea}>
            <Box className="footer__logo">
              <Logo src={FooterLogo} />
            </Box>

            <Text as="p" sx={styles.copyrightArea.copyright}>
              Copyright by ©Infallible 2025
            </Text>
          </Box>
          <Flex sx={styles.footer.menuArea}>
            {menuItems &&
              menuItems.map(({ header, items }, i) => (
                <Box sx={styles.footer.menus} key={i}>
                  <Heading sx={styles.footer.heading}>
                    {header}
                  </Heading>
                  <nav>
                    {items?.map(({ path, label, name, icon },index) => {
                      if(i === 0){
                        return (
                            <LinkScroll
                                className={name}
                                to={path}
                                key={index}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                sx={styles.footer.link}

                            >
                              {label}
                            </LinkScroll>
                        )
                      }
                      else {
                        return (
                            <Link
                                className={name}
                                path={path}
                                key={index}
                                sx={styles.footer.link}
                                target={i > 0 ? '_blank' : undefined}
                            >
                              {icon}
                              {label}
                            </Link>
                        )
                      }

                    }


                    )}
                  </nav>
                </Box>
              ))}
          </Flex>
        </Box>
        <Box sx={styles.terms}>
          We prioritize your privacy and protect your information, collecting data only to improve services. By using our site, you agree to our Privacy Policy and Terms of Service.
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  terms: {
    color: '#fff',
    backgroundColor: '#343D48',
    fontSize: ["12px"],
    textAlign: "center",
    p:"10px"
  },
  footer: {
    backgroundColor: 'background_secondary',
    container: {
      width: '100%',
      alignItems: 'center',
    },
    footerTopArea: {
      display: 'flex',
      flexWrap: ['wrap','wrap','nowrap'],
      pt: ['60px', null, null, null, 8],
      pb: [7, null, null, null, '30px'],
      pl: [0, null, 4, 6, null, 7],
      pr: [0, null, 4, 6],
    },
    menuArea: {
      width: [
        '100%',
        null,
        null,
        null,
        'calc(100% - 250px)',
        'calc(100% - 300px)',
      ],
      justifyContent: 'space-around',
      flexWrap: 'nowrap',
      pb: 3,
    },
    menus: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mb: ['45px', null, null, '50px', '60px'],
      pr: 5,
      width: ['50%', null, null, '25%'],
    },

    heading: {
      fontSize: ["12px",1,2,3],
      color: 'heading',
      fontWeight: 'heading',
      litterSpacing: 'heading',
      mb: [4, null, null, null, 5, 6],
      lineHeight: '1.35',
    },

    link: {
      fontSize: ['14px', 1],
      color: '#0F2137',
      fontWeight: 'body',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.9],
      svg: {
        width: '17px',
        mr: 2,
        fontSize: ['12px',1,2,3],
        flexShrink: 0,
      },
      '&.Linkedin > svg': {
        color: '#0A66C2',
      },
      '&.Linkedin': {
        color: '#0F2137',
      },
      ':hover': {
        color: 'primary',
      },
      ':last-child': {
        mb: '0px',
      },
    },
  },
  copyrightArea: {
    width: ['200px', '200px', '200px', '200px', '200px', '200px'],
    flexShrink: 0,
    margin: '0 auto 50px auto',
    textAlign: ['center', "center", "center", "center", 'left'],
    order: [2, null, 0, 0, 0],

    '.footer__logo': {
      a: {
        mr: 0,
        img: {
          mx: ['auto', null, null, null, 0],
        },
      },
    },
    '.footer__menu': {
      display: 'flex',
      justifyContent: ['center', null, null, null, 'center'],
      flexWrap: 'wrap',
      mt: [3, null, null, null, 4],
      a: {
        fontSize: ['14px', 1],
        color: 'text_secondary',
        fontWeight: 'body',
        mb: 1,
        cursor: 'pointer',
        transition: 'all 0.35s',
        textDecoration: 'none',
        lineHeight: [1.5, null, 1.9],
        ':before': {
          px: 2,
          content: '"|"',
          color: 'text_secondary',
        },
        ':first-of-type:before': {
          display: 'none',
        },
        ':hover': {
          color: 'primary',
        },
      },
    },
    copyright: {
      fontSize: ['12px','13px'],
      textAlign: 'center',
      color: '#6D7886',
      pt: 1,
    },

  },
};
