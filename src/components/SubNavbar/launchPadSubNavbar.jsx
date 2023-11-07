import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import { Link } from 'react-router-dom';
import LaunchNavBarNew from './launchNavbarNew';
import "./subheader.css";

//  import Container from 'react-bootstrap/Container';
//             import Nav from 'react-bootstrap/Nav';
//             import Navbar from 'react-bootstrap/Navbar';
function SubNavbar() {
    return (
        <>
            {/* <LaunchNavBarNew /> */}
            <Navbar 
            style={{ position: "sticky",  zIndex: "99", top: "9.2%", justifyContent: "center" }}  
            collapseOnSelect className="p-1 m-0 border-top border-dark sub" expand="lg" >
                <Container className="p-0 m-0 s">
                    <Navbar.Toggle className="ms-3" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navAll">
                            {/* <Nav.Link> */}
                            <Link className='nav-link  nav-link-ltr' to="#home">Arts</Link>
                            {/* </Nav.Link> */}
                            <Link className='nav-link nav-link-ltr' to="#features">Comics & Illustration</Link>
                            <Link className='nav-link nav-link-ltr' to="#pricing">Design & Tech
                            </Link>

                            <Link className='nav-link nav-link-ltr' to="#pricing">Film
                            </Link>

                            <Link className='nav-link nav-link-ltr' to="#pricing">Food & Craft
                            </Link>


                            <Link className='nav-link nav-link-ltr' to="#pricing">Games
                            </Link>


                            <Link className='nav-link nav-link-ltr' to="#pricing">Music
                            </Link>
                            <Link className='nav-link nav-link-ltr' to="#pricing">
                                Publishing
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* );
} */}
{/* 
            export default CollapsibleExample; */}
        </>
    );
}

export default SubNavbar;