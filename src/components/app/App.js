import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeChar: null
        }
    }

    setActiveChar = (activeChar) => {
        this.setState({activeChar});
    }


    render() {
        const {activeChar} = this.state;

        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <RandomChar/>
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