import React ,{useState} from 'react';
import './App.css';
import Bg4 from './images/bg4.jpg'

function App() {
  
  const [tasks , setTasks] = useState([]);
  const [input , setInput] = useState('');


  //Add New Task
  const handleSubmit = (e) => {
    e.preventDefault();

    const addTask = {
      id : Math.floor(Math.random() * 1000),
      text: input ,
      completed : false
    };


    if(input != ""){
      // localStorage.setItem("tasks", JSON.stringify(tasks));
      setTasks([...tasks , addTask]);
      setInput('');
      
      
    }


    
  }

  //Toggle Completed Task
  const toggleCompleteTask = (id) =>{
    setTasks(
      tasks.map (task => (
        task.id === id ? {...task, completed : !task.completed} : task
      ))
    )
  }

  //Delete Task
  const deleteTask = (id) => {
    let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id);
    setTasks(filteredTasks);
    // localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  }

  const date = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];




  return <div className="app">
    <div className="contatiner py-5 ">

      

      <div className="subtitle w-50 mb-3 m-auto d-flex align-items-center justify-content-center">
        <i className="fa-solid fa-rectangle-list fa-3x me-3 text-white"></i>
        <h1 className=''>To-Do List</h1>
      </div>

      <div className="row  date w-50 m-auto mb-3">
        <p className=''>{days[date.getDay()]} {date.getDate()} , {month[date.getMonth()]} {date.getFullYear()}</p>
      </div>

      <div className="row w-50 m-auto mb-5">
        <form className=' position-relative d-flex align-items-center justify-content-center' onSubmit={handleSubmit}>
          <input className='form-control me-3 py-3' value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Enter Task' />
          <i className="fa-solid fa-circle-plus btn position-absolute border-0" ></i>
        </form>
      </div>

      
      
      <div className='task m-auto'>
        { tasks.map(task => (
          <div key={tasks.id} onDoubleClick={() => toggleCompleteTask(task.id)} className={`taskRow d-flex mb-2 align-items-center justify-content-between w-50 m-auto rounded-start rounded-end ${task.completed ? 'completed' : '' } `}>
            <p className='me-3 text-capitalize mb-0 taskText border-2 p-2'>{task.text}</p>
            <i onClick={()=> deleteTask(task.id)} className="fa-solid fa-circle-xmark btn border-0"></i>
          </div>
        ))}
      </div>


    </div>
  </div>
}

export default App;
