import React from 'react';
import {OrderType} from '../reducers/orders-reducer';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../store';
import {Box, Button, Grid, Paper, Typography,} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik';

interface Values {
    orderNo: string;
    status: string;
}

export const OrderProfile = () => {
    const orderToUpdate = useSelector<AppRootStateType, OrderType | null>(
        (state) => state.orders.orderToUpdate
    );

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
        onSubmit: (values, {setSubmitting}) => {
            setTimeout(() => {
                setSubmitting(false);
                alert(JSON.stringify(values, null, 2));
            }, 500);
        }
    })

    return (

        <Box sx={{ m: 6, mr: 10, flexGrow: 1 }}>
            <form onSubmit={formik.handleSubmit}>
                <Paper sx={{ width: '100%', p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                                        orderNo
                                    </Typography>
                                </Grid>
                                <FormControl sx={{ width: '100%' }}>
                                    <TextField
                                        variant="outlined"
                                        {...formik.getFieldProps('orderNo')}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                                        date
                                    </Typography>
                                </Grid>
                                <FormControl sx={{ width: '100%' }}>
                                    <TextField
                                        variant="outlined"
                                        {...formik.getFieldProps('date')}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                                        customer
                                    </Typography>
                                </Grid>
                                <FormControl sx={{ width: '100%' }}>
                                    <TextField
                                        variant="outlined"
                                        {...formik.getFieldProps('customer')}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                                        trackingNo
                                    </Typography>
                                </Grid>
                                <FormControl sx={{ width: '100%' }}>
                                    <TextField
                                        variant="outlined"
                                        {...formik.getFieldProps('trackingNo')}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                                        consignee
                                    </Typography>
                                </Grid>
                                <FormControl sx={{ width: '100%' }}>
                                    <TextField
                                        variant="outlined"
                                        {...formik.getFieldProps('consignee')}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                                        status
                                    </Typography>
                                </Grid>
                                <FormControl sx={{ width: '100%' }}>
                                    <TextField
                                        variant="outlined"
                                        {...formik.getFieldProps('status')}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="flex-end">
                        <Grid item xs={1} mt={2} mr={2}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
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
    );
};

