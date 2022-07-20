// import data from './data/data';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  // const [categories, setCategories] = useState([]);
  return (
    <BrowserRouter>
      <div className="d-flex flex-column main-container">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              {/* <Button
                variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>
              </Button> */}

              <LinkContainer to="/">
                <Navbar.Brand>Gebeya</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
          {/* <Link to="/">Gebeya</Link> */}
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:slug" element={<Product />} />
            </Routes>
          </Container>
        </main>
        <footer className="text-center">Copyright &copy; 2022 </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
