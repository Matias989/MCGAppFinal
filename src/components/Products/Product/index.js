import React from 'react';
import { Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import {
    deleteProductAction,
    editProductAction,
  } from '../../../store/actions/product/productActions';
  
const Product = ({ product }) => {
    
    const { _id, name, category } = product;
    const dispatch = useDispatch();

    const onDeleteProduct = (id) => {
        Swal.fire({
        title: '¿Esta seguro?',
        text: 'Esta accion es irreversible.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        }).then((result) => {
        if (result.value) {
            dispatch(deleteProductAction(id));
        }
        });
    };

    const onEditRedirection = (props,id) => {
        dispatch(editProductAction(product));
        props.history.push(`/products/edit/${id}`);
    };

    return (
        <>
                    <tr>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td className='text-center'>
                        <Button onClick={() => onEditRedirection(_id)} className='m-1' variant="info"><FaEdit className='mb-1'/></Button>
                        <Button onClick={() => onDeleteProduct(_id)} className='m-1' variant="info"><FaTrash className='mb-1'/></Button>
                    </td>
                    </tr>
        </>
      );
};

export default Product;
