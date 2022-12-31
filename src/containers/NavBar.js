import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
  const user = useSelector(state =>state.log.user);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
        <Navbar.Brand href="/">Digital-Farming</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="SoilTesting"
              menuVariant="dark"
            >
              <NavDropdown.Item href="">SoilTesting info</NavDropdown.Item>
              <NavDropdown.Item href="/SoilRegistery">Registeration</NavDropdown.Item>
              <NavDropdown.Item href="/SoilLogin">Report of SoilTesting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Contact info</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Fertilizers"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/Fertilizers">Fertilizers info</NavDropdown.Item>
              <NavDropdown.Item href="">Fertilizers Stock Position</NavDropdown.Item>
              <NavDropdown.Item href="">Fertilizers Price</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Fertilizers Retailers</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex" role="login">
              {
                user
                ? <Link to='/'> <Button variant="outline-danger" onClick={() => {
                  dispatch({
                  type : 'LOGOUT'
                  })
                }}>LOGOUT</Button></Link>
                : <Link to='/FarmLogin'><Button variant="outline-success">LOGIN</Button></Link>
            }
          </Form>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
