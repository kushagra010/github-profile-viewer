import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from 'CustomHOC/PrivateRoute';
import { publicConstant } from 'Constants/miscConstants';
import NavbarContainer from 'Containers/Navbar';
import NotFound from 'Components/NotFound';
import routes from './routes';
import 'Styles/main.scss';

const App = (): JSX.Element => {
    const routesArray = routes.map((ele) => {
        const { path, component, exact, type } = ele;
        return type === publicConstant ? (
            <Route
                path={path}
                key={Date.now()}
                component={component}
                exact={exact}
            />
        ) : (
            <PrivateRoute
                path={path}
                key={Date.now()}
                component={component}
                exact={exact}
            />
        );
    });

    return (
        <Router>
            <NavbarContainer />
            <Switch>
                {routesArray}
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;
