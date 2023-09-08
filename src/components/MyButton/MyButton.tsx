import Button from '@mui/material/Button';
import React, {ReactNode} from 'react';

type MyButtonProps = {
    callback?: () => void
    children: ReactNode
}

const MyButton = ({callback, children}: MyButtonProps) => {
    return (
        <Button onClick={callback}>{children}</Button>
    );
};

export default MyButton;