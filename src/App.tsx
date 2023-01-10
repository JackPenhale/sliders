import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Grid, Input, Slider, Table, Typography } from '@mui/material';
import PricingRow from './Components/PricingRow';
import PricingGridHeader from './Components/pricing-grid-header';
import PricingGridSubHeader from './Components/PricingGridSubHeader';
import PricingGridRow from './Components/PricingGridRow';
import React, { useState } from 'react';
import SliderBox from './Components/SliderBox';

function App() {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignContent: 'center', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height:'200vh'}}>
      <Box sx={{ width: '60%', textAlign: 'center', height: '25%' }}>
        <Typography variant="h1" fontSize={'72px'}>
          Pricing for what you use
        </Typography>
        <Typography variant="h3" fontSize={'24px'}>
          With flexible pricing from Fathym, use up to x per month for free, and scale your pricing after to meet your needs
        </Typography>
        <Box>
          <Button>
            Find your price
          </Button>
          <Button>
            Contact sales
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', width: '100%', alignContent: 'center', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', height: '25%' }}>
        <Box sx={{ textAlign: 'center', width: '50%', display: 'flex', alignContent: 'center', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
          <Box sx={{ backgroundColor: '#0091ff', borderRadius: '20px', width:'300px', height:'300px'}}>
            <Typography variant="h3" fontSize={'40px'} >$200</Typography>
            <Typography>Usage every month for free</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '50%', pl: 4 }}>
          <Box sx={{ width: '50%' }}>
            <Typography color={'#0091FF'} fontSize={'20px'}>Pay for what you want</Typography>
            <Typography fontSize={'20px'}>Scale your pricing plan to only pay for what you use.</Typography>
            <Typography color={'#0091FF'} fontSize={'20px'}>Support when you need it</Typography>
            <Typography fontSize={'20px'}>All Fathym users have access to support via our community discord server, docs or direct contact with out support team</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '100%', backgroundColor: '#f2f2f7', pt: 10, height: '50%' }}>
        <SliderBox />
      </Box>

    </Box>
  );
}

export default App;
