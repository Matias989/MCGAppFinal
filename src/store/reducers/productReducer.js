import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
  } from '../../types/products';
  
  const initialState = {
    products: [],
    error: null,
    loading: false,
    product: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_PRODUCT:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          products: [...state.products, action.payload],
          error: false,
        };
  
      case ADD_PRODUCT_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case GET_PRODUCTS:
        return {
          ...state,
          loading: true,
        };
  
      case GET_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
          error: false,
        };
  
      case GET_PRODUCTS_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_PRODUCT:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          products: state.products.filter(
            (product) => product._id !== action.payload
          ),
          error: false,
        };
  
      case DELETE_PRODUCT_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case EDIT_PRODUCT:
        return {
          ...state,
          loading: false,
          product: action.payload,
        };
  
      case EDIT_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          products: state.products.filter(
            (product) => product._id !== action.payload
          ),
          error: false,
        };
  
      case EDIT_PRODUCT_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  