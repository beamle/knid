import Button from '@mui/material/Button';
import React, {ReactNode} from 'react';


const MyButton = ({ callback, variant, backgroundColor, focusColor, children }: MyButtonProps) => {
    return (
        <Button
            variant={variant}
            sx={{ height: 50, width: 75, backgroundColor: backgroundColor, '&:hover': {backgroundColor: focusColor,}}}
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
    callback?: () => void
    children: ReactNode
    variant: ButtonVariantTypes
    backgroundColor: string
    focusColor: string
};
