import Task from './Task';

const Tasks = ({tasks,Ondelete,Ontoggle}) => {
   
    return (
        <div className="Tasks">
         {tasks.map((task) => (
             <Task key={task.id} Ondelete={Ondelete} Ontoggle={Ontoggle} task={task}/>
         ))}   
        </div>
    )
}

export default Tasks
