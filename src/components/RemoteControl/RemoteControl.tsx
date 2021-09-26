import React, {useState} from 'react';
import styles from './RemoteControl.module.css'
import {Button} from '../Button/Button';
import {Settings} from './Settings/Settings';

type RemoteControlPropsType = {
    minValue: number
    maxValue: number
    setMinValue: (minValue: number) => void
    setMaxValue: (maxValue: number) => void
    setCounter: (counterValue: number) => void
    setMessage: (message: string) => void
    setError: (error: boolean) => void
}

export const RemoteControl: React.FC<RemoteControlPropsType> = (
    {
        minValue,
        maxValue,
        setMinValue,
        setMaxValue,
        setCounter,
        setMessage,
        setError
    }) => {

    const [disable, setDisable] = useState<boolean>(false);

    const setNewCounter = () => {
        setCounter(minValue);
        setMessage('');
        setDisable(true);
    }

    return (
        <div className={styles.remoteControl}>
            <Settings minValue={minValue}
                      maxValue={maxValue}
                      setMinValue={setMinValue}
                      setMaxValue={setMaxValue}
                      setDisable={setDisable}
                      setMessage={setMessage}
                      setError={setError}/>
            <div className={styles.buttons}>
                <Button title="set" disabled={disable} onClickHandler={setNewCounter}/>
            </div>
        </div>
    );
}

