import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
        Overview | Vectis Finance
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={3}>
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              value="1.500.000€"
            />

          </Grid>
          <Grid xs={3}>
            <OverviewTotalCustomers
              difference={16}
              positive={true}
              sx={{ height: '100%' }}
              value="78"
            />
          </Grid>
          <Grid xs={3}>
            <OverviewTasksProgress
              sx={{ height: '100%' }}
              value="37 Tage"
            />
          </Grid>
          <Grid xs={3}>
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="4%"
            />
          </Grid>

        </Grid>
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewLatestProducts
              products={[
                {
                  id: '5ece2c077e39da27658aa8a9',
                  image: 'https://flovalle1.github.io/vectis-frontend/assets/logos/commerzbank-logo.png',
                  name: 'Commerzbank Finanzierungsbestätigung',
                  updatedAt: subHours(now, 6).getTime()
                },
                {
                  id: '5ece2c0d16f70bff2cf86cd8',
                  image: 'https://flovalle1.github.io/vectis-frontend/assets/logos/deutschebank-logo.png',
                  name: 'Deutsche Bank Rückfragen',
                  updatedAt: subDays(subHours(now, 8), 2).getTime()
                },
                {
                  id: 'b393ce1b09c1254c3a92c827',
                  image: 'https://flovalle1.github.io/vectis-frontend/assets/logos/deutschebank-logo.png',
                  name: 'Deutsche Bank Antragsbestätigung',
                  updatedAt: subDays(subHours(now, 1), 1).getTime()
                },
                {
                  id: 'a6ede15670da63f49f752c89',
                  image: 'https://flovalle1.github.io/vectis-frontend/assets/logos/commerzbank-logo.png',
                  name: 'Commerzbank Ablehnung',
                  updatedAt: subDays(subHours(now, 3), 3).getTime()
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
            <OverviewLatestOrders
              orders={[
                {
                  id: 'f69f88012978187a6c12897f',
                  ref: 'Einfamilienhaus',
                  amount: "170.5qm",
                  customer: {
                    name: 'Marzellenstraße 5, 72070 Köln'
                  },
                  createdAt: 1555016400000,
                  status: 'besichtigt'
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'Doppelhaushälfte',
                  amount: "139.1qm",
                  customer: {
                    name: 'Karlstraße 3, 72072 Tübingen'
                  },
                  createdAt: 1555016400000,
                  status: 'finanzierbar'
                },
                {
                  id: '01a5230c811bd04996ce7c13',
                  ref: 'Einzimmerwohnung',
                  amount: "17qm",
                  customer: {
                    name: 'Wilhelmsstraße 4, 72072 Tübingen'
                  },
                  createdAt: 1554930000000,
                  status: 'abgelehnt'
                },
                {
                  id: '1f4e1bd0a87cea23cdb83d18',
                  ref: 'Pärchen-Wohnung',
                  amount: "65qm",
                  customer: {
                    name: 'Niselweg 5, 72622 Nürtingen'
                  },
                  createdAt: 1554757200000,
                  status: 'finanzierbar'
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
