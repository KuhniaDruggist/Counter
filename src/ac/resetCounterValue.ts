export const setCounterValue = (value: number) => ({ type: 'SET_COUNTER_VALUE', value } as const);
export type SetCounterValueType = ReturnType<typeof setCounterValue>;
