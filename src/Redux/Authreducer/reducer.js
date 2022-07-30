import * as types from './actionTypes';

const initialstate = {
    isAuth : false,
    token : "",
    isAuthloading:false,
}

const reducer = (oldstate=initialstate,action) => {
    const {type,payload} = action;
    switch(type) {

        case types.USER_LOGIN_REQUEST:
        return {
            ...oldstate,
            isAuthloading : true,
        };

        case types.USER_LOGIN_SUCCESS:
        return {
            ...oldstate,
            isAuth : true,
            token : payload,
            isAuthloading : true,
        };

        case types.USER_LOGIN_FAILURE:
        return {
            ...oldstate,
            isAuth : false,
            isAuthloading : false,
            token:'',
        };
        

        default:
            return oldstate;
    }

}

export {reducer};