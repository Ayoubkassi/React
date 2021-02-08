import { FaTimes } from 'react-icons/fa';
const Task = ({task,Ondelete,Ontoggle}) => {
    return (
        <div className={`task ${ task.reminder ? 'reminder' : ''}`} onDoubleClick={() => Ontoggle(task.id)}>
            <h2>{task.text}  <FaTimes onClick={() => Ondelete(task.id)}  style={{ color: 'white', cursor:'pointer'}}/></h2>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
