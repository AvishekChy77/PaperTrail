import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";

const Root = () => {
  return (
    <Container className="my-4">
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default Root;
