import React from 'react';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from '@mui/material/TableRow';
import { Slider, Table } from '@mui/material';



export function PricingRow(props: any) {

    const [selectedValue, setValue] = React.useState<number | string | Array<number | string>>(
        1,
    );

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        let test = props.thisRow.labels.find((x: { value: number | number[]; }) => x.value === newValue);
        setValue(test.label);
    };

    return (
        <TableRow
            key={props.thisRow.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row" sx={{
                width: '15%'
            }}>
                {props.thisRow.name}
            </TableCell>
            <TableCell sx={{
                width: '55%'
            }}>
                <Slider sx={{
                    width: 450, color: '#4A918E',
                }}
                    onChange={handleSliderChange}
                    step={null}
                    marks={props.thisRow.labels}></Slider>
            </TableCell>
            <TableCell sx={{
                width: '15%'
            }}> {selectedValue}</TableCell>
            <TableCell sx={{ backgroundColor: '#4A918E',  width: '15%' }}>Coming Soon</TableCell>
        </TableRow>
    )
}
export default PricingRow;