import "./MainMenu.scss";
import { NavDropdown } from "react-bootstrap";
import Category from "../Categories/Category.json";
import Brands from "../Brands/Brands.json";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MainMenu() {
  return (
    <div className="mainmenu text-start">
      <div className="mainmenu-content">
        <Navbar expand="lg">
          <Container fluid="md">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/" className="mainmenu-item">
                  TRANG CHỦ
                </Nav.Link>
                <Nav.Link href="/products" className="mainmenu-item">
                  TẤT CẢ
                </Nav.Link>
                <NavDropdown
                  title="THỂ LOẠI"
                  id="basic-nav-dropdown"
                  className="mainmenu-item"
                >
                  {Category.map((item, index) => (
                    <NavDropdown.Item href={`/Category/${item.Id}`} key={index}>
                      {item.Name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <NavDropdown
                  title="HOẠT ĐỘNG"
                  id="navbarScrollingDropdown"
                  className="mainmenu-item"
                >
                  {Brands.map((items, index) => (
                    <NavDropdown.Item
                      href={`/brands/${items.id}`}
                      key={index}
                      bsPrefix="dropdown-item"
                    >
                      {items.Name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Nav.Link href="/gallery" className="mainmenu-item ">
                  HÌNH ẢNH
                </Nav.Link>
                <Nav.Link href="/feedback" className="mainmenu-item">
                  ĐÁNH GIÁ
                </Nav.Link>
                <Nav.Link href="/customer" className="mainmenu-item">
                  HỖ TRỢ ONLINE
                </Nav.Link>
                <Nav.Link href="/contact" className="mainmenu-item">
                  LIÊN HỆ
                </Nav.Link>
                <Nav.Link href="/aboutus" className="mainmenu-item">
                  VỀ CHÚNG TÔI
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default MainMenu;
