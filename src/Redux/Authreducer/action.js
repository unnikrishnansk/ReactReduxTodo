import * as types from './actionTypes';


const loginrequest = () => {
    return {
        type : types.USER_LOGIN_REQUEST
    }
}

const loginsuccess = () => {
    return {
        type : types.USER_LOGIN_SUCCESS
    }
}

const loginfailure = () => {
    return {
        type : types.USER_LOGIN_FAILURE
    }
}

export {
    loginrequest,
    loginsuccess,
    loginfailure
}

