import React from 'react';

import { Avatar as MuiAvatar } from '@mui/material';

import styles from './style';

export interface IAvatarProps {
    alt: string;
    src: string;
    variant?: 'circular' | 'square' | 'rounded' | undefined;
    customStyles?: { [x: string]: unknown };
    [x: string]: unknown;
}

const Avatar = ({
    alt,
    src,
    variant,
    customStyles,
    ...rest
}: IAvatarProps): JSX.Element => (
    <MuiAvatar
        sx={{ ...styles.root, ...customStyles }}
        alt={alt}
        src={src}
        variant={variant}
        {...rest}
    />
);

Avatar.defaultProps = {
    variant: 'circular',
    customStyles: {},
};

export default Avatar;
