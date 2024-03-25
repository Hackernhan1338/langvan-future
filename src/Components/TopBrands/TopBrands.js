import { Container } from "react-bootstrap";
import "./TopBrands.scss";
import amazon from "./img-topbrands/model.jpg";
import dreo from "./img-topbrands/info.png";
import lasko from "./img-topbrands/learn1.jpg";
import levoit from "./img-topbrands/learn2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function TopBrands() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);
  return (
    <div>
      <Container fluid="lg" data-aos="fade-up">
        <div class="container-fluid mb-5">
          <div class="text-center mt-5 mb-5">
            <h1 className="topbrands-title">HOẠT ĐỘNG</h1>
          </div>
          <div className="row topbar-logo">
            <div className="col col-md-3">
              <img className="topbrands-img" src={amazon} alt="mô hình" />
            </div>
            <div className="col col-md-3">
              <img className="topbrands-img" src={dreo} alt="infographic" />
            </div>
            <div className="col col-md-3">
              <img className="topbrands-img" src={lasko} alt="bài học 1" />
            </div>
            <div className="col col-md-3">
              <img className="topbrands-img" src={levoit} alt="bài học 2" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopBrands;
