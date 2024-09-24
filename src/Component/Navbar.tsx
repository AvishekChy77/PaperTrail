import { Button, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="">
      <Navbar.Brand className="h2" href="/">
        Papertrail
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="/login">
          <Button className="h3" size="sm" variant="outline-dark">
            Log in
          </Button>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
