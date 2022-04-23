import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Navbar from 'Components/Navbar';
import { RootState } from 'Constants/types';
import { userLogout } from 'Redux/actions/authActionCreators';

const NavbarContainer = (): JSX.Element => {
    const dispatch = useDispatch();

    const userAuth = useSelector((state: RootState) => state.userAuth);

    const handleCallback = (): void => {
        dispatch(userLogout());
    };

    return (
        <Navbar
            handleCallback={handleCallback}
            isAuthenticated={userAuth.isAuthenticated}
        />
    );
};

export default NavbarContainer;
