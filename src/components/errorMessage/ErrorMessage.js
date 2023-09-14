import './errorMessage.css';
import img from './error.gif';

const ErrorMessage = () => {
    return(
        <div className="error-message">
            <img src={img} alt=""/>
        </div>
    )
}

export default ErrorMessage;