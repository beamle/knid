import Button from '@mui/material/Button';
import React, {ReactNode} from 'react';


const MyButton = ({ callback, variant, color, children }: MyButtonProps) => {
    return (
        <Button
            variant={variant}
            sx={{ height: 50, width: 75, backgroundColor: color}}
            onClick={callback}
        >
            {children}
        </Button>
    );
};

export default MyButton;

// types
type ButtonVariantTypes = "contained" | "outlined" ;
type MyButtonProps = {
    callback?: () => void;
    children: ReactNode
    variant: ButtonVariantTypes;
    color: string;
};
