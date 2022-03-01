import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


import Logo from '../../assets/images/logo.jpg'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='xl' fixed='top' variant='dark'>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <Image
                                src={Logo}
                                className='d-inline-block align-top me-2'
                                alt='Credit Capital'
                                height="40px"
                                width="40px"
                            />
                            BlackPhoenix
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='m-auto nav__ mx-auto'>
                            <div className='navbar__left'>
                                <LinkContainer to='/login' className='main'>
                                <Nav.Link>Log In</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/signup'>
                                <Nav.Link>Sign Up</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/post'>
                                <Nav.Link style="color:red">Post a Project</Nav.Link>
                                </LinkContainer>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header