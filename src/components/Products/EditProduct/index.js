import React, {useState, useEffect} from 'react';
import { Container, Form, FloatingLabel, Button, Card} from 'react-bootstrap';
import NavReact from "../../../shared/Navbar/index"
import { useDispatch , useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editProductAction } from '../../../store/actions/product/productActions';

const EditProducts = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const [productState, setProduct] = useState({
        name: '',
        category: ''
    });

    const { loading, error, product } = useSelector((state) => state.products);
    useEffect(() => {
        setProduct(product);
    }, [product]);

    const { name, category } = productState;

    const editProduct = (product) => dispatch(editProductAction(product));
    
    const onSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        editProduct(productState);
        setValidated(true);
        history.push(`/Productos`);
    };

    const handleSubmit = (e) => {
        setProduct({
        ...productState,
        [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <NavReact/>
            <Container fluid="md">
                <Card className='mt-5' style={{ width: '18rem' , margin: 'auto'}}>
                    <Card.Body>
                        <Card.Title as="h5">Editar Producto</Card.Title>
                        <Card.Text>
                            <Form noValidate validated={validated} onSubmit={onSubmit}>
                                <FloatingLabel controlId="floatingName" label="Nombre" className="mb-3">
                                    <Form.Control type="text" name='name' placeholder="Televisor" value={name} onChange={handleSubmit} required/>
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese un nombre.
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingCategory" label="Categoria" className="mb-3">
                                    <Form.Control type="text" name='category' placeholder="ElectroHouse" value={category} onChange={handleSubmit} required/>
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese una categoria.
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                                <Button variant="info" type='submit'>
                                    Editar
                                </Button>
                            </Form>
                            {loading ? <p> Loading... </p> : null}

                            {error ? (
                            <p className='alert alert-danger p-2 m-4 text-center'>
                                Ocurrio un error.
                            </p>
                            ) : null}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
  };

  export default EditProducts;