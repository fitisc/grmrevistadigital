import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const CategoriasAdmin = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categorias, setCategorias] = useState([]);

  const handleCategory=(e)=>{
     const getCategory = () => e.target.value;
     setCategorias(getCategory());
     e.preventDefault();
  }
  return (
    <div>
        <h1>Administrados de Categorias</h1>
        <div>
      <Button variant="info" size="lg" onClick={handleShow}>
        NUEVO
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar novedad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Categoria</Form.Label>
              <Form.Select name="categorias" aria-label="Default select example"
              onChange={(e)=>handleCategory}>
                <option>Seleccionar categoria</option>
                {categorias.map((category)=>(
                  <option key={category.id} value={category.id}>{category.categoria}</option>
                ))}
                
                <option value="2">Novedades</option>
                <option value="3">Notas de Interes</option>
                <option value="2">Servicios</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Subcategoria novedades</Form.Label>
              <Form.Select name="categoria" aria-label="Default select example">
                <option>Seleccionar subcategoria</option>
                <option value="1">Intendencia</option>
                <option value="2">Control de Obras</option>
                <option value="3">Seguridad</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Titulo"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={10} />
            </Form.Group>
          </Form>

          <Form.Group className="mb-3" enctype="multipart/form-data" controlId="exampleForm.ControlInput1">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="file"
                name='imagen'
                accept='image/jpg, image/jpeg, image/png'
                autoFocus
              />
            </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
      
      <div>
      <Table striped borderless hover  responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Acciones</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
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
    </div>
  )
}

export default CategoriasAdmin