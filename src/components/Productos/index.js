import React from 'react';
import { Container, Row , Col, Button} from 'react-bootstrap';
import TableContent from '../TableContent/index';
import NavReact from "../Navbar/index"
import { FaPlusCircle } from 'react-icons/fa';

export default class Productos extends React.Component {
    render(){
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
                                <TableContent/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
      );
    }
}