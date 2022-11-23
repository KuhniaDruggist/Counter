import { IncCounterValueType } from '../ac/incCounterValue';
import { SetCounterValueType } from '../ac/resetCounterValue';

const initialState = {
    value: 0,
};

type InitialStateType = typeof initialState;

type ActionsType = IncCounterValueType | SetCounterValueType;

export const counter = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'INC_COUNTER_VALUE':
            return {
                ...state,
                value: state.value + 1,
            };
        case 'SET_COUNTER_VALUE':
            return {
                ...state,
                value: action.value,
            };
        default: return state;
    }
};
