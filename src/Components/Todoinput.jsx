import React,{useState} from 'react'

const Todoinput = ({adddata}) => {

    const [currenttodo, setcurrenttodo] = useState("");

    const handleonchange = (e) => {
        setcurrenttodo(e.target.value);
    }

    const addclickhandler = () => {
        const payload = {
            title : currenttodo,
            status : false,
        }
        adddata(payload);
        setcurrenttodo("")
    }

  return (
    <div>
        <input type="text"  value={currenttodo} onChange={handleonchange}/>
        <button onClick={addclickhandler}>Add todo</button>
    </div>
  )
}

export default Todoinput;