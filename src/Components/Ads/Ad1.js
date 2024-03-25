import { Container } from "react-bootstrap";
import ads1 from "./img_ads/ads1.png";
import "./Ads1.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Ad1() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <div className="mt-5" data-aos="fade-up">
        <div className="button-ads1" data-aos="fade-left">
          XEM CHI TIẾT <i class="fa-solid fa-arrow-right"></i>
        </div>
        <img className="ads1-img" src={ads1} alt="" />
      </div>
    </Container>
  );
}

export default Ad1;
