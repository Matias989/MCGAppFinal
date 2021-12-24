import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default class TableContent extends React.Component {
    render(){
      return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Ariculares</td>
                    <td>Tecnologia</td>
                    <td className='text-center'>
                        <Button className='m-1' variant="info"><FaEdit className='mb-1'/></Button>
                        <Button className='m-1' variant="info"><FaTrash className='mb-1'/></Button>
                    </td>
                    </tr>
                    <tr>
                    <td>Zapatillas Nike</td>
                    <td>Calzados</td>
                    <td className='text-center'>
                        <Button className='m-1' variant="info"><FaEdit className='mb-1'/></Button>
                        <Button className='m-1' variant="info"><FaTrash className='mb-1'/></Button>
                    </td>
                    </tr>
                    <tr>
                    <td>Aspiradora</td>
                    <td>Electrodomenticos</td>
                    <td className='text-center'>
                        <Button className='m-1' variant="info"><FaEdit className='mb-1'/></Button>
                        <Button className='m-1' variant="info"><FaTrash className='mb-1'/></Button>
                    </td>
                    </tr>
                </tbody>
            </Table>
        </>
      );
    }
}