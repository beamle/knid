import React, {useCallback} from 'react';
import TableCell from "@mui/material/TableCell";
import MyButton from "../MyButton/MyButton";
import TableRow from "@mui/material/TableRow";
import {OrderType, setOrderToUpdateAC} from "./reducers/orders-reducer";
import {Navigate, useNavigate} from "react-router-dom";
import {AppRootStateType, useAppDispatch} from "../../store";
import {AppStatusTypes} from "../../app/reducers/app-reducer";
import {useSelector} from "react-redux";
import {OrderProfile} from './OrderProfile/OrderProfile';


export const Order = ({order, deleteOrderHandler}: OrderPropsType) => {
    const {orderNo, date, customer, trackingNo, status, consignee} = order;
    // const appStatus = useSelector<AppRootStateType, AppStatusTypes>(state => state.app.status)
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const delereOrder = useCallback(() => {
        deleteOrderHandler(orderNo)
    }, [orderNo, deleteOrderHandler])

    const updateOrder = () => {
        dispatch(setOrderToUpdateAC(order))
        navigate("/orderProfile")
    }

    return (
            <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                <TableCell component="th" scope="row">{orderNo}</TableCell>
                <TableCell align="left">{date}</TableCell>
                <TableCell align="left">{customer}</TableCell>
                <TableCell align="left">{trackingNo}</TableCell>
                <TableCell align="left">{status}</TableCell>
                <TableCell align="left">{consignee}</TableCell>
                <TableCell align="left">
                    <MyButton
                        callback={updateOrder}>Change</MyButton>
                </TableCell>
                <TableCell align="left">
                    <MyButton
                        callback={delereOrder}>Delete</MyButton>
                </TableCell>
            </TableRow>
    );
};
//TODO: vvesti status idle and updating. If updating then show

type OrderPropsType = {
    order: OrderType
    deleteOrderHandler: (orderNo: string) => void
}