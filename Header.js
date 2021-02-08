import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({title,onAdd,showAdd}) => {


    return (
        <div className="header">
           <h1>{title}</h1> 
           <Button value={showAdd ? 'Close' : 'Add Task'} color={showAdd ? 'danger':'primary'} onClick={onAdd}/>
        </div>
    )
}

Header.defaultProps= {
    title:'Ayoub Task Manager',
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}
export default Header
