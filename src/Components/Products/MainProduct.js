import Products from "../Data.json";
import { useEffect, useState } from "react";
import ShowProduct from "./ShowProduct";
import { Col, Row, Container, Alert, CardImg } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MainPagination from "../Pagination/Pagination";
import _ from "lodash";
import "./MainProducts.scss";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MainProduct({ Add }) {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);

  const notify = () =>
    toast.success("Bài học được thêm vào mục yêu thích thành công!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  let RandomProduct = [];
  let RandomNumber = [];
  //const [PageData,setPageData] = useState();
  const ProPerPage = 8;
  const [Page, setPage] = useState(1);
  const cut = Page * ProPerPage;
  const PageCount = Math.ceil(Products.length / ProPerPage);

  for (let a = 1; a < 61; a++) {
    RandomNumber.push(a);
  }
  console.log(RandomNumber);
  for (let b = RandomNumber.length - 1; b > 1; b--) {
    let R = Math.floor(Math.random() * b);
    let x = RandomNumber[b];
    RandomNumber[b] = RandomNumber[R];
    RandomNumber[R] = x;
  }

  for (let i = 0; i < Products.length; i++) {
    let ShowProduct = Products.filter((x) => x.ID === RandomNumber[i]);
    RandomProduct = RandomProduct.concat(ShowProduct);
  }

  const [SortData, setSortData] = useState(RandomProduct);

  function HandlePage({ selected: select }) {
    setPage(select);
  }

  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  const HandleSort = (x) => {
    const { name, value } = x.target;
    setSort((chose) => ({ ...chose, [name]: value }));
  };

  useEffect(() => {
    if (sort.by !== "default") {
      const Sorted = _.orderBy(RandomProduct, [sort.by], [sort.order]);
      setSortData(Sorted);
      console.log("Sort", SortData);
    }
  }, [sort]);

  const PageData = SortData.slice(cut, cut + ProPerPage);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Row className="mt-3 text-center" data-aos="fade-right">
          <h1 className="fw-bold all-products-side">TẤT CẢ BÀI HỌC</h1>
        </Row>
        <div>
          <select
            name="by"
            id=""
            className="Sort"
            onChange={HandleSort}
            value={sort.by}
            data-aos="fade-left"
          >
            <option value="default">Lọc theo</option>
            <option value="Price">Giá cả</option>
            <option value="Name">Tên bài học</option>
          </select>
          <select
            name="order"
            id=""
            className="Sort"
            onChange={HandleSort}
            value={sort.order}
            data-aos="fade-left"
          >
            <option value="asc">Tăng dần</option>
            <option value="desc">Giảm dần</option>
          </select>
          <Container>
            <Row>
              {PageData.map((items, index) => (
                <Col xs={12} sm={6} md={6} lg={3} key={index}>
                  <Card
                    className="mt-3 mb-3 card-all-products"
                    data-aos="fade-up"
                  >
                    <NavLink
                      to={`/ShowProduct/${items.ID}`}
                      className=" detail-link-card"
                    >
                      <Card.Img
                        variant="top"
                        src={items.Img1}
                        alt={items.Name}
                        className="img-card-rpoducts"
                        data-aos="zoom-in"
                      />
                    </NavLink>

                    <Card.Body className="content-card-products">
                      <NavLink
                        to={`/ShowProduct/${items.ID}`}
                        className=" detail-link-card"
                      >
                        <Card.Title className="title-card-products">
                          {items.Name1}
                        </Card.Title>

                        <Card.Text className="price-card-products">
                          ${items.Price}
                        </Card.Text>
                        <Card.Text className="star-card-products">
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-sharp fa-solid fa-star"></i>
                          <i class="fa-solid fa-star-half-stroke"></i>
                        </Card.Text>
                      </NavLink>

                      <Button
                        className="add-products"
                        onClick={() => {
                          notify(Add(items, 1));
                        }}
                      >
                        YÊU THÍCH
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}

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
            </Row>
          </Container>
          <Row>
            <MainPagination PageCount={PageCount} HandlePage={HandlePage} />
          </Row>
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
}

export default MainProduct;
