import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoImg from "../../Assets/Logo_img/logo.png";
import "./Navber.css";
const Navber = () => {
    return (
        <Navbar className="nav_header" expand="lg">
            <Container fluid>
                <img
                    width="250px"
                    className="img-fluid logo_img"
                    src={logoImg}
                    alt=""
                />

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto nav_menu">
                        <Nav.Link href="#action1">Why TMP?</Nav.Link>
                        <Nav.Link href="#action2">Industries</Nav.Link>
                        <Nav.Link href="#action2">Complaince</Nav.Link>
                        <Nav.Link href="#action2">Industries</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;
