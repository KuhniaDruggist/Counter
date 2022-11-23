import React from 'react';
import styles from './Display.module.css';

type DisplayPropsType = {
    maxValue: number
    counter: number
}

export const Display: React.FC<DisplayPropsType> = ({ maxValue, counter }) => {
    return <div className={ `${ styles.display } ${counter === maxValue ? styles.stop : ''}` }>{ counter }</div>;
};
