import React, { useEffect } from 'react';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from '@mui/material/TableRow';
import { Box, Grid, Slider, Table, Typography } from '@mui/material';
import TotalPrice from './TotalPrice';

export function PricingGridSubHeader(props: any) {
    return (
        <Grid container alignItems="center" sx={{ backgroundColor: '#F8F9FA', height: '80px', fontFamily: 'roboto', fontSize: 22 }}
        >
            <Grid item xs={2} md={2}>
                <Typography>
                    {props.productName}
                </Typography>
            </Grid>
            <Grid item xs={8} md={8}>
                <span />
            </Grid>
            <Grid item xs={2} md={2}>
                <TotalPrice
                    points={props.points}
                    variable={props.variable}
                    requests={props.requests} />
            </Grid>
        </Grid>
    )
}
export default PricingGridSubHeader;