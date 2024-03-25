import { Container, NavLink } from "react-bootstrap";
import "./Header.scss";
import Logo from "./imgHeader/LOGO2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Data from "../Data.json";
import SearchBar from "../SearchBar/SearchBar";

function Header({ CartCount }) {
  return (
    <Container fluid="md">
      <div className="header">
        <div className="header-content">
          <div className="header-left-logo">
            <img className="header-img-logo" src={Logo} alt="logo" />
          </div>

          <div className="header-center-search">
            <SearchBar />
          </div>

          <div className="header-right-cart-login">
            <div className="header-login">
              <Link className="link-login" to={`/login`}>
                Đăng nhập
              </Link>
            </div>
            <div className="header-cart">
              <Link to={`/Cart`} className="link-cart">
                <i class="fa-solid fa-cart-shopping "></i>
              </Link>
            </div>
            <div className="SLCart">{CartCount}</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
