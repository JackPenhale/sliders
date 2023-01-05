import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid, Input, Slider, Table, Typography } from '@mui/material';
import PricingRow from './Components/PricingRow';
import PricingGridHeader from './Components/pricing-grid-header';
import PricingGridSubHeader from './Components/PricingGridSubHeader';
import PricingGridRow from './Components/PricingGridRow';
import React from 'react';

function createData(
  name: string,
  interval: number,
  numerical: boolean,
  data: any,
) {
  return { name, interval, numerical, data };
}

const pricingData = [
  createData('Forecast Variables', 33, false,
    [{
      value: 0,
      label: 'Basic',
    },
    {
      value: 33,
      label: 'Categorical',
    },
    {
      value: 66,
      label: 'Advanced',
    },
    {
      value: 100,
      label: 'Derived',
    },]),
  createData('Point Queries per Request', 40, true,
    [{
      value: 0,
      label: '1',
      scaledValue: 1
    },
    {
      value: 40,
      label: '1k',
      scaledValue: 1000
    },
    {
      value: 80,
      label: '10k',
      scaledValue: 10000
    },
    {
      value: 120,
      label: '100k',
      scaledValue: 100000
    },
    {
      value: 160,
      label: '1m',
      scaledValue: 1000000
    },
    {
      value: 200,
      label: '100m',
      scaledValue: 100000000
    },]),
  createData('Requests per Day', 40, true,
    [
      {
        value: 0,
        label: '1',
        scaledValue: 1

      },
      {
        value: 40,
        label: '96',
        scaledValue: 96
      },
      {
        value: 80,
        label: '144',
        scaledValue: 144
      },
      {
        value: 120,
        label: '1,920',
        scaledValue: 1920
      },
      {
        value: 160,
        label: '28,800',
        scaledValue: 28800
      },
      {
        value: 200,
        label: '86,400',
        scaledValue: 86400
      },]),
];





function App() {
  const [points, setPoints] = React.useState(0);
  const [variable, setVariable] = React.useState("");
  const [requests, setRequests] = React.useState(0);

  function handlePointQueries(value: number) {
    setPoints(value)
  }
  function handleVariableChange(value: string) {
    setVariable(value);
  }
  function handleRequestValueChange(value: number) {
    setRequests(value)
  }

  const [value, setValue] = React.useState<number | string | Array<number | string>>(
    30,
  );

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Box>
      <Box sx={{
        minWidth: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
      }}>
        <Paper sx={{ width: { xs: '100%', sm: '90%' } }}>
          <PricingGridHeader />
          <PricingGridSubHeader
            productName="Habistack"
            points={points}
            variable={variable}
            requests={requests}
          />
          {pricingData.map((row) => (
            <PricingGridRow
              thisRow={row}
              numerical={row.numerical}
              pointQueries={handlePointQueries}
              variable={handleVariableChange}
              requests={handleRequestValueChange} />
          ))}
        </Paper>
      </Box >
      <Box sx={{
        minWidth: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
      }}>
        <Paper sx={{ width: { xs: '100%', sm: '90%' } }}>
          <PricingGridHeader />
          <PricingGridSubHeader
            productName="Habistack"
            points={points}
            variable={variable}
            requests={requests}
          />
          <Grid container alignItems="center"
            sx={{
              height: { xs: '100px', sm: '80px' },
              fontFamily: 'roboto',
              fontSize: 22
            }}
          >
            <Grid item xs={12} md={2} sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: 'center',
            }}>
              <Typography>
                Point Queries per Request
              </Typography>
            </Grid>
            <Grid item xs={10} md={7} sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: 'center'
            }}>
              <Slider
                sx={{ width: '90%', color: '#4A918E', pb: { xs: 3, sm: 0 } }}
                onChange={handleSliderChange}
                value={typeof value === 'number' ? value : 0}
                min={0}
                step={1}
                max={100000000}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
            </Grid>
            <Grid item xs={2} md={2} sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: 'center'
            }}>
              <Input
                value={value}
                size="small"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                  step: 1,
                  min: 0,
                  max: 100000000,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
            </Grid>
            <Grid item xs={6} md={1}>
              <span />
            </Grid>
          </Grid >
          <Grid container alignItems="center"
            sx={{
              height: { xs: '100px', sm: '80px' },
              fontFamily: 'roboto',
              fontSize: 22
            }}
          >
            <Grid item xs={12} md={2} sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: 'center',
            }}>
              <Typography>
                Requests per Day
              </Typography>
            </Grid>
            <Grid item xs={10} md={7} sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: 'center'
            }}>
              <Slider
                sx={{ width: '90%', color: '#4A918E', pb: { xs: 3, sm: 0 } }}

                min={0}
                step={1}
                max={86400}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
            </Grid>
            <Grid item xs={2} md={2} sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: 'center'
            }}>
              <Typography>
                TODO: number
              </Typography>
            </Grid>
            <Grid item xs={6} md={1}>
              <span />
            </Grid>
          </Grid >

        </Paper>
      </Box >
    </Box>

  );
}

export default App;
