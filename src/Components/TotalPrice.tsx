import React, { useEffect } from 'react';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from '@mui/material/TableRow';
import { Box, Grid, Slider, Table, Typography } from '@mui/material';

const PointQueriesPricing = (value: number) => {
    const tier2 = (100000 * .00009).toString();
    const tier3 = (1000000 * .000019).toString();
    const tier4 = (10000000 * .0000099).toString();
    const tier5 = (100000000 * .00000299).toString();
    console.log("value1  " +  value);
    value =  value  * 144 * 30;
    console.log("value  " +  value);

    //tier 1    
    if (value <= 10000) {
        return (1).toString();
    }
    //tier 2
    else if (value <= 100000) {
        console.log()
        return Math.round((value - 10000) * .00009).toString();
    }
    //tier 3
    else if (value <= 1000000) {
        return (Math.round((value - 110000) * .000019) + Number(tier2)).toString();
    }
    //tier 4
    else if (value <= 10000000) {
        return (Math.round((value - 1110000) * .0000099) + Number(tier2) + Number(tier3)).toString();
    }
    //tier 5
    else if (value <= 100000000) {
        return (Math.round((value - 111110000) * .00000299) + Number(tier2) + Number(tier3) + Number(tier4)).toString();
    } else {
        return "1"
    }
}

const RequestsPerDayCost = (value: number) => {
    if (value < 25) {
        return value;
    } else if (value < 33) {
        return Math.round(value * 1.01455).toString();
    } else if (value < 49) {
        return Math.round(value * 1.02910).toString();
    } else if (value < 73) {
        return Math.round(value * 1.04365).toString();
    } else if (value < 97) {
        return Math.round(value * 1.05820).toString();
    } else if (value < 145) {
        return Math.round(value * 1.07275).toString();
    } else if (value < 289) {
        return Math.round(value * 1.08730).toString();
    } else if (value < 361) {
        return Math.round(value * 1.10185).toString();
    } else if (value < 481) {
        return Math.round(value * 1.11640).toString();
    } else if (value < 721) {
        return Math.round(value * 1.13095).toString();
    } else if (value < 961) {
        return Math.round(value * 1.14550).toString();
    } else if (value < 1441) {
        return Math.round(value * 1.16005).toString();
    } else if (value < 1921) {
        return Math.round(value * 1.17460).toString();
    } else if (value < 2881) {
        return Math.round(value * 1.18915).toString();
    } else if (value < 4321) {
        return Math.round(value * 1.20370).toString();
    } else if (value < 5761) {
        return Math.round(value * 1.21825).toString();
    } else if (value < 8641) {
        return Math.round(value * 1.23280).toString();
    } else if (value < 17281) {
        return Math.round(value * 1.24735).toString();
    } else if (value < 21601) {
        return Math.round(value * 1.26190).toString();
    } else if (value < 28800) {
        return Math.round(value * 1.27645).toString();
    } else if (value < 43201) {
        return Math.round(value * 1.291).toString();
    } else if (value < 86401) {
        return Math.round(value * 1.30555).toString();
    } else return "1"
}

const VariableTypePricing = (variable: string) => {
    switch (variable) {
        case "Basic":
            return "1"
        case "Categorical":
            return "1.1"
        case "Advanced":
            return "1.2";
        case "Derived":
            return "1.3"
    }
    return "1";
}

const CalculateCost = (PointsPerRequest: number, RequestsPerDay: number, VariableType: string) => {
    console.log("REQUESTS ==== "  + RequestsPerDayCost(RequestsPerDay) )
    console.log("POINTS  ==== "  + PointQueriesPricing(PointsPerRequest) )
    console.log("VARIABLE === "  + VariableTypePricing(VariableType))

    return (Math.round(Number(PointQueriesPricing(PointsPerRequest)))).toString()
}



export function TotalPrice(props: any) {
    const [price, setPrice] = React.useState("Free!");

    useEffect(() => {
        CalculateCost(props.points, props.requests, props.variable)
    }, [props.points]);
    useEffect(() => {
        CalculateCost(props.points, props.requests, props.variable)
    }, [props.variable]);
    useEffect(() => {

        CalculateCost(props.points, props.requests, props.variable)
    }, [props.requests]);
    useEffect(() => {
        console.log("rererer")
        setPrice(CalculateCost(props.points, props.requests, props.variable));
    }, [props.requests, props.variable, props.points]);

    return (
        <Typography>
            {price}
        </Typography>
    )
}
export default TotalPrice;