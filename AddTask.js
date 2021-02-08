import {useState} from 'react';

const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder, setReminder] = useState('')

    const onSubmit = (e)=> {
        e.preventDefault()

        if(!text){
            alert('Please add Task')
            return 
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form onSubmit={onSubmit}>
        <div className="form-group">
            <label>Task</label>
            <input type="text" className="forum form-control" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Your Task "/>

            <label>Day and Time</label>
            <input type="text" className="forum form-control" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Enter the time "/>

            <label className="bara">Set Reminder </label>
            {/* <input type="checkbox" className="form-check-input"> */}
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} className="checki form-check-input"/>
            <input type="submit" className="btn btn-primary btn-block" value="Save Task"/>

        </div>
        </form>
    )
}

export default AddTask
