import React from 'react';
import whatsapp from '../assets/whatsapp2.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link} from 'react-router-dom';
//import axios from 'axios';


const Noticias = () => {
  /*const [lista, setLista] =  useState([]);
  const[titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const[id, setId] = useState('');
  const [loading, setLoading]=useState(true)
 
  const {id_categoria}= useParams()
  useEffect(() => {
    fetch('http://localhost/apirest/')
    .then((response)=>{
        //a ese response que te da la promesa lo transformas en json
        return response.json()
    })
    .then((resultado)=>{
        //setPtoductos(respuesta de la API)
        setLista(resultado)
        console.table(resultado)
    })
    .catch((error)=>{
       // toast.error("error al cargar las noticias")
    })
    //.finally(()=>{
      //  setLoading(false)
    //})
},[id_categoria])

    getNoticias();

  },[])

    async function getNoticias() {
      const res = await axios.get('http://localhost/api/')
      setLista(res.data)
      setTitulo(res.data.titulo)
      setDescripcion(res.data.descripcion)
      console.log(res.data)
    }*/


  return (
    <div>
      <div className="whats-app my-float">
        <a href="https://wa.me/5493518585312" rel="no noreferrer" target="_blank">
          <img src= { whatsapp } className="w2" alt='whatsapp icon'/>
        </a>
      </div>
      <section className='section'>

      
      <h2 data-aos="fade-right"> NOTICIAS DESTACADAS </h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non animi possimus deleniti ipsum a fuga. 
      </p>
    
      
          <Card>
     
          <Card.Header>Noticia Destacada</Card.Header>
          <Card.Body>
            <Card.Title>Titulo</Card.Title>
     
            <Card.Text >Descripcion</Card.Text>
             
            <Button variant="outline-warning">
            <Link to="/" >Volver</Link>
            </Button>
           </Card.Body>
         </Card>
         </section>
    </div>
  );
}



export default Noticias