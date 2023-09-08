import * as React from 'react';
import {useCallback, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {deleteOrderTC, fetchOrdersTC, OrderType} from "../Order/reducers/orders-reducer";
import {AppRootStateType, useAppDispatch} from "../../store";
import {useSelector} from "react-redux";
import OrdersTablo from '../OrdersTablo/OrdersTablo';
import {Order} from '../Order/Order';



export default function ShipmentsTable() {
    const dispatch = useAppDispatch();
    const orders = useSelector<AppRootStateType, OrderType[]>(state => state.orders.orders)

    useEffect(() => {
        dispatch(fetchOrdersTC())
    }, [dispatch])

    console.log(orders)

    const deleteOrderHandler = useCallback((orderNo: string) => {
        dispatch(deleteOrderTC(orderNo))
    },[dispatch])


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650}} aria-label="table">
                <TableHead sx={{backgroundColor: '#dfdfdf' }} >
                    <TableRow >
                        <OrdersTablo/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <Order
                            key={order.orderNo}
                            order={order}
                            deleteOrderHandler={deleteOrderHandler}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}