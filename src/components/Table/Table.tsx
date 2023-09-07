import * as React from 'react';
import {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {deleteOrderTC, fetchOrdersTC, OrderType} from "../Order/reducers/orders-reducer";
import {AppRootStateType, useAppDispatch} from "../../store";
import {useSelector} from "react-redux";
import Order from '../Order/Order';
import Button from '@mui/material/Button';
import MyButton from '../MyButton/MyButton';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableFC() {
    const dispatch = useAppDispatch();
    const orders = useSelector<AppRootStateType, OrderType[]>(state => state.orders.orders)

    useEffect(() => {
        dispatch(fetchOrdersTC())
    }, [dispatch])

    console.log(orders)

    const deleteOrderHandler = (orderNo: string) => {
        dispatch(deleteOrderTC(orderNo))
    }


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="table">
                <TableHead>
                    <TableRow>
                        <Order/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow
                            key={order.orderNo}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {order.orderNo}
                            </TableCell>
                            <TableCell align="left">{order.date}</TableCell>
                            <TableCell align="left">{order.customer}</TableCell>
                            <TableCell align="left">{order.trackingNo}</TableCell>
                            <TableCell align="left">{order.status}</TableCell>
                            <TableCell align="left">{order.consignee}</TableCell>
                            <TableCell align="left">
                                <MyButton>Change</MyButton>
                            </TableCell>
                            <TableCell align="left">
                                <MyButton
                                    deleteOrderHandler={() => deleteOrderHandler(order.orderNo)}>Delete</MyButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}