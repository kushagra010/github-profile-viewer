import { tokenConstant, userDataConstant } from 'Constants/miscConstants';

const initialState = {
    auth: {
        data: localStorage.getItem(userDataConstant),
        token: localStorage.getItem(tokenConstant),
        isAuthenticated: Boolean(localStorage.getItem(tokenConstant)),
        errorMsg: '',
        loading: false,
    },
    profile: {
        userData: {
            avatarUrl: '',
            userName: '',
            name: '',
            location: null,
            followers: 0,
            following: 0,
            bio: '',
            githubUrl: '',
            blog: '',
            company: null,
            email: null,
            twitterUserName: null,
        },
        error: '',
        loading: true,
    },
    searchUser: {
        usersList: [],
    },
    suggestions: {
        loading: true,
        data: [],
    },
};

export default initialState;
