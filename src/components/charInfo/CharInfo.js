import './charInfo.scss';
import {Component} from "react";
import Skeleton from "../skeleton/Skeleton";

class CharInfo extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {activeChar} = this.props;
        const content = activeChar ? <View info={activeChar}/> : <Skeleton />;

        return (
            <div>
                {content}
            </div>

        )
    }
}

const View = ({info}) => {
    const {name, description, thumbnail, home, wiki, comics} = info;

    const comicsList = comics.items.map((item, key) => {
        return (
            <li className="char__comics-item" key={key}>
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