export const incCounterValue = () => ({ type: 'INC_COUNTER_VALUE' } as const);
export type IncCounterValueType = ReturnType<typeof incCounterValue>;
