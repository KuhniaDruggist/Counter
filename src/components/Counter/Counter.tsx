import React from 'react';
import styles from './Counter.module.css'
import {Display} from '../Display/Display';
import {Button} from '../Button/Button';

type CounterPropsType = {
    minValue: number
    maxValue: number
    counter: number
    setCounter: (counterValue: number) => void
    message: string
    error: boolean
}

export const Counter: React.FC<CounterPropsType> = (
    {
        minValue,
        maxValue,
        counter,
        setCounter,
        message,
        error
    }) => {

    const onClickIncrease = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
        return
    }

    const onClickReset = () => {
        setCounter(minValue);
    }

    return (
        <div className={styles.counter}>
            {
                message
                    ? <p className={`${styles.message} ${error ? styles.error : ''}`}>{message}</p>
                    : <Display maxValue={maxValue} counter={counter}/>
            }
            <div className={styles.buttons}>
                <Button title="inc"
                        disabled={!!message || counter === maxValue}
                        onClickHandler={onClickIncrease}/>
                <Button title="reset"
                        disabled={!!message || counter === minValue}
                        onClickHandler={onClickReset}/>
            </div>
        </div>
    );
}

