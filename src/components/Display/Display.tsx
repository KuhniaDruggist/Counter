import React from 'react';

type DisplayPropsType = {
    maxValue: number
    counter: number
}

export const Display: React.FC<DisplayPropsType> = ({maxValue, counter}) => {
    return <div className={`display ${counter === maxValue ? 'stop' : ''}`}>{counter}</div>
}
