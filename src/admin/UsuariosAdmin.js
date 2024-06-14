import React from 'react'
import Table from 'react-bootstrap/Table';
//import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
//import Form from 'react-bootstrap/Form';
//import Modal from 'react-bootstrap/Modal';

const UsuariosAdmin = () => {
  return (
    <div>
        <h1>Administrador de usuarios</h1>
        <Table striped borderless hover responsive="sm">
       
         
        <thead >

          <tr>
            <th>ID</th>
            <th>Barrio</th>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Acciones</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td>
            <td>barrio</td>
            <td>nombre</td>
            <td>dni</td>
            <td>
            <Button variant="warning"
              >
              <ModeEditIcon />
              </Button>
            <Button variant="danger" 
           >
            <DeleteIcon />
              </Button>
            </td>
            
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
            <Button variant="warning">
              <ModeEditIcon />
              </Button>
            <Button variant="danger">
            <DeleteIcon />
              </Button>
            </td>
            
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
            <Button variant="warning">
              <ModeEditIcon />
              </Button>
            <Button variant="danger">
            <DeleteIcon />
              </Button>
            </td>
            
          </tr>
        </tbody>
       
      </Table>
    </div>
  )
}

export default UsuariosAdmin