import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';

function App() {
    const maxValue = 5;
    const [counter, setCounter] = useState<number>(0);

    const changeCounter = (counterValue: number) => setCounter(counterValue)

    return (
        <div className="counter-wrapper">
            <Counter counter={counter} changeCounter={changeCounter} maxValue={maxValue}/>
        </div>
    );
}


export default App;
