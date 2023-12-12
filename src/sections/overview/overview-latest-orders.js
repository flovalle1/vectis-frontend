import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Grid,
  Icon,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';
import DocumentArrowDownIcon from '@heroicons/react/24/solid/DocumentArrowDownIcon';
import IconButton from '@mui/material/IconButton';
import ArchiveBoxXMarkIcon from '@heroicons/react/24/solid/ArchiveBoxXMarkIcon';

const statusMap = {
  'besichtigt': 'warning',
  'finanzierbar': 'success',
  'abgelehnt': 'error'
};

export const OverviewLatestOrders = (props) => {
  const { orders = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Immobilienprojekte" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Immobilie
                </TableCell>
                <TableCell>
                  Adresse
                </TableCell>
                <TableCell sortDirection="desc">
                  Wohnfläche
                </TableCell>
                <TableCell sortDirection="desc">
                  Kaufpreis
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Aktionen
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
                const createdAt = format(order.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell>
                      {order.ref}
                    </TableCell>
                    <TableCell>
                      {order.customer.name}
                    </TableCell>
                    <TableCell>
                      {order.amount}
                    </TableCell>
                    <TableCell>
                      {order.amount}
                    </TableCell>
                    <TableCell>
                      <SeverityPill color={statusMap[order.status]}>
                        {order.status}
                      </SeverityPill>
                    </TableCell>
                    <TableCell>
                    <Grid container spacing={0.5}>
                        <Grid item xs = {6}>
                        {order.status === 'finanzierbar' && (
                              <IconButton edge="end" >
                                <SvgIcon>
                                  <DocumentArrowDownIcon />
                                </SvgIcon>
                              </IconButton>
                            )}
                        {!order.status && <div style={{ width: 48, height: 48 }}></div>}
                        </Grid>
                        <Grid item xs = {6}>
                              <IconButton edge="end" >
                                <SvgIcon style={{ ':hover': { backgroundColor: 'red' } }}>
                                  <ArchiveBoxXMarkIcon />
                                </SvgIcon>
                              </IconButton>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          Alle ansehen
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestOrders.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
