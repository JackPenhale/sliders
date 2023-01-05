import React, { useEffect } from 'react';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from '@mui/material/TableRow';
import { Box, Grid, Slider, Table, Typography } from '@mui/material';

export function PricingGridHeader(props: any) {
    return (
        <Grid container alignItems="center" sx={{ backgroundColor: '#A4BAB3', height: '80px', fontFamily: 'roboto', fontSize: 22, display: { xs: 'none', sm: 'flex' } }}
        >
            <Grid item sm={2} sx={{ pl: 2 }}>
                <Typography>
                    Product
                </Typography>
            </Grid>
            <Grid item sm={8}>
                <Typography>
                    Usage
                </Typography>
            </Grid>
            <Grid item sm={2} sx={{ pl: 2 }} >
                <Typography>
                    Monthly Cost
                </Typography>
            </Grid>
        </Grid>
    )
}
export default PricingGridHeader;