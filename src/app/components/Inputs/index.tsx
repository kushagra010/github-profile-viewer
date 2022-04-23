import React, { ChangeEvent } from 'react';

import { TextField as MuiInput } from '@mui/material';

import styles from './styles';

export interface IInputProps {
    label: string;
    variant: 'filled' | 'outlined' | 'standard';
    value: string;
    type?: string;
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    size?: 'medium' | 'small';
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    autoFocus?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    [x: string]: unknown;
}

const Input = ({
    label,
    variant,
    value,
    type,
    color,
    size,
    onChange,
    error,
    autoFocus,
    fullWidth,
    disabled,
    ...rest
}: IInputProps): JSX.Element => (
    <MuiInput
        sx={styles.root}
        label={label}
        variant={variant}
        value={value}
        type={type}
        color={color}
        size={size}
        onChange={onChange}
        error={error}
        autoFocus={autoFocus}
        fullWidth={fullWidth}
        disabled={disabled}
        {...rest}
    />
);

Input.defaultProps = {
    color: 'primary',
    size: 'medium',
    fullWidth: false,
    autoFocus: false,
    disabled: false,
    type: 'text',
    error: false,
};

export default Input;
