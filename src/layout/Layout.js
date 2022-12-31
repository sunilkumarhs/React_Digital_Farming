import React from 'react'
import NavBar from '../containers/NavBar'
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div>
        <NavBar />
          <Nav fill variant="pills">
      <Nav.Item>
        <Nav.Link href="/Mainpage" eventKey="1">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/SoilRegistery' eventKey="2">SoilTesting</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/Fertilizers' eventKey="3">Fertilizers</Nav.Link>
      </Nav.Item>
    </Nav>
    <Outlet/>
    </div>
  )
}

export default Layout