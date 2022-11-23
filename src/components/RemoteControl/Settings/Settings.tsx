import React, { ChangeEvent } from 'react';
import styles from './Settings.module.css';

type SettingsPropsType = {
    minValue: number
    maxValue: number
    setMinValue: (minValue: number) => void
    setMaxValue: (maxValue: number) => void
    setDisable: (flag: boolean) => void
    setMessage: (message: string) => void
    setError: (error: boolean) => void
}

export const Settings: React.FC<SettingsPropsType> = (
    {
        minValue,
        maxValue,
        setMinValue,
        setMaxValue,
        setDisable,
        setMessage,
        setError,
    }) => {
    const messageSuccess = 'enter values and press "set"';
    const messageError = 'incorrect values!';

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const number = +e.currentTarget.value;
        setMaxValue(number);

        if (number === minValue || number < minValue || number < 0 || minValue < 0) {
            setDisable(true);
            setError(true);
            setMessage(messageError);
            return;
        }
        setDisable(false);
        setError(false);
        setMessage(messageSuccess);
    };

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const number = +e.currentTarget.value;
        setMinValue(number);
        if (number === maxValue || number < 0 || number > maxValue) {
            setDisable(true);
            setError(true);
            setMessage(messageError);
            return;
        }
        setDisable(false);
        setError(false);
        setMessage(messageSuccess);
    };

    return (
        <div className={ styles.settings }>
            <label className={ styles.field }>
                <span>max value:</span>
                <input
                    className={ (maxValue < 0 || minValue === maxValue || maxValue < minValue)
                        ? styles.error
                        : styles.input }
                    type="number"
                    value={ maxValue }
                    onChange={ onChangeMaxHandler }
                />
            </label>
            <label className={ styles.field }>
                <span>start value:</span>
                <input
                    className={ (minValue < 0 || minValue === maxValue || maxValue < minValue)
                        ? styles.error
                        : styles.input }
                    type="number"
                    value={ minValue }
                    onChange={ onChangeMinHandler }
                />
            </label>
        </div>
    );
};
