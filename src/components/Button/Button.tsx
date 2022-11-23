import React from 'react';
import styles from './Button.module.css';

type ButtonPropsType = {
    title: string
    disabled: boolean
    onClickHandler: () => void
}

export const Button: React.FC<ButtonPropsType> = ({ title, disabled, onClickHandler }) => {
    return (
        <button
            type="button"
            className={ styles.button }
            disabled={ disabled }
            onClick={ onClickHandler }
        >{ title }
        </button>
    );
};
