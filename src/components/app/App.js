import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import {Component} from "react";
import MarvelService from "../../services/MarvelService";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showRandomChar: true,
            activeChar: null
        }
    }

    toggleRandomChar = () => {
        this.setState({
            showRandomChar: !this.state.showRandomChar
        })
    }

    setActiveChar = (activeChar) => {
        this.setState({activeChar});
    }


    render() {
        const {activeChar, showRandomChar, upArrow, downArrow} = this.state;

        return (
            <div className="app">
                <AppHeader/>
                <main>
                    {showRandomChar ? <RandomChar/> : null}
                    <div className="char__content">
                        <CharList setActiveChar={this.setActiveChar}/>
                        <CharInfo activeChar={activeChar}/>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;