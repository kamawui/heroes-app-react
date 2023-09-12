import loader from './loader.gif';
import "./spinner.css";

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={loader} alt=""/>
        </div>
    )
};

export default Spinner;