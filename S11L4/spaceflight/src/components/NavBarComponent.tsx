import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='text-warning fw-bold'>SPACEFLIGHT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} className='nav-link'>Home</Link>
            <Link to={"/"} className='nav-link'>Mail</Link> {/* pagina non ancora in funzione */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
