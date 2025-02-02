/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Invoices from 'assets/feature/invoices.svg';
import debt from 'assets/feature/debt.svg';
import monitoring from 'assets/feature/monitoring.svg';


const data = [
  {
    id: 1,
    imgSrc: Invoices,
    altText: 'Lorem ipsum',
    title: 'Accounts Receivable Management',
    texts:['Invoicing, tracking unpaid invoices, and implementing collection strategies','Insuring customer reliability and on-time payments']

  },
  {
    id: 2,
    imgSrc: debt,
    altText: 'Lorem ipsum',
    title: 'Commercial Debt Collection',
    texts:['Professional debt recovery strategies','Legal collaboration with licensed attorneys to resolve disputes and enforce accountability','Compliance with debt collection regulations to protect your business']
  },
  {
    id: 3,
    imgSrc: monitoring,
    altText: 'Lorem ipsum',
    title: 'Consulting & Custom Solutions',
    texts:['Tailored financial strategies and advisory services','Providing Budgeted/Actual Profit/Loss statements and other financial reports on demand']
  },
  // {
  //   id: 4,
  //   imgSrc: forensic,
  //   altText: 'Lorem ipsum',
  //   title: 'Forensic Accounting',
  //   texts:['Investigating discrepancies and providing litigation support']
  // },
  // {
  //   id: 5,
  //   imgSrc: consulting,
  //   altText: 'Lorem ipsum',
  //   title: 'Consulting & Custom Solutions',
  //   texts:['Tailored financial strategies and advisory services']
  // },
];

export default function Services() {
  return (
    <section sx={{ variant: 'section.feature' }} id="services">
      <Container>
        <SectionHeader
          title="Services"
          // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              texts={item.texts}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
