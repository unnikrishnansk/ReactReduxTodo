import * as data from "./actionTypes";

const initialstate = {
    todos : [],
    isloading : false,
    iserror : false,
}

const reducer = (oldstate = initialstate, action) => {
    const {type , payload} = action;

    switch(type) {

        case data.GET_TODO_REQUEST:
            return{
                ...oldstate, isloading : true, iserror : false,
            };

            case data.GET_TODO_SUCCESS:
            return{
                ...oldstate, isloading : false, iserror : false, todos:[...payload],
            };

            case data.GET_TODO_FAILURE:
            return{
                ...oldstate, isloading : false, iserror : true,
            };

        default : 
        return oldstate;
    }
}

export {reducer};