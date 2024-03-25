import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Company from "./img-aboutus/thayTruc.jpg";
import CEO from "./img-aboutus/coNhi.jpg";
import "./AboutUs.scss";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);
  return (
    <motion.div
      className="aboutus"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container fluid="lg">
        <div className="aboutus-content">
          <div className="aboutus-title" data-aos="fade-right">
            <h1>Người Lính đảo và sân khấu đặc biệt của "Lính đảo hát tình ca trên đảo".</h1>
          </div>
          <div className="aboutus-company" data-aos="fade-up">
            <p className="aboutus-company-infor">
            Thầy Thanh Trực: 
            Phương châm sống " Hạnh phúc luôn được xây dựng từ những mảnh ghép nhỏ nhặt nhất" 
            Hết mình với sự nghiệp trồng người 
            Lạc quan, yêu đời, luôn mang đến năng lượng tích cực cho mọi người. 
            </p>
            <div className="aboutus-img-company" data-aos="zoom-in">
              <img className="img-company" src={Company} alt="company" />
            </div>
          </div>
          <div className="aboutus-fouder" data-aos="fade-up">
            <div className="aboutus-img-ceo" data-aos="fade-right">
              <img className="img-ceo" src={CEO} alt="ceo" />
            </div>
            <p className="aboutus-ceo-infor">
            Cô Yến Nhi: 
            Phương châm sống "Sống lâu không bằng sống sâu" 
            Luôn hết mình với sự nghiệp trồng người 
            Gieo những "hạt mầm tử tế" và nuôi dưỡng "những chồi non hy vọng" cho đời.
            </p>
          </div>
          </div>
      </Container>
      <div>
        <Footer />
      </div>
    </motion.div>
  );
}

export default AboutUs;
