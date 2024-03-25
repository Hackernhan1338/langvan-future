import { useState } from "react";
import Product from "../Data.json";
import { Container, Row, Col } from "react-bootstrap";
import FilterGallery from "./FilterGallery";
import ShowGallery from "./ShowGallery";
//import GalleryPagination from "./Pagination";
import MainPagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const AllSelect = [
  "All",
  ...new Set(Product.map((item) => item.Spec.Efd.Name)),
];

function MainGallery() {
  const [galleryitem, setGalleryitem] = useState(Product);
  const [Selection, setSelection] = useState(AllSelect);

  function handlefilter(select) {
    if (select === "All") {
      setGalleryitem(Product);
      return;
    }
    const GalleryProduct = Product.filter(
      (item) => item.Spec.Efd.Name === select
    );
    setGalleryitem(GalleryProduct);
  }

  const ProPerPage = 2;
  const [Page, setPage] = useState(1);
  function HandlePage({ selected: select }) {
    setPage(select);
  }

  const cut = Page * ProPerPage;
  const PageData = galleryitem.slice(cut, cut + ProPerPage);

  const PageCount = Math.ceil(galleryitem.length / ProPerPage);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container className="mt-5 text-center">
        <Row>
          <Col>
            <ShowGallery Selection={Selection} Selectitem={handlefilter} />
          </Col>
        </Row>
        <Row>
          <Col>
            <FilterGallery Filterproduct={PageData} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MainPagination PageCount={PageCount} HandlePage={HandlePage} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </motion.div>
  );
}

export default MainGallery;
