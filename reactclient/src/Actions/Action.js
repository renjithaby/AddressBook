/**
 * Created by rabby on 26/09/2017.
 */

import dataApi from '../Api/dataApi';
import history from '../History';

export var usersList = [];

export const registrationSuccess = (data) => {
    return {
        type: "REGISTER_SUCCESS",
        data: data
    };
}

export const registrationFailed = (data) => {
    return {
        type: "REGISTER_FAILED",
        data:data
    };
}

export const loginSuccess = (data) => {
    return {
        type: "LOGIN_SUCCESS",
        data: data
    };
}

export const loginFailed = (data) => {
    return {
        type: "LOGIN_FAILED",
        data:data
    };
}

export const handleLogout = (data) => {
    sessionStorage.clear();
    return {
        type: "HANDLE_LOGOUT_SUCCESS",
        data: data
    };
}

export const loadUserFromTokenSuccess = (data) => {
    return {
        type: "LOAD_USER_TOKEN_SUCCESS",
        data: data
    };
}

export const addNewContactSuccess = (data) => {
    return {
        type: "ADD_CONTACT_SUCCESS",
        data: data
    };
}

export const addNewContactFailed = (data) => {
    return {
        type: "ADD_CONTACT_FAILED",
        data:data
    };
}


export function loginUser(usr) {
    return function(dispatch) {
        var resultData = {};
        return dataApi.login(usr).then(data => {

            if(data.result === "failed"){
                dispatch(loginFailed(data));

            }else {
                resultData.token = data.token;
                sessionStorage.setItem('jwt', resultData.token);
                resultData.user = data.user;
                dispatch(loginSuccess(resultData));

            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function registerUser(usr) {
    return function(dispatch) {
        return dataApi.register(usr).then(data => {
            if(data.result ==="failed"){
                dispatch(registrationFailed(data));
            }else {
                dispatch(registrationSuccess());
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadUserFromToken(token) {
    return function(dispatch) {
        var resultData = {};
        return dataApi.loadUserFromToken(token).then(data => {
            if(data.result === "failed"){
                dispatch(handleLogout());
            }else {
                resultData.user = data.user;
                dispatch(loadUserFromTokenSuccess(resultData));

            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function addNewContact(formData) {
    return function(dispatch) {
        var resultData = {};
        return dataApi.addNewContact(formData).then(data => {
            if(data.result === "failed"){
                dispatch(addNewContactFailed(data));
            }else {
                //resultData.user = data.user;
                dispatch(addNewContactSuccess({user:data}));

            }
        }).catch(error => {
            throw(error);
        });
    };
}






