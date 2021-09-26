import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {RemoteControl} from './components/RemoteControl/RemoteControl';

function App() {
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(1);
    const [counter, setCounter] = useState<number>(0);

    const [message, setMessage] = useState<string>('enter values and press "set"');
    const [error, setError] = useState<boolean>(false)

    return (
        <div className="counter-wrapper">
            <RemoteControl minValue={minValue}
                           maxValue={maxValue}
                           setMinValue={setMinValue}
                           setMaxValue={setMaxValue}
                           setCounter={setCounter}
                           setMessage={setMessage}
                           setError={setError}/>
            <Counter minValue={minValue}
                     maxValue={maxValue}
                     counter={counter}
                     setCounter={setCounter}
                     message={message}
                     error={error}/>
        </div>
    );
}

export default App;
