export const createReducer = (initialState: any, reducers: any) => {
  return (state: any, action: any = {}) => {
    if (typeof state === 'undefined') {
      return initialState;
    }

    return reducers[action.type] ? reducers[action.type](state, action) : state;
  };
};
