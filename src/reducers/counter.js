const INITIAL_STATE = 0;

const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload
        case 'DECREMENT':
            return state - action.payload

        default:
            return state;
    }
}

export default counterReducer;