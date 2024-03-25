import { Col, Row, Container, CardImg } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FilterGallery.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function FilterGallery({ Filterproduct }) {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);
  return (
    <Container>
      {Filterproduct.map((item, index) => (
        <Row>
          <Col xs={12} sm={9} md={9} lg={4} key={index}>
            <Card
              className="mt-3 mb-3 shadow text-center card-gallery"
              data-aos="fade-up"
            >
              <img
                variant="left"
                src={item.Img1}
                alt={item.Name}
                className="Img-gallery"
                data-aos="zoom-in"
              />
              <Card.Body>
                <Card.Title>{item.Name}</Card.Title>
                <Card.Text className="gallery-card-price">
                  ${item.Price}
                </Card.Text>
                <Link to={`/ShowProduct/${item.ID}`}>
                  <Button variant="primary" className="gallery-item-filter ">
                    Detail ...
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={9} md={9} lg={4} key={index}>
            <Card
              className="mt-3 mb-3 shadow text-center card-gallery"
              data-aos="fade-up"
            >
              <img
                variant="left"
                src={item.Img2}
                alt={item.Name}
                className="Img-gallery"
                data-aos="zoom-in"
              />
              <Card.Body>
                <Card.Title>{item.Name}</Card.Title>
                <Card.Text className="gallery-card-price">
                  ${item.Price}
                </Card.Text>
                <Link to={`/ShowProduct/${item.ID}`}>
                  <Button variant="primary" className="gallery-item-filter ">
                    Detail ...
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={9} md={9} lg={4} key={index}>
            <Card
              className="mt-3 mb-3 shadow text-center card-gallery"
              data-aos="fade-up"
            >
              <img
                variant="left"
                src={item.Img3}
                alt={item.Name}
                className="Img-gallery"
                data-aos="zoom-in"
              />
              <Card.Body>
                <Card.Title>{item.Name}</Card.Title>
                <Card.Text className="gallery-card-price">
                  ${item.Price}
                </Card.Text>
                <Link to={`/ShowProduct/${item.ID}`}>
                  <Button variant="primary" className="gallery-item-filter ">
                    Detail ...
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default FilterGallery;
