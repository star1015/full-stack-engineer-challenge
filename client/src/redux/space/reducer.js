import { GET_ALL_CAPSULES, GET_LANDING_PAD_BY_ID, GET_ERROR } from './constant';

const DEFAULT_STATE = {
    data: null,
    error: null
};

const spaceReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case GET_ALL_CAPSULES:
            return {
                ...state,
                data: action.payload,
                error: null
            }
        case GET_LANDING_PAD_BY_ID:
            return {
                ...state,
                data: action.payload,
                error: null
            }
        case GET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default spaceReducer;