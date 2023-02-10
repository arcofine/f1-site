import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Link from "next/link";

export default function Header({data}) {
       return (
              <Navbar bg="dark" variant="dark">
                     <Container>
                            <Navbar.Brand href="#home">
                                   <img
                                          alt=""
                                          src="/images/logoBlanc.png"
                                          //   width="30"
                                          height="100"
                                          className="align-top"
                                   />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                                   <Nav>
                                          <ButtonToolbar aria-label="Toolbar with button groups">
                                                 <ButtonGroup className="me-2" aria-label="First group">
                                                        {Object.keys(data["Class Overall"]).map((x, i) => {
                                                               return (
                                                                      <Button
                                                                             variant={
                                                                                    i % 2 === 0
                                                                                           ? "outline-danger"
                                                                                           : "outline-secondary"
                                                                             }
                                                                             key={i}>
                                                                             <Link
                                                                                    href={`/${x.substring(
                                                                                           x.indexOf(" ") + 1
                                                                                    )}/${x.substring(
                                                                                           0,
                                                                                           x.indexOf(" ")
                                                                                    )}`}>
                                                                                    {x}
                                                                             </Link>
                                                                      </Button>
                                                               );
                                                        })}
                                                 </ButtonGroup>
                                                 <ButtonGroup className="me-2" aria-label="Second group">
                                                        {Object.keys(data)
                                                               .filter((x) => {
                                                                      return !x.includes("Class");
                                                               })
                                                               .map((x, i) => {
                                                                      return (
                                                                             <Button variant="outline-warning" key={i}>
                                                                                    {x}
                                                                             </Button>
                                                                      );
                                                               })}
                                                 </ButtonGroup>
                                          </ButtonToolbar>
                                   </Nav>
                            </Navbar.Collapse>
                     </Container>
              </Navbar>
       );
}
