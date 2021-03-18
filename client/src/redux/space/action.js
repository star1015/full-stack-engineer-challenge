import { GET_ALL_CAPSULES, GET_LANDING_PAD_BY_ID, GET_ERROR } from './constant';
import { api } from '../../services';
import logger from '../../utils/logger';

export const getAllCapsules = () => async (dispatch) => {
    try {
        await api.get(`${process.env.REACT_APP_API_URL}/getAllCapsules`).then(res => {
            dispatch({ type: GET_ALL_CAPSULES, payload: res.data });
        
            logger.info("success api - getAllCapsules");
    
            return res;
        });
    } catch (error) {
        logger.error(error);
        return error;
    }
}

export const getLandingPadByID = (id) => async (dispatch) => {
    try {
        await api.get(`${process.env.REACT_APP_API_URL}/getLandingPadByID/${id}`).then(res => {
            dispatch({ type: GET_LANDING_PAD_BY_ID, payload: res });
        
            logger.info("success api - getLandingPadByID");
            
            return res;
        });
    } catch (error) {
        logger.error(error);
        dispatch({ type: GET_ERROR, payload: error.response.data});
        return error;
    }
}