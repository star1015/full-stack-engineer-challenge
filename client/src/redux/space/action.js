import { GET_ALL_CAPSULES, GET_LANDING_PAD_BY_ID } from './constant';
import { api } from '../../services';
import logger from '../../utils/logger';

export const getAllCapsules = () => async (dispatch) => {
    try {

        const { data } = await api.get(`${process.env.API_URL}/capsules`);

        dispatch({ type: GET_ALL_CAPSULES, payload: data.capsules });
        
        logger.info("success api - getAllCapsules");

        return data;

    } catch (error) {
        logger.error(error.response.data);
        return error.response.data;
    }
}

export const getLandingPadByID = (id) => async (dispatch) => {
    try {
        
        const { data } = await api.get(`${process.env.API_URL}/landpads/${id}`);

        dispatch({ type: GET_LANDING_PAD_BY_ID, payload: data.body });
        
        logger.info("success api - getLandingPadByID");
        
        return data;

    } catch (error) {
        logger.error(error.response.data);
        return error.response.data;
    }
}