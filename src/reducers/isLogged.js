const INITIAL_STATE = false;

const loggedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state

        default:
            return state;
    }
}

export default loggedReducer;