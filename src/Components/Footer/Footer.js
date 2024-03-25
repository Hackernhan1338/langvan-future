import "./Footer.scss";
import ScrollToTop from "react-scroll-to-top";
import { Link, NavLink } from "react-router-dom";
import Logo from "./img-Footer/Logo-footer.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);
  return (
    <div className="footer">
      <ScrollToTop smooth top="50" className="scrolling-to-top" />;
      <div className="footer-top" data-aos="fade-down">
        <div className="footer-logo-phone">
          <img className="footer-logo" src={Logo} alt="logo" />
          <div className="footer-phone">
            <i class="fa-solid fa-phone"></i> 097 8043 812
          </div>
        </div>
        <div className="footer-address-email">
          <div className="footer-email">
            <i class="fa-solid fa-envelope"></i> thiennhan1338@gmail.com{" "}
          </div>
          <div className="footer-address">
            <Link
              className="link-footer"
              to="https://maps.app.goo.gl/ZTSgv3fYjS8umRvD7"
            >
              <p>
                <i class="fa-solid fa-location-dot"></i> MHRG+46X, Bùi Thanh Khiết, TT. Tân Túc, Bình Chánh, Thành phố Hồ Chí Minh
              </p>
            </Link>
          </div>
        </div>

        <div className="footer-social">
          <div className="footer-follow">Thông tin:</div>
          <div className="footer-social-icon">
            <Link
              className="link-footer"
              to="https://www.facebook.com/profile.php?id=100049019183749&locale=vi_VN"
            >
              <i class="fa-brands fa-facebook"></i>
            </Link>
            <Link
              className="link-footer"
              to="https://www.tiktok.com/@iamhacker138"
            >
              <i class="fa-brands fa-tiktok"></i>
            </Link>
            <Link
              className="link-footer"
              to="https://www.youtube.com/channel/UCQl2XIvd1Be8l5SycTwR2EA"
            >
              <i class="fa-brands fa-youtube"></i>
            </Link>
          </div>
        </div>
        <div className="footer-about">
          <p className="footer-about-title">Dành cho bạn</p>
          <div>
            <ul>
              <li className="footer-about-list">
                <Link className="footer-about-link" to="/aboutus">
                  Về chúng tôi
                </Link>
              </li>
              <li className="footer-about-list">
                <Link className="footer-about-link" to="/contact">
                  Liên hệ
                </Link>
              </li>
              <li className="footer-about-list">
                <Link className="footer-about-link" to="/products">
                  Bài học
                </Link>
              </li>
              <li className="footer-about-list">
                <Link className="footer-about-link">chính sách bản quyền</Link>
              </li>
              <li className="footer-about-list">
                <Link className="footer-about-link">Điều kiện và điều khoản</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-customer">
          <p className="footer-customer-title">Khách hàng</p>
          <div>
            <ul>
              <li className="footer-customer-list">
                <Link className="footer-customer-link">Tài khoản của bạn</Link>
              </li>
              <li className="footer-customer-list">
                <Link className="footer-customer-link">Yêu cầu</Link>
              </li>
              <li className="footer-customer-list">
                <Link className="footer-customer-link" to="/Cart">
                  Mục yêu thích
                </Link>
              </li>
              <li className="footer-customer-list">
                <Link to="/customer" className="footer-customer-link">
                  Dịch vụ khách hàng
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-final">
        <div className="text-hr">
          <hr />
        </div>
        <p className="footer-final-text">
          &copy; Làng văn 2024. Bản quyền thuộc IAOA - Future.
        </p>
      </div>
    </div>
  );
}

export default Footer;
