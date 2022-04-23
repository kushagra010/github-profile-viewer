import React, { ReactNode, SyntheticEvent } from 'react';

import { Button as MuiButton } from '@mui/material';

import styles from './styles';

export interface IButtonProps {
    children: ReactNode;
    variant?: 'text' | 'contained' | 'outlined';
    color?:
        | 'primary'
        | 'inherit'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning';
    size?: 'large' | 'medium' | 'small';
    onClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
    fullWidth?: boolean;
    disabled?: boolean;
    [x: string]: unknown;
}

const Button = ({
    children,
    variant,
    color,
    size,
    onClick,
    fullWidth,
    disabled,
    ...rest
}: IButtonProps): JSX.Element => (
    <MuiButton
        sx={styles.root}
        variant={variant}
        color={color}
        size={size}
        onClick={onClick}
        fullWidth={fullWidth}
        disabled={disabled}
        {...rest}
    >
        {children}
    </MuiButton>
);

Button.defaultProps = {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    fullWidth: false,
    disabled: false,
};

export default Button;
