import React from 'react';
import {Display} from '../Display/Display';
import {Buttons} from '../Buttons/Buttons';

type CounterPropsType = {
    maxValue: number
    counter: number
    changeCounter: (counterValue: number) => void
}

export const Counter: React.FC<CounterPropsType> = ({maxValue, counter, changeCounter}) => {
    return (
        <div className={'counter'}>
            <Display counter={counter} maxValue={maxValue}/>
            <Buttons counter={counter} changeCounter={changeCounter} maxValue={maxValue}/>
        </div>
    );
}

