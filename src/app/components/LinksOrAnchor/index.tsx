import React, { ReactNode } from 'react';

import { Link } from 'react-router-dom';

interface ILinksProps {
    url: string;
    isLink: boolean;
    newTab?: boolean;
    children: ReactNode | ReactNode[];
    customStyles?: { [x: string]: unknown };
    className?: string;
}

const Links = ({
    url,
    isLink,
    newTab,
    children,
    customStyles,
    className,
}: ILinksProps): JSX.Element =>
    isLink ? (
        <Link
            target={newTab ? '_blank' : ''}
            className={className}
            style={customStyles}
            to={url}
        >
            {children}
        </Link>
    ) : (
        <a
            target={newTab ? '_blank' : ''}
            className={className}
            style={customStyles}
            href={url}
            rel="noreferrer"
        >
            {children}
        </a>
    );

Links.defaultProps = {
    customStyles: undefined,
    className: undefined,
    newTab: false,
};

export default Links;
