import "./Slideshow.scss";
import slide1 from "./imageSlideShow/Slide3.3.png";
import slide2 from "./imageSlideShow/Slide2.1.jpg";
import slide3 from "./imageSlideShow/Slide1.1.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Slideshow() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="slideshow" data-aos="fade-up">
      <Carousel>
        <Carousel.Item>
          <img className="slideshow-img" src={slide1} alt="slide1" />
          <Carousel.Caption>
            <div className="slideshow-content">
              <div className="slideshow-slogan">
                <p className="slogan1"></p>
                <p className="slogan2"></p>
              </div>
              <Button className="slideshow-details1">
                XEM CHI TIẾT <i class="fa-solid fa-arrow-right"></i>
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slideshow-img" src={slide2} alt="slide2" />
          <Carousel.Caption className="start-5 end-100">
            <Button className="slideshow-details2 ">
              CHI TIẾT TẠI ĐÂY <i class="fa-solid fa-arrow-right"></i>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slideshow-img" src={slide3} alt="slide3" />
          <Carousel.Caption className="start-5 end-100">
            <Button className="slideshow-details3 ">
              NHIỀU HƠN THẾ <i class="fa-solid fa-arrow-right"></i>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slideshow;
