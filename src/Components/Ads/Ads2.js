import { Container } from "react-bootstrap";
import ads2 from "./img_ads/ads2.jpg";
import "./Ads2.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Ad2() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <div className="mt-5" data-aos="fade-up">
        <div className="button-ads2" data-aos="fade-right">
          XEM CHI TIẾT <i class="fa-solid fa-arrow-right"></i>
        </div>
        <img className="ads2-img" src={ads2} alt="" />
      </div>
    </Container>
  );
}

export default Ad2;
