import React, {useCallback} from 'react';
import TableCell from "@mui/material/TableCell";
import MyButton from "../MyButton/MyButton";
import TableRow from "@mui/material/TableRow";
import {OrderType, setOrderToUpdateAC} from "./reducers/orders-reducer";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../store";
import CancelIcon from '@mui/icons-material/Cancel';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';


export const Order = ({order, deleteOrderHandler}: OrderPropsType) => {
    const {orderNo, date, customer, trackingNo, status, consignee} = order;
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const deleteOrder = useCallback(() => {
        deleteOrderHandler(orderNo)
    }, [orderNo, deleteOrderHandler])

    const updateOrder = useCallback(() => {
        dispatch(setOrderToUpdateAC(order))
        navigate(`/orderProfile/${orderNo}`)
    }, [dispatch, navigate, order, orderNo])


    return (
        <TableRow>
            <TableCell component="th" scope="row">{orderNo}</TableCell>
            <TableCell align="left">{date}</TableCell>
            <TableCell align="left">{customer}</TableCell>
            <TableCell align="left">{trackingNo}</TableCell>
            <TableCell align="left">{status}</TableCell>
            <TableCell align="left">{consignee}</TableCell>
            <TableCell align="right">
                <MyButton
                    callback={updateOrder} variant="contained" backgroundColor="#00D4FFFF"
                    focusColor="#03add0"><EventRepeatIcon/>
                </MyButton>
            </TableCell>
            <TableCell align="left">
                <MyButton
                    callback={deleteOrder} variant="contained" backgroundColor="#E82C55FF"
                    focusColor="#e70838"><CancelIcon/>
                </MyButton>
            </TableCell>
        </TableRow>
    );
};

type OrderPropsType = {
    order: OrderType
    deleteOrderHandler: (orderNo: string) => void
}