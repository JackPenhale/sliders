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
  labels: any,
) {
  return { name, labels };
}

const rows = [
  createData('Forecast Variables',
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
  createData('Point Queries per Request',
    [{
      value: 0,
      label: '1',
    },
    {
      value: 20,
      label: '1,000',
    },
    {
      value: 40,
      label: '10,000',
    },
    {
      value: 60,
      label: '100,000',
    },
    {
      value: 80,
      label: '1,000,000',
    },
    {
      value: 100,
      label: '1,000,000,000',
    },]),
  createData('Requests per Day', [{
    value: 0,
    label: '1',
  },
  {
    value: 20,
    label: '96',
  },
  {
    value: 40,
    label: '144',
  },
  {
    value: 60,
    label: '1,920',
  },
  {
    value: 80,
    label: '28,800',
  },
  {
    value: 100,
    label: '86,400',
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
                <TableCell sx={{ backgroundColor: '#4A918E' }}>free</TableCell>
              </TableRow>
              <TableBody>
                {rows.map((row) => (
                  <PricingRow thisRow={row} data={rows}/>
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
