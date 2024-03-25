import { NavDropdown } from "react-bootstrap";

import Category from "./Category.json";
import "./MainCategory.scss";

function MainCategory() {
  return (
    <div>
      <NavDropdown title="Category" id="basic-nav-dropdown">
        {Category.map((item, index) => (
          <NavDropdown.Item href={`/Category/${item.Id}`} key={index}>
            {item.Name}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </div>
  );
}

export default MainCategory;
