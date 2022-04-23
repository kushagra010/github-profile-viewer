import React from 'react';

import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

import { RootState } from 'Constants/types';
import { loginPath } from 'Constants/routeConstants';

type componentProps = { [x: string]: unknown };

interface IPrivateRouteProps {
    component: React.ComponentType<componentProps>;
    [x: string]: unknown;
}

const PrivateRoute = ({
    component: Component,
    ...rest
}: IPrivateRouteProps): JSX.Element => {
    const userAuth = useSelector((state: RootState) => state.userAuth);
    return (
        <Route
            {...rest}
            render={(props) =>
                userAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={loginPath} />
                )
            }
        />
    );
};

export default PrivateRoute;
