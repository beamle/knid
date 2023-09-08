import React from 'react';
import {OrderType} from "../reducers/orders-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store";
import TableCell from "@mui/material/TableCell";
import {Box, DialogContent, Grid, Paper, TextField, Typography} from "@mui/material";


const generateGridItem = (label: string, value: string | undefined) => (
    <Grid item xs={6}>
        <Typography variant='subtitle2' sx={{mb: 1}}>{label}</Typography>
        <TextField
            inputProps={{style: {color: 'grey'}}}
            sx={{backgroundColor: '#ededee', width: '90%'}}
            defaultValue={value}
        />
    </Grid>

);

export const OrderProfile = () => {
    const orderToUpdate = useSelector<AppRootStateType, OrderType | null>(state => state.orders.orderToUpdate)
    console.log(orderToUpdate?.orderNo)

    return (
        <Box sx={{m: 6}}>
            <Paper sx={{ height: '25rem'}}>
                <Grid container rowSpacing={2} spacing={0} justifyContent="center">
                    {generateGridItem('orderNo', orderToUpdate?.orderNo)}
                    {generateGridItem('date', orderToUpdate?.date)}
                    {generateGridItem('customer', orderToUpdate?.customer)}
                    {generateGridItem('trackingNo', orderToUpdate?.trackingNo)}
                    {generateGridItem('consignee', orderToUpdate?.consignee)}
                    {generateGridItem('status', orderToUpdate?.status)}
                </Grid>
            </Paper>
        </Box>
    );
};

