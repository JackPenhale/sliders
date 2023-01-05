import React, { useEffect } from 'react';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from '@mui/material/TableRow';
import { Box, Grid, Slider, Table, Typography } from '@mui/material';

export function PricingRow(props: any) {

    const [selectedValue, setValue] = React.useState(0);

    useEffect(() => {
        initializeSlider(selectedValue)
    }, []);

    const initializeSlider = (event: any) => {
        if (!props.numerical) {
            let test = props.thisRow.data.find((x: { value: number | number[]; }) => x.value === event);
            setValue(test.label);
            props.variable(test.label);
        }
    }

    const handleSliderChange = (event: any) => {
        if (!props.numerical) {
            let test = props.thisRow.data.find((x: { value: number | number[]; }) => x.value === event.target.value);
            console.log(test.label)
            setValue(test.label);
            props.variable(test.label);
        } else {
            setValue(event.target.value);
            if (props.thisRow.name === 'Point Queries per Request') {
                props.pointQueries((scale(selectedValue)))
            } else if (props.thisRow.name === 'Requests per Day') {
                props.requests((scale(selectedValue)))
            }
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
                    {props.thisRow.name}
                </Typography>
            </Grid>
            <Grid item xs={10} md={7} sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: 'center'
            }}>
                {props.numerical && (
                    <Slider
                        sx={{ width: '90%', color: '#4A918E', pb: { xs: 3, sm: 0 } }}
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
                        marks={props.thisRow.data}
                    />)}
                    
            </Grid>
            <Grid item xs={2} md={2} sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: 'center'
            }}>
                <Typography>
                    {props.numerical && (scale(selectedValue))}
                    {!props.numerical && (selectedValue)}
                </Typography>
            </Grid>
            <Grid item xs={6} md={1}>
                <span />
            </Grid>
        </Grid >
    )
}
export default PricingRow;