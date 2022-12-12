import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';



const NavBar = () => {
  const user = useSelector(state =>state.log.user);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>Digital-Farming</Navbar.Brand>
          <Form className="d-flex" role="search">
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
      <Outlet/>
    </div>
  )
}

export default NavBar
