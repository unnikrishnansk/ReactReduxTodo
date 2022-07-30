import axios from 'axios';
import React,{useEffect} from 'react'
import { useDispatch , useSelector, shallowEqual} from 'react-redux';
import { addtodofailure, addtodorequest, addtodosuccess, todoerror, todorequest, todosuccess } from '../Redux/Appreducer/action';
import { store } from '../Redux/store';
import Todoinput from './Todoinput';


const Todo = () => {

    const dispatch = useDispatch();

    const {todos,isloading,iserror} = useSelector((store) => {
    return {
        todos : store.Appreducer.todos,
        isloading : store.Appreducer.isloading,
        iserror : store.Appreducer.iserror,
    };
},shallowEqual);

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