import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';

export default class NavReact extends React.Component {
    render(){
      return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/Home">MCGA</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/Home">Home</Nav.Link>
                <Nav.Link href="/Productos">Productos</Nav.Link>
              </Nav>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <Nav.Link href="/"><FaSignOutAlt className='mb-1'/></Nav.Link>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      );
    }
}