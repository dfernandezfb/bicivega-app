import { Navbar, Container, Nav } from 'react-bootstrap';
import {GrBike} from 'react-icons/gr'
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const user = localStorage.getItem('user');
  const signOut = ()=>{
    localStorage.clear();
  }
  return ( 
    <Navbar className='bg-oxford' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="logo-text text-beige">BiciVega  <GrBike className='bg-beige'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='border border-light bg-beige'>
          <GrBike className='bg-beige logo-toggle'/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='text-beige nav-link'>Home</Link>
            {
              user?
              <Link to="/" onClick={signOut} className='text-beige nav-link'>Cerrar sesión</Link>
              :
              <Link to="/login" className='text-beige nav-link'>Ingresar</Link>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   );
}
 
export default Header;