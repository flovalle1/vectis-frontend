import PropTypes from 'prop-types';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import { Avatar, Box, Card, CardContent, Divider, Stack, SvgIcon, TextField, Typography, Grid } from '@mui/material';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ChevronDownIcon from '@heroicons/react/24/solid/ChevronDownIcon';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Step, StepLabel, Stepper } from '@mui/material';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Item from '@mui/material/Grid';

export const CompanyCard = (props) => {
  const { company } = props;

  const steps = ['Daten anfordern', 'Finanzierungsberater kontaktieren', 'Notartermin'];
  const Img = styled('img')({
    margin: 'auto',
    display: 'flex',
    maxWidth: '100%',
    maxHeight: '100%',
  });


  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%'
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <CardContent sx={{ width: '100%' }}>
            <Grid container spacing={2} >

              <Grid item xs={4} >
                <Item sx={{ width: 250, height: 100 }}>
                  <Img
                    src={company.logo}
                  />
                </Item>
              </Grid>

              <Grid item xs={7}>
                <Typography variant="body2" color="grey">
                  ID: 1030114
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                >
                  {company.title}
                </Typography>
                <Typography
                  variant="body1"
                >
                  {company.description}
                </Typography>


              </Grid>
              <Grid item xs={1}>
                <Typography variant="subtitle1" component="div">
                  500.000€
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </AccordionSummary>
        <AccordionDetails >
          <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index} alignItems="center" display="flex"
                justifyContent="center">
                <TextField
                  id="filled-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
              </Grid>
            ))}
          </Grid>

          <Stepper activeStep={1} alternativeLabel sx={{ pt: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </AccordionDetails>
      </Accordion>

      <Divider />

      {/* Beginn der neuen Zeile */}
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <ClockIcon />
          </SvgIcon>
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
          >
            Vor 2 Stunden hinzugefügt
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <ArrowDownOnSquareIcon />
          </SvgIcon>
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
          >
            {company.downloads} Downloads
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

CompanyCard.propTypes = {
  company: PropTypes.object.isRequired
};
