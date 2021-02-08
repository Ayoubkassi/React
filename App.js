import {useState,useEffect} from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import './App.css';
import { FaRocketchat } from 'react-icons/fa';

function App() {

  const [showAddtask,setShowAddtask] = useState(true)

  const [tasks,setTasks] = useState([]) 
//add task 

useEffect(() => {
  const getTasks = async ()=> {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }
    getTasks()
}, [])

//fetch tasks

const fetchTask = async (id)=>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()

  return data
}

//fetch task

const fetchTasks = async ()=>{
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()

  return data
}

const Addtask = async (task) =>{

  const res = await  fetch('http://localhost:5000/tasks',{
    method:'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(task)
  })
  const data = await res.json()

  setTasks([...tasks, data])
  // const id = Math.floor(Math.random()*10000) +1

  // const Newtask = {id, ...task}
  // setTasks([...tasks,Newtask])
}

  const Deletetask = async (id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE'
    }
    )
    setTasks(tasks.filter((task) => (task.id !== id)));
  }

  //toggle reminder

  const reminder = async (id) => {
    const taskTotoggle = await fetchTask(id)
    const updatedTask = {...taskTotoggle,reminder: !taskTotoggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers :{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()


    setTasks(tasks.map((task) => 
     task.id === id ? { ...task, reminder: !data.reminder } : task
    ))
  }
  

  return (
    <div className="App">
      <Header title="Ayoub Task Reminder" onAdd={()=> setShowAddtask(!showAddtask)} showAdd={showAddtask}/>
      { showAddtask && <AddTask onAdd={Addtask}/>}
      {tasks.length > 0? <Tasks tasks={tasks} Ontoggle={reminder} Ondelete={Deletetask}/> : 'No Tasks to Show'}
    </div>
  )
}

export default App
