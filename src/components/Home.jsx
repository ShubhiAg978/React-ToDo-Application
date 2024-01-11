// rfce

import React, {useState} from 'react'
import '../styles/Home.css'
import '../styles/Task.css'
// import Task from './Task';
// import TaskContext from '../App.js'

function Home() {

    const [task, setTask] = useState([]);
    console.log(task);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    console.log(title, description);

    const deleteTask = (id) => {
        const newData = task.filter((_, index) => index + 1 !== id);
        setTask(newData);
    }

    const buttonStyle = {
        padding: 10,
        border: "1px solid grey",
        backgroundColor: "black",
        color: "white",
        margin: 10,
        width: "700px"
    };
    
    // useEffect( () => {
    //     console.log("USEEFFECT called");
    // }, []);

    const submitHandler = (e) =>{
        e.preventDefault();

        setTask([...task, {title, description}])
    }

    return (
        <div className='Home'>
            <form onSubmit={submitHandler}>
                <h1>DAILY GOALS</h1>
                <input style={{padding:10, border:"1px solid grey", margin:20, width:"700px"}} 
                type="text" 
                placeholder='Title' 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <b/>
                <textArea style={{padding:10, border:"1px solid grey", margin:20, width:"700px"}} 
                type="text" 
                placeholder='Description' 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textArea>
                <button style={buttonStyle}>ADD</button>
            </form>
            
            {task.map((item, index) => (
                <div className="Task" key={index}>
                    <div className='TextPlace'>
                        <p>{item.title}</p>
                        <span>{item.description}</span>
                    </div>
                    <div>
                        <button onClick={() => deleteTask(index + 1)}>-</button>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default Home;