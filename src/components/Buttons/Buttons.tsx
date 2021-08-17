import React from 'react';
import {Button} from './Button/Button';

type ButtonsPropsType = {
    maxValue: number
    counter: number
    changeCounter: (counterValue: number) => void
}

export const Buttons: React.FC<ButtonsPropsType> = ({maxValue, counter, changeCounter}) => {

    const onClickIncrease = () => {
        if (counter < maxValue) {
            changeCounter(counter + 1)
        }
        return
    }
    const onClickReset = () => {
        changeCounter(0);
    }

    return (
        <div className={'buttons'}>
            <Button title="inc" disabled={counter === maxValue} onClickHandler={onClickIncrease}/>
            <Button title="reset" disabled={counter === 0} onClickHandler={onClickReset}/>
        </div>
    );
}