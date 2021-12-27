import Swal from 'sweetalert2';
import client from '../../../config/axios';

import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  EDIT_PRODUCT,
  // EDIT_PRODUCT_SUCCESS,
  // EDIT_PRODUCT_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../../../types/products';

const productUrl = '/product';

export function addNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addNewProduct());
    try {
      await client.post(`${productUrl}`, product);
      dispatch(addNewProductSuccess(product));

      Swal.fire(
        'Correcto',
        'El producto se agrego correctamente...',
        'success'
      );
    } catch (error) {
      console.error(error);
      dispatch(addNewProductError(true));

      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error.',
        text: 'Ocurrio un error, intenta de nuevo.',
      });
    }
  };
}

const addNewProduct = () => ({
  type: ADD_PRODUCT,
});

const addNewProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const addNewProductError = (status) => ({
  type: ADD_PRODUCT_ERROR,
  payload: status,
});

export function getAllProductsAction() {
  return async (dispatch) => {
    dispatch(getAllProducts());
    try {
      const { data } = await client.get(`${productUrl}/all`);
      dispatch(getAllProductsSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(getAllProductsError(true));
    }
  };
}

const getAllProducts = () => ({
  type: GET_PRODUCTS,
});

const getAllProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getAllProductsError = (status) => ({
  type: GET_PRODUCTS_ERROR,
  payload: status,
});

export const deleteProductAction = (id) => {
  return async (dispatch) => {
    dispatch(deleteProduct());
    try {
      await client.delete(`${productUrl}/${id}`);
      dispatch(deleteProductSuccess(id));
      Swal.fire(
        'Eliminado',
        'El producto se elimino correctamente...',
        'success'
      );
    } catch (error) {
      console.error(error);
      dispatch(deleteProductError(true));
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error.',
        text: 'Ocurrio un error al eliminar el producto, intenta de nuevo.',
      });
    }
  };
};

const deleteProduct = () => ({
  type: DELETE_PRODUCT,
});

const deleteProductSuccess = (id) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: id,
});

const deleteProductError = (status) => ({
  type: DELETE_PRODUCT_ERROR,
  payload: status,
});

export const editProductAction = (product) => {
  return async (dispatch) => {
    dispatch(editProduct(product));
  };
};

const editProduct = (product) => ({
  type: EDIT_PRODUCT,
  payload: product,
});
