import React from 'react';

type ButtonPropsType = {
    title: string
    disabled: boolean
    onClickHandler: () => void
}

export const Button: React.FC<ButtonPropsType> = ({title, disabled, onClickHandler}) => {
    return (
        <button type="button"
                className={'button'}
                disabled={disabled}
                onClick={onClickHandler}
        >{title}
        </button>
    );
}