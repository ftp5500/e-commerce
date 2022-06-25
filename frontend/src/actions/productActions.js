import {PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS} from "../constants/productsConstants";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCTS_LIST_REQUEST,
        });
        const {data} = await axios.get("api/products/");
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

};