import React, {Fragment} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Bootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export const Navbar1 = () => {
	return (
		<Fragment>
		<Navbar bg="light" expand="lg">
		<Navbar.Brand href="/" className="IMAB">
		  IMAB
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
		  <Nav className="mr-auto">
			{/* <Nav.Link href="/">Home</Nav.Link> */}
			{/* <Nav.Link href="#link">Link</Nav.Link> */}
			<NavDropdown title="Dropdown" id="basic-nav-dropdown">
			  <NavDropdown.Item href="#LogIN/3.1">LogIN</NavDropdown.Item>
			  <NavDropdown.Item href="#SignUp/3.2">SignUp</NavDropdown.Item>
			  <NavDropdown.Item href="#AnimeClothes/3.3">
				AnimeClothes
			  </NavDropdown.Item>
			  {/* <NavDropdown.Divider /> */}
			  <NavDropdown.Item href="#GamesClothes/3.4">
				GamesClothes
			  </NavDropdown.Item>
			</NavDropdown>
		  </Nav>
		  <Form inline>
			<Form.Control
			  type="text"
			  placeholder="what are you looking for..."
			  onFocus={e => (e.target.placeholder = "")}
			  onBlur={e =>
				(e.target.placeholder = "what are you looking for...")
			  }
			  className="mr-sm-2"
			/>
			<Button variant="outline-success">Search</Button>
		  </Form>
		</Navbar.Collapse>
	  </Navbar>

	  </Fragment>
	)
}
export default Navbar1