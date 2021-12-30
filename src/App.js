import logo from './logo.svg';
import './App.css';
import Button from "./Button/button";
import {useState} from "react";

let timerId

function App() {
    let [counter, setCounter] = useState(0)
    let [startOrPause, setStartOrPause] = useState('Start')
    let [downOrUpCounting, setDownOrUpCounting] = useState('Down Counting')

    const startOrPauseCounter = () => {
        if (startOrPause === 'Start') {
            setStartOrPause(startOrPause => 'Pause')
            timerId = setInterval(() => {
                if (downOrUpCounting === 'Up Counting' && counter > 0) {
                    setCounter(counter => counter - 1)
                    counter = counter - 1
                    if (counter === 0) {
                        setStartOrPause(startOrPause => 'Start')
                    }
                } else if (downOrUpCounting === 'Down Counting') {
                    setCounter(counter => counter + 1)
                }
            }, 1000)
        } else {
            setStartOrPause(startOrPause => 'Start')
            clearInterval(timerId)
            // setSeconds(0)
        }
    }
    const resetCounter = () => {
        setStartOrPause(startOrPause => 'Start')
        clearInterval(timerId)
        setCounter(0)
    }
    const changeUpOrDown = () => {
        if (downOrUpCounting === 'Down Counting') {
            setDownOrUpCounting(i => 'Up Counting')
            downOrUpCounting = 'Up Counting'
        } else {
            setDownOrUpCounting(i => 'Down Counting')
            downOrUpCounting = 'Down Counting'
        }
        setStartOrPause(startOrPause => 'Start')
        clearInterval(timerId)
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div className="name-container">
                    S Alireza Ezaz  9731009
                </div>
                <div className="counter-container">
                    Counter: {counter}
                </div>
                <div className="Button-container">
                    <Button clickFunction={resetCounter} text='Reset'></Button>
                    <Button clickFunction={startOrPauseCounter} text={startOrPause}></Button>
                    <Button clickFunction={changeUpOrDown} text={downOrUpCounting}></Button>
                </div>
            </header>
        </div>
    );
}

export default App;
