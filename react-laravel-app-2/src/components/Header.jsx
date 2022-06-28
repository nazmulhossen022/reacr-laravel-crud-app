import React from 'react'
import { Container,Navbar,Nav,NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const history = useNavigate();
    const UserName = JSON.parse(localStorage.getItem('student-user-info'));
    const LogOut = () =>{
        localStorage.clear();
        history('/login')
    }

  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Container>
                    <Link to="/" className='navbar-brand'>Student Crud</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {
                                localStorage.getItem('student-user-info') ?
                                <>
                                   <Link to="/" className="nav-link">Home</Link>
                                   <Link to="/add" className="nav-link">Add Data</Link>
                                   <Link to="/serch" className="nav-link">Serch</Link>
                                </>
                                :
                                null
                            }
                            
                        </Nav>
                        <Nav>
                            {
                                localStorage.getItem('student-user-info') ?
                                <>
                                  <NavDropdown title={UserName.name} id="collasible-nav-dropdown">
                                    <Link to="/" className="dropdown-item">Profie</Link>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={LogOut}>LogOut</NavDropdown.Item>
                                   </NavDropdown>
                                </>
                                :
                                <>
                                  <Link to="/login" className="nav-link">Login</Link>
                                  <Link to="/register" className="nav-link">Register</Link>
                                </>
                            }
                        </Nav>
                        </Navbar.Collapse>
                </Container>
        </Navbar>
    </div>
  )
}

export default Header
