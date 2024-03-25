import { NavLink, useParams } from "react-router-dom";
import Product from "../Data.json";
import { Row, Col, Container, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Product.scss";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import Quantity from "../Cart/Quantity";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Carousel from "react-bootstrap/Carousel";

function ShowProduct({ Add, ProductCart }) {
  const notify = () =>
    toast.success("Product successfully added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const { id } = useParams();
  let Detail = Product.filter((x) => x.ID == id);
  Detail = Detail[0];
  const {
    cart,
    HandleCart,
    HandleQuantity,
    ProQuantity,
    setProQuantity,
  } = useContext(CartContext);
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <div>
      <Container fluid="md">
        <div className="Title text-center fw-bold">{Detail.Name}</div>
        <main>
          <Row>
            <Col xs={12} sm={9} md={9} lg={7}>
              <Carousel>
                <Carousel.Item>
                  <div className="text-center">
                    <img
                      className="slideshow-img-details"
                      src={Detail.Img1}
                      alt={Detail.Name}
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img
                      className="slideshow-img-details"
                      src={Detail.Img2}
                      alt={Detail.Name}
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="text-center">
                    <img
                      className="slideshow-img-details"
                      src={Detail.Img3}
                      alt={Detail.Name}
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col className="MainProduct">
              <div className="MainProducts-content">
                <Row className="Desc">{Detail.Description}</Row>
                <Row className="Price1">${Detail.Price}</Row>

                <Card.Text className="star-card-products">
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </Card.Text>
                <div className="button-add-cart">
                  <Button
                    className="buttonAdd text-center"
                    onClick={() => notify(HandleCart(Detail, 1))}
                  >
                    YÊU THÍCH
                  </Button>
                </div>
              </div>
            </Col>
            <Row>
              <Tabs
                defaultActiveKey="Spec"
                id="justify-tab-example"
                className="mb-3 "
                justify
              >
                <Tab
                  eventKey="Spec"
                  title="Specification"
                  className="Spec"
                  tabClassName="tab-details-products"
                >
                  <Row>
                    {/* <Row>Brand : {Detail.Spec.Brand}{Detail.Spec.Brand}</Row>
                      <Row>Color : {Detail.Spec.Color}</Row>
                      <Row>Category : {Detail.Spec.Efd.Name}</Row>
                      <Row>Style : {Detail.Spec.Style}</Row>
                      <Row>Power Source : {Detail.Spec.Power}</Row> */}
                    <table className="table-spec1 text-center">
                      <tr>
                        <td>{Detail.Spec.Brand}</td>
                      </tr>
                    </table>

                    {/* <Row>Product Dimensions : {Detail.Spec.Dimension}</Row>
                    <Row>Room Type : {Detail.Spec.Room}</Row>
                    <Row>Special Feature : {Detail.Spec.Feature}</Row>
                    <Row>
                      Recommended Uses For Product :{Detail.Spec.Recommend}
                    </Row> */}
                  </Row>
                </Tab>
                <Tab
                  eventKey="Type"
                  title="Type"
                  className="Type"
                  tabClassName="tab-details-products"
                >
                  {/* <Row>Mounting Type : {Detail.Spec.Type.Mounting}</Row>
                  <Row>Controller Type : {Detail.Spec.Type.Controller}</Row>
                  <Row>Number of Speeds : {Detail.Spec.Type.Speeds}</Row>
                  <Row>Number of Blades : {Detail.Spec.Type.Blades}</Row>
                  <Row>Material : {Detail.Spec.Type.Material}</Row> */}
                  <table className="table-spec1">
                    <tr>
                      <td>{Detail.Spec.Feature}</td>
                    </tr>
                  </table>
                </Tab>
                <Tab
                  eventKey="download"
                  title="Download"
                  tabClassName="tab-details-products"
                >
                  <div className="text-center">
                    <Button
                      href={Detail.File}
                      className="text-center table-spec"
                    >
                      Tải về
                    </Button>
                  </div>
                </Tab>
              </Tabs>
            </Row>
          </Row>
          {/* <Button className="buttonAdd" onClick={() => Add(Detail)}>
            Add to Cart
          </Button> */}
        </main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Container>
      <Footer />
    </div>
  );
}

export default ShowProduct;
