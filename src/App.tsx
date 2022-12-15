import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Slider, Table } from '@mui/material';
import PricingRow from './Components/PricingRow';

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
  createData('Point Queries per Request', 40,  true,
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
          scaledValue:100000000
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

  return (
    <div className="App">
      <Box sx={{
        minWidth: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
      }}>
        <Paper sx={{ width: '90%', borderRadius: '50%' }}>
          <TableContainer component={Paper}>
            <Table sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none"
              },
              minWidth: 650
            }}>
              <TableHead sx={{ backgroundColor: '#A4BAB3' }}>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Usage</TableCell>
                  <TableCell />
                  <TableCell sx={{
                    [`& .${tableCellClasses.root}`]: {
                      borderBottom: "none"
                    },
                  }}>Monthly Cost</TableCell>
                </TableRow>
              </TableHead>
              <TableRow sx={{ backgroundColor: '#F8F9FA' }}>
                <TableCell>Habistack</TableCell>
                <TableCell />
                <TableCell />
                <TableCell>Free!</TableCell>
              </TableRow>
              <TableBody>
                {pricingData.map((row) => (
                  <PricingRow thisRow={row} mobile={true} numerical={row.numerical} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </div >
  );
}

export default App;
