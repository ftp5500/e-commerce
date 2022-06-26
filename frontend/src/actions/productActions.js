import {
    PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS, PRODUCTS_DETAILS_FAIL , PRODUCTS_DETAILS_SUCCESS, PRODUCTS_DETAILS_REQUEST} from "../constants/productsConstants";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCTS_LIST_REQUEST,
        });
        const {data} = await axios.get("/api/products/");
        dispatch({
            type: PRODUCTS_LIST_SUCCESS,
            payload: data
        })

    } catch (e) {
        dispatch({
            type: PRODUCTS_LIST_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message
                : e.message

        })
    }

}


export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCTS_DETAILS_REQUEST,
        });
        const {data} = await axios.get(`/api/products/${id}`);
        dispatch({
            type: PRODUCTS_DETAILS_SUCCESS,
            payload: data
        })

    } catch (e) {
        dispatch({
            type: PRODUCTS_DETAILS_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message
                : e.message

        })
    }

};