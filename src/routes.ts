import DashBoardContainer from 'Containers/DashBoard';
import LoginContainer from 'Containers/Login';
import {
    loginPath,
    dashboardPath,
    searchUserPath,
    suggestionsPath,
} from 'Constants/routeConstants';
import ProfileContainer from 'Containers/Profile';
import { privateConstant, publicConstant } from './constants/miscConstants';
import SuggestionsContainer from './app/containers/Suggestions';

const routes = [
    {
        path: loginPath,
        component: LoginContainer,
        exact: true,
        type: publicConstant,
    },
    {
        path: dashboardPath,
        component: DashBoardContainer,
        exact: true,
        type: privateConstant,
    },
    {
        path: `${searchUserPath}/:username?`,
        component: ProfileContainer,
        exact: true,
        type: publicConstant,
    },
    {
        path: suggestionsPath,
        component: SuggestionsContainer,
        exact: true,
        type: privateConstant,
    },
];

export default routes;
