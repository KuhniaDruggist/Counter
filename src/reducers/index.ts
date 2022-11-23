import { combineReducers } from 'redux';
import { counter } from './counter';

export const combinedReducers = combineReducers({ counter });

export type AppStateType = ReturnType<typeof combinedReducers>;
