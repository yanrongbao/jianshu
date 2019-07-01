import * as types from './actionsTypes';
const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    if (action.type === types.INPUT_FOCUS_ON) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = true;
        return newState;
    }
    if (action.type === types.INPUT_FOCUS_OFF) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = false;
        return newState;
    }
    return state;
};
