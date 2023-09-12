import './charInfo.scss';
import thor from '../../resources/img/thor.jpeg';
import {Component} from "react";

class CharInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null,
            thumbnail: null,
            home: null,
            wiki: null,
            id: null,
            comics: null,
        }
        this.setActiveChar(this.props.activeChar);
    }

    // componentDidMount() {
    //     this.setActiveChar(this.props.activeChar);
    // }

    setActiveChar = (activeChar) => {
        if (activeChar) {
            console.log(1);
            this.setState({
                name: activeChar.name,
                description: activeChar.description,
                thumbnail: activeChar.thumbnail,
                home: activeChar.home,
                wiki: activeChar.wiki,
                id: activeChar.id,
                comics: activeChar.comics,
            })
        }
    }

    render() {
        const {activeChar} = this.props;
        const content = activeChar ? <View info={activeChar}/> : null;

        return (
            <div>
                {content}
            </div>

        )
    }
}

const View = ({info}) => {
    const {name, description, thumbnail, home, wiki, id, comics} = info;

    const comicsList = comics.items.map(item => {
        return (
            <li className="char__comics-item">
                {item.name}
            </li>
        )
    })

    return (
        <div className="char__info">
            <div className="char__basics">
                <img src={thumbnail} alt="abyss"/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={home} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">{description}</div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comicsList}
            </ul>
        </div>
    )
}

export default CharInfo;