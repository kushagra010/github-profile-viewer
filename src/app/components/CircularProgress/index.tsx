import React from 'react';

import { CircularProgress as MuiCircularProgress } from '@mui/material';

import { styles } from './style';

export interface ICircularProgressProps {
    color?:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
        | undefined;
    size?: number | string;
    thickness?: number;
    value?: number;
    variant?: 'determinate' | 'indeterminate';
    customStyles?: { [x: string]: unknown };
}

const CircularProgress = ({
    color,
    size,
    thickness,
    value,
    variant,
    customStyles,
}: ICircularProgressProps): JSX.Element => (
    <MuiCircularProgress
        sx={{ ...styles.root, ...customStyles }}
        color={color}
        size={size}
        thickness={thickness}
        value={value}
        variant={variant}
    />
);

CircularProgress.defaultProps = {
    color: 'primary',
    size: 40,
    thickness: 3.6,
    value: 0,
    variant: 'indeterminate',
    customStyles: {},
};

export default CircularProgress;
