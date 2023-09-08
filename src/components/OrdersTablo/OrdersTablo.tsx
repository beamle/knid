import React from 'react';
import TableCell from "@mui/material/TableCell";

const OrdersTablo = () => {
    return (
        <>
            <TableCell>orderNo</TableCell>
            <TableCell align="left">date</TableCell>
            <TableCell align="left">customer</TableCell>
            <TableCell align="left">trackingNo</TableCell>
            <TableCell align="left">status</TableCell>
            <TableCell align="left">consignee</TableCell>
        </>)

};

export default OrdersTablo;