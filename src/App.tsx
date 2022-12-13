import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Slider, Table } from '@mui/material';

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
      <Paper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx = {{backgroundColor: '#4A918E'}}>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Usage</TableCell>
                <TableCell>Monthly Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>
                    <Slider sx={{
                      width: 500, color: '#4A918E', step: null
                    }}
                      marks={row.labels}></Slider>
                  </TableCell>
                  <TableCell>coming soon</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default App;
