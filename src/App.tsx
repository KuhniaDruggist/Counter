import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { RemoteControl } from './components/RemoteControl/RemoteControl';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from './reducers';
import { incCounterValue } from './ac/incCounterValue';
import { setCounterValue } from './ac/resetCounterValue';

function App () {
    const counterValue = useSelector<AppStateType, number>(state => state.counter.value);
    const dispatch = useDispatch();
    const IncCounterHandler = () => dispatch(incCounterValue());
    const setCounterHandler = (value: number) => dispatch(setCounterValue(value));
    const [ minValue, setMinValue ] = useState<number>(0);
    const [ maxValue, setMaxValue ] = useState<number>(1);
    const [ message, setMessage ] = useState<string>('Enter values and press "set"');
    const [ error, setError ] = useState<boolean>(false);

    return (
        <div className="counter-wrapper">
            <RemoteControl
                minValue={ minValue }
                maxValue={ maxValue }
                setMinValue={ setMinValue }
                setMaxValue={ setMaxValue }
                setCounter={ setCounterHandler }
                setMessage={ setMessage }
                setError={ setError }
            />
            <Counter
                minValue={ minValue }
                maxValue={ maxValue }
                counter={ counterValue }
                setCounter={ setCounterHandler }
                incCounter={ IncCounterHandler }
                message={ message }
                error={ error }
            />
        </div>
    );
}

export default App;
