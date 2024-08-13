import styles from "../styles/components/Header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" bg="light" className={styles.bg}>
      <Container style={{background:"white"}} fluid>
        <Navbar.Brand href=",">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link href="">Eleven</Nav.Link>
            <Nav.Link href=",">Twelve</Nav.Link>
            <Nav.Link href=".">Thirteen</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;