import logo from './logo.svg';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid, Input, Slider, Table, Typography } from '@mui/material';
import PricingRow from './PricingRow';
import PricingGridHeader from './pricing-grid-header';
import PricingGridSubHeader from './PricingGridSubHeader';
import PricingGridRow from './PricingGridRow';
import React, { useState } from 'react';

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





function SliderBox() {
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

  return (
    <Box>
      <Box sx={{
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
      }}>
        <Paper sx={{ width: { xs: '100%', sm: '90%', borderRadius:'20px'} }}>
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
    </Box>

  );
}

export default SliderBox;
