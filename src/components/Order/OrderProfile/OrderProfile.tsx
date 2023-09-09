import React from 'react';
import {OrderType, updateOrderTC} from '../reducers/orders-reducer';
import {useSelector} from 'react-redux';
import {AppRootStateType, useAppDispatch} from '../../../store';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik';
import {useNavigate} from "react-router-dom";
import {setStatusAC} from "../../../app/reducers/app-reducer";
import './OrderProfile.css';

interface Values {
    orderNo: string;
    status: string;
}

export const OrderProfile = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const orderToUpdate = useSelector<AppRootStateType, OrderType | null>(
        (state) => state.orders.orderToUpdate
    );

    const redirectBackToShipmentsTable = () => {
        dispatch(setStatusAC('loading'))
        navigate("/")
    }

    const updateOrder = (updatedOrder: OrderType) => {
        dispatch(updateOrderTC(updatedOrder))
    }


    const formik = useFormik({
        initialValues: {
            orderNo: orderToUpdate?.orderNo || '',
            date: orderToUpdate?.date || '',
            status: orderToUpdate?.status || '',
            customer: orderToUpdate?.customer || '',
            trackingNo: orderToUpdate?.trackingNo || '',
            consignee: orderToUpdate?.consignee || '',
        },
        validate: (values) => {
            const errors: Partial<Values> = {};
            if (!values.orderNo) {
                errors.orderNo = 'Required';
            }
            if (!values.status) {
                errors.status = 'Required';
            }
            return errors;
        },
        onSubmit: values => {
            updateOrder(values)
            redirectBackToShipmentsTable()
        }
    })

    return (
        <Box sx={{m: 6, mr: 10, flexGrow: 1}}>
            <form onSubmit={formik.handleSubmit}>
                <Paper sx={{width: '100%', pr: 3, pl: 3, pb: 3, pt: 1}}>
                    <hr className="hrT"/>
                    <Grid container spacing={2} justifyContent="flex-start">
                        <Typography variant='subtitle2' sx={{mt: 9, mr: 2, ml: 2, mb: 2, fontWeight: 'bold'}}>
                            SHIPEMNT DETAILS
                        </Typography>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Grid container justifyContent="flex-start" >
                                <Grid item >
                                    <Typography variant='subtitle2' sx={{mb: 1, fontWeight: 'bold'}}>
                                        orderNo
                                    </Typography>
                                </Grid>
                                <FormControl sx={{width: '100%'}}>
                                    <TextField
                                        variant="outlined" sx={{backgroundColor: '#f7f7f7'}}
                                        {...formik.getFieldProps('orderNo')}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                    <Typography variant='subtitle2' sx={{mb: 1, fontWeight: 'bold'}}>
                                        date
                                    </Typography>
                                </Grid>
                                <FormControl sx={{width: '100%'}}>
                                    <TextField
                                        variant="outlined" sx={{backgroundColor: '#f7f7f7'}}
                                        {...formik.getFieldProps('date')}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                    <Typography variant='subtitle2' sx={{mb: 1, fontWeight: 'bold'}}>
                                        customer
                                    </Typography>
                                </Grid>
                                <FormControl sx={{width: '100%'}}>
                                    <TextField
                                        variant="outlined" sx={{backgroundColor: '#f7f7f7'}}
                                        {...formik.getFieldProps('customer')}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                    <Typography variant='subtitle2' sx={{mb: 1, fontWeight: 'bold'}}>
                                        trackingNo
                                    </Typography>
                                </Grid>
                                <FormControl sx={{width: '100%'}}>
                                    <TextField
                                        variant="outlined" sx={{backgroundColor: '#f7f7f7'}}
                                        {...formik.getFieldProps('trackingNo')}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                    <Typography variant='subtitle2' sx={{mb: 1, fontWeight: 'bold'}}>
                                        consignee
                                    </Typography>
                                </Grid>
                                <FormControl sx={{width: '100%'}}>
                                    <TextField
                                        variant="outlined" sx={{backgroundColor: '#f7f7f7'}}
                                        {...formik.getFieldProps('consignee')}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                    <Typography variant='subtitle2' sx={{mb: 1, fontWeight: 'bold'}}>
                                        status
                                    </Typography>
                                </Grid>
                                <FormControl sx={{width: '100%'}}>
                                    <TextField
                                        variant="outlined" sx={{backgroundColor: '#f7f7f7'}}
                                        {...formik.getFieldProps('status')}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <hr style={{
                        width: "100%",
                        border: 'none',
                        borderBottom: "1px solid #ccc",
                        marginTop: 35,
                        marginBottom: 0
                    }}/>
                    <Grid container justifyContent="flex-end">
                        <Grid item xs={1} mt={2} mr={2}>
                            <Button variant="contained" color="primary" fullWidth
                                    onClick={redirectBackToShipmentsTable}>
                                Back
                            </Button>
                        </Grid>
                        <Grid item xs={1} mt={2}>
                            <Button type="submit" variant="contained" fullWidth
                                    sx={{backgroundColor: '#6cce96', '&:hover': {backgroundColor: '#4ea27d',},}}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </Box>
    )
};

