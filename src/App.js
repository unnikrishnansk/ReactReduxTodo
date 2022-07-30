
import './App.css';
import Todo from './Components/Todo';
import {useState} from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginfailure, loginrequest, loginsuccess } from './Redux/Authreducer/action';

function App() {

  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.Authreducer.isAuth);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlelogin = () => {
    if(email && password)
    {
      const payload = {
        email,
        password,
      };
      dispatch(loginrequest())
      return axios.post("https://reqres.in/api/login",payload)
      .then((r) => dispatch(loginsuccess(r.data)))
      .catch((e) => dispatch(loginfailure()))
    }
  }

  return (
    <div className="App">

      <div>
        <input placeholder='email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        <input placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
        <button onClick={handlelogin}>LOGIN</button>
      </div>
      {isAuth && <Todo />}
    </div>
  );
}

export default App;
