import React, { useEffect } from 'react';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from '@mui/material/TableRow';
import { Box, Slider, Table } from '@mui/material';

export function PricingRow(props: any) {

    const [selectedValue, setValue] = React.useState(0);

    // useEffect(() => {
    //     handleSliderChange(null, selectedValue)
    // }, []);

    const handleSliderChange = (event: any) => {
        if (!props.numerical) {
            let test = props.thisRow.data.find((x: { value: number | number[]; }) => x.value === event.target.value);
            console.log(test.label)
            setValue(test.label);
            console.log(selectedValue + " --- --- --")
        } else {
            setValue(event.target.value);
        }
        console.log(event.target)

    };

    const scale = (value: number) => {
        if (!props.numerical) {
            return;
        }
        const previousMarkIndex = Math.floor(value / props.thisRow.interval);
        const previousMark = props.thisRow.data[previousMarkIndex];
        const remainder = value % props.thisRow.interval;
        if (remainder === 0) {
            return previousMark.scaledValue;
        }
        const nextMark = props.thisRow.data[previousMarkIndex + 1];
        const increment = (nextMark.scaledValue - previousMark.scaledValue) / props.thisRow.interval;
        return Math.round(remainder * increment + previousMark.scaledValue);
    };

    function numFormatter(num: number) {
        if (num < 1000) {
            return Math.round(num)
        }
        if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
        } else if (num < 900) {
            return num; // if value < 1000, nothing to do
        }
    }

    return (
        <TableRow
            key={props.thisRow.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >


            <TableCell component="th" scope="row" sx={{
                width: '20%'
            }}>
                {props.thisRow.name}
            </TableCell>
            <TableCell sx={{
                width: '55%'
            }}>
                {/* <Slider sx={{
                            width: '90%', color: '#4A918E',
                        }}
                            onChange={handleSliderChange}
                            step={null}
                            marks={props.thisRow.labels}
                        /> */}
                {props.numerical && (
                    <Slider
                        sx={{ width: '90%', color: '#4A918E' }}
                        value={selectedValue}
                        min={0}
                        step={1}
                        max={200}
                        valueLabelFormat={numFormatter}
                        marks={props.thisRow.data}
                        scale={scale}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="non-linear-slider"
                    />)}
                {!props.numerical && (

                    <Slider sx={{
                        width: '90%', color: '#4A918E',
                    }}
                        scale={(x) => x}
                        onChange={handleSliderChange}
                        step={null}
                        marks={props.thisRow.data}></Slider>)}
            </TableCell>
            <TableCell sx={{
                width: '15%'
            }}>
                {props.numerical && (scale(selectedValue))}
                {!props.numerical && (selectedValue)}
            </TableCell>


            {/* {
                !props.mobile && (
                    <Box>
                        <TableRow
                            key={props.thisRow.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{ width: '100%' }}>
                                {props.thisRow.name}
                            </TableCell>
                        </TableRow>
                        <TableRow
                            key={props.thisRow.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell sx={{
                                width: '80%'
                            }}>

                                <Slider sx={{
                                    width: '90%', color: '#4A918E',
                                }}
                                    onChange={handleSliderChange}
                                    step={null}
                                    marks={props.thisRow.labels}></Slider>
                            </TableCell>
                            <TableCell sx={{
                                width: '20%'
                            }}> {selectedValue}</TableCell>

                    </Box>)
            } */}
        </TableRow >
    )
}
export default PricingRow;