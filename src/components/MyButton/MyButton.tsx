import Button from '@mui/material/Button';
import React, {ReactNode} from 'react';

type MyButtonProps = {
    deleteOrderHandler?: () => void
    children: ReactNode
}

const MyButton = ({deleteOrderHandler, children}: MyButtonProps) => {
    return (
        <Button onClick={deleteOrderHandler}>{children}</Button>
    );
};

export default MyButton;