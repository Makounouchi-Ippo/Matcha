import axios from 'axios';

import * as actionTypes from './actionTypes';






export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, user) => {

    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        user: user
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};




export const  auth = (email, password,router) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            mail: email,
            password: password
        };
        axios.post('http://localhost:3000/api/user/login/', authData)
            .then(response => {
                dispatch(authSuccess(response.data.token, response.data));
                localStorage.setItem('token', response.data.token);
                router.push('/profil');
                console.log('post = ',response.data)
            })
            .catch(error => {
                dispatch(authFail(error.response.data.message));
                console.log(error.response)
            });
    };
};


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        }
        else {
            const userId = localStorage.getItem('userId')
            dispatch(authSuccess(token, userId)); 
        }
}
};