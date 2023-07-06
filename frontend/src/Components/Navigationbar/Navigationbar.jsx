import { Navbar, Nav } from 'react-bootstrap';
import "../Navigationbar/Navigationbar.css"
function Navigationbar() {
  
  return (
    <Navbar className="fixed-top" expand="md">
      <Navbar.Brand href="/" className="logo">Travel Jinn</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="ml-auto">
          <Nav.Link href="/askourexperts" className="logo icn" style={{ marginRight: '20px' }}>Ask Experts</Nav.Link>
          <Nav.Link href="/login" className="logo icn" style={{ marginRight: '20px' }}>Login</Nav.Link>
          <Nav.Link href="/flightbook" className="logo icn" style={{ marginRight: '20px' }}>Flight Search</Nav.Link>
          <Nav.Link href="/hotelbook" className="logo icn" style={{ marginRight: '20px' }} >Hotel Search</Nav.Link>
          <Nav.Link href="/feedback" className="logo icn" style={{ marginRight: '20px' }}>Feedback</Nav.Link>
          <Nav.Link href="/team" className="logo icn" style={{ marginRight: '20px' }}>Team</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigationbar