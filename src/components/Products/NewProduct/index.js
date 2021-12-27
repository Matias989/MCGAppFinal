import React, {useState} from 'react';
import { Container, Form, FloatingLabel, Button, Card} from 'react-bootstrap';
import NavReact from "../../../shared/Navbar/index"
import { addNewProductAction } from '../../../store/actions/product/productActions';
import { useDispatch , useSelector} from 'react-redux';

const NewProducts = (props) => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [validated, setValidated] = useState(false);

    const { loading, error } = useSelector((state) => state.products);

    const addNewProduct = (product) => dispatch(addNewProductAction(product));

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }else{ 
        const product = {
            name,
            category
        };
    
        addNewProduct(product);
        console.log(error);
        if (!error) props.history.push(`/Productos`);
      }
  
      setValidated(true);
    };

    return (
        <>
            <NavReact/>
            <Container fluid="md">
                <Card className='mt-5' style={{ width: '18rem' , margin: 'auto'}}>
                    <Card.Body>
                        <Card.Title as="h5">Producto Nuevo</Card.Title>
                        <Card.Text>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <FloatingLabel controlId="floatingName" label="Nombre" className="mb-3">
                                    <Form.Control type="text" placeholder="Televisor" value={name} onChange={(e) => setName(e.target.value)} required/>
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese un nombre.
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingCategory" label="Categoria" className="mb-3">
                                    <Form.Control type="text" placeholder="ElectroHouse" value={category} onChange={(e) => setCategory(e.target.value)} required/>
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese una categoria.
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                                <Button variant="info" type='submit'>
                                    Crear
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

  export default NewProducts;