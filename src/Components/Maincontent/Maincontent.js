import { Container } from "react-bootstrap";
import BestSeller from "../BestSeller/BestSeller";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Priority from "../Priority/Priority";
import TopBrands from "../TopBrands/TopBrands";
import "./Maincontent.scss";
import Ad1 from "../Ads/Ad1";
import Ad2 from "../Ads/Ads2";

function Maincontent({ Add }) {
  return (
    <div>
      <Container fluid>
        <BestSeller Add={Add} />
        <Ad2 />
        <FeaturedProducts Add={Add} />
        <Ad1 />
        <Priority />
        <TopBrands />
      </Container>
    </div>
  );
}

export default Maincontent;
