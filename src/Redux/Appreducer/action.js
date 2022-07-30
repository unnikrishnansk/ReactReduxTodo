import * as types from './actionTypes';

const todorequest = () => {
    return {
        type : types.GET_TODO_REQUEST
    }
}

const todosuccess = (payload) => {
    return {
        type : types.GET_TODO_SUCCESS,
        payload
    }
}

const todoerror = () => {
    return {
        type : types.GET_TODO_FAILURE
    }
}

const addtodorequest = () => {
    return {
        type : types.ADD_TODO_REQUEST
    }
}

const addtodosuccess = () => {
    return {
        type : types.ADD_TODO_REQUEST
    }
}

const addtodofailure = () => {
    return {
        type : types.ADD_TODO_REQUEST
    }
}


export {
    todorequest,
    todosuccess,
    todoerror,
    addtodorequest,
    addtodosuccess,
    addtodofailure,
}