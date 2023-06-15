import { Navbar, Nav } from 'react-bootstrap';
import "../Navigationbar/Navigationbar.css"
function Navigationbar() {
  
  return (
    <Navbar className="fixed-top" expand="md">
      <Navbar.Brand href="#" className="logo">Travel Jinn</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="logo icn" style={{ marginRight: '20px' }}>Home</Nav.Link>
          <Nav.Link href="#about" className="logo icn" style={{ marginRight: '20px' }}>Login</Nav.Link>
          <Nav.Link href="#services" className="logo icn" style={{ marginRight: '20px' }}>Flight Book</Nav.Link>
          <Nav.Link href="#contact" className="logo icn" style={{ marginRight: '20px' }} >Hotel Book</Nav.Link>
          <Nav.Link href="#contact" className="logo icn" style={{ marginRight: '20px' }}>Team</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigationbar