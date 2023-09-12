import './errorMessage.css';
import img from './error.gif';

const ErrorMessage = () => {
    return(
        <div className="error-message">
            <img src={img} alt="" style={{width:"500px", height:"200px"}}/>
        </div>
    )
}

export default ErrorMessage;