import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import About from 'sections/about';
import Knowledge from 'sections/knowledge';
import ClientFeedback from 'sections/client-feedback';
import WhyChooseUs from 'sections/whyChooseUs';
import ContactUs from 'sections/contactUs';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout> 
        <SEO
          description="Infallible accounting group"
          title="Infallible"
        />
        <Banner />
        <About />
        <Services />
        <WhyChooseUs />
        <ContactUs />
        {/*<ContactUs />*/}
        {/*<Knowledge />*/}
        {/*<ClientFeedback />*/}
      </Layout>
    </ThemeProvider>
  );
}
