import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { RootState, IUserCredentials } from 'Constants/types';
import { userLogin } from 'Redux/actions/authActionCreators';
import LoginComponent from 'Components/Login';
import { dashboardPath } from 'Constants/routeConstants';
import CircularProgress from 'Components/CircularProgress';

const LoginContainer = (): JSX.Element => {
    const dispatch = useDispatch();
    const userAuth = useSelector((state: RootState) => state.userAuth);

    /** login component(child of LoginContainer) will send data with
     *  userCredentials on click of login button. (ie. here props are
     *  passed from child to parent)
     */
    const handleCallback = (userCredentials: IUserCredentials): void => {
        dispatch(userLogin(userCredentials));
    };

    const loginControl = (): JSX.Element => {
        if (userAuth.loading) {
            return <CircularProgress />;
        }
        if (userAuth.isAuthenticated) {
            return <Redirect to={dashboardPath} />;
        }
        return <LoginComponent handleCallback={handleCallback} />;
    };

    /** handleCallback function is passed as an argument to loginComponent
     *  this function is called by handleLogin fuction which is inside the
     *  loginComponent and that handleLogin fn is called onClick of login button
     */

    return loginControl();
};

export default LoginContainer;
