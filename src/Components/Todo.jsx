import axios from 'axios';
import React,{useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { addtodofailure, addtodorequest, addtodosuccess, todoerror, todorequest, todosuccess } from '../Redux/action';
import Todoinput from './Todoinput';

const Todo = () => {

    const dispatch = useDispatch();

    const todos = useSelector((store) => store.todos);
    console.log(todos);

    const getdata = () => {
        dispatch(todorequest())
        return axios
        .get("http://localhost:8080/todos")
        .then((r) => {
            dispatch(todosuccess(r.data))
        })
        .catch((err) => {
            // console.log(err);
            dispatch(todoerror())
        })
    }

    const adddata = (payload) => {
        dispatch(addtodorequest())
        return axios.post("http://localhost:8080/todos" , payload)
        .then((r) => dispatch(addtodosuccess()))
        .then(() => dispatch(getdata())
        )
        .catch((err) => {
            dispatch (addtodofailure())
        })
    }

    useEffect(() => {
            getdata();
    }, []);

  return (
    <div>
        <h1>TODOS</h1>
        <Todoinput adddata={adddata}/>

        {todos.map((elem) => {
            return (
            <div key={elem.id}>{elem.title}</div>
            )
        })}
    </div>
  )
}

export default Todo;