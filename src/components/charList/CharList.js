import './charList.scss';
import {Component} from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

class CharList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charList: [],
            charIDsList: [],
            loading: true,
            error: false,
            activeElementID: null
        }
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateCharacterList();
    }

    updateCharacterList = () => {
        this.getCharacters()
            .then(this.onCharsLoaded)
            .catch(this.onError)
    }

    getCharacters = async () => {
        const {charIDsList} = this.state;

        const tempList = [];
        const tempIDsList = [];

        for (let i = 0; i < 9; i++) {
            let tempChar = await this.marvelService.getCharacter(this.marvelService.getRandomId());

            // prevent characters repeat
            while (charIDsList.includes(tempChar.id) || tempIDsList.includes(tempChar.id)) {
                tempChar = await this.marvelService.getCharacter(this.marvelService.getRandomId());
            }

            tempChar["key"] = i;
            tempList.push(tempChar);
            tempIDsList.push(tempChar.id);
        }

        this.setState({
            charIDsList: charIDsList.concat(tempIDsList)
        });

        return tempList;
    }

    onCharsLoaded = (list) => {
        this.setState({
            charList: this.state.charList.concat(list),
            loading: false,
            error: false
        });
    }

    onError = () => {
        this.setState({
            charList: [],
            error: true,
            loading: false
        });
    }

    onLoadMore = () => {
        this.setState({
            error: false,
            loading: true
        });

        this.updateCharacterList();
    }

    onActive = (activeElement) => {
        const activeElementID = activeElement.id;

        this.props.setActiveChar(activeElement);

        this.setState({activeElementID});
    }

    render() {
        const {charList, loading, error, activeElementID} = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner/> : <Button onLoadFun={this.onLoadMore}/>;
        const elements = !(error) ? charList.map(item => {

            const itemClasses = activeElementID === item.id ? "char__item char__item_selected" : "char__item";

            return (
                <li className={itemClasses} key={item.id} onClick={() => this.onActive(item)}>
                    <img src={item.thumbnail} alt={item.name}/>
                    <div className="char__name">{item.name}</div>
                </li>
            )
        }) : null;


        return (
            <div className="char__list">
                <ul className="char__grid">
                    {elements}
                </ul>
                {errorMessage}
                {spinner}
            </div>
        )
    }
}

const Button = ({onLoadFun}) => {
    return (
        <button className="button button__main button__long">
            <div className="inner" onClick={() => {onLoadFun()}}>load more</div>
        </button>
    )
}

export default CharList;