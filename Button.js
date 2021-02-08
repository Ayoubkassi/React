import PropTypes from 'prop-types';

const Button = ({value,color,onClick}) => {

    
    return (
        <button onClick={onClick} className={`btn btn-${color}`}>
            {value}
        </button>
    )
}

Button.defaultProps = {
    value : "Add Task",
    color : "dark"
}

Button.propTypes = {
    value: PropTypes.string,
    color : PropTypes.string,
    onClick : PropTypes.func,
}

export default Button
