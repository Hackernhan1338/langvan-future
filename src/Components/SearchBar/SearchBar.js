import Data from "../Data.json";
import "./SearchBar.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function SearchBar({ placeholder, data }) {
  const [filterData, setFilterData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = Data.filter((items) => {
      return items.Name1.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  return (
    <div className="search">
      <div className="searchInputs search-bar">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
          className="text-box"
        />
        <div className="search-icon search-btn">
          <p>
            <i class="fa-solid fa-magnifying-glass"></i>
          </p>
        </div>
      </div>
      {filterData.length != 0 && (
        <div className="DataResult">
          {filterData.slice(0, 15).map((items, key) => {
            return (
              <NavLink
                className="dataItem"
                to={`/ShowProduct/${items.ID}`}
                target="_blank"
              >
                <div className="search-bar-results">
                  <p className="dataItem-text">{items.Name1}</p>
                  <hr />
                </div>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
