import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Homenav(props) {
  return (
    <div>
    <Navbar bg="dark" variant='dark' expand="lg" className='py-3 col-xl'>
      <Container>
        <Navbar.Brand href="#home"><Link className='link-style' to='/'><b>Shopping Cart</b></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-link">
            <Nav.Link><Link className='link-style' to='/'><b>Home</b></Link></Nav.Link>
            <Nav.Link className='cart'><Link className='link-style' to='/cart'><b><AiOutlineShoppingCart style={{height:'25px',width:'25px'}}/><sup style={{color:'red'}}>{props.count}</sup></b></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Homenav