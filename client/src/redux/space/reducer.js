import { GET_ALL_CAPSULES, GET_LANDING_PAD_BY_ID } from './constant';

const DEFAULT_STATE = {
    capsules: null,
    landingPad: null,
};

const spaceReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case GET_ALL_CAPSULES:
            return {
                ...state,
                capsules: action.payload.capsules
            }
        case GET_LANDING_PAD_BY_ID:
            return {
                ...state,
                landingPad: action.payload.landingPad
            }
        default:
            return state;
    }
}

export default spaceReducer;