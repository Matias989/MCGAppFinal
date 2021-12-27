import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product/index';
import { Container, Row , Col, Button, Table} from 'react-bootstrap';
import NavReact from "../../shared/Navbar/index"
import { FaPlusCircle } from 'react-icons/fa';
import { getAllProductsAction } from '../../store/actions/product/productActions';

const Products = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      const getAllProducts = () => dispatch(getAllProductsAction());
      getAllProducts();
    }, []);
  
    const { loading, error, products } = useSelector((state) => state.products);

    return (
        <>
            <NavReact/>
            <Container fluid="md">
                <Row>
                    <Col className='border mt-5 rounded bg-secondary'>
                        <Row>
                            <Col className='col-lg-11 col-md-10 col-sm-10 col-xs-11 text-center text-white'>
                                <h1> Listado de Productos </h1>
                            </Col>
                            <Col className='col-lg-1 col-md-2 col-sm-2 col-xs-1 text-end text-white'>
                                <Button className='m-2' variant="info"><FaPlusCircle className='mb-1'/></Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {loading ? <h4 className='text-center'> Loading... </h4> : null}

                                {error ? (
                                <p className='alert alert-danger p-2 m-4 text-center'>
                                    Ocurrio un error.
                                </p>
                                ) : null}

                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                        <th>Nombre</th>
                                        <th>Categoria</th>
                                        <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { products.length === 0 ? 'No hay Productos' : products.map((product) => ( <Product key={product._id} product={product} /> )) }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
  };

  export default Products;