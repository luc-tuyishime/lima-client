const checkUser = require('../../helpers/checkUser')();

module.exports = {
    profile: checkUser.profile,
    token: localStorage.token,
    isAuth: checkUser.isAuth,
    listOfUsers: [],
    currentUser: {},
    createUser: {
        loading: false,
        message: '',
        errors: {}
    },
    activateUser: {
        loading: false,
        message: '',
        errors: {}
    },
    loginUser: {
        loading: false,
        message: '',
        errors: {}
    },
    logout: {
        loading: false,
        message: '',
        errors: {}
    },
    forgotPassword: {
        loading: false,
        message: '',
        errors: {}
    },
    resetPassword: {
        loading: false,
        message: '',
        errors: {}
    }
};
