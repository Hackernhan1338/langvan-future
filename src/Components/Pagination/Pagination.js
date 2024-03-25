import Pagination from "react-bootstrap/Pagination";
import ReactPaginate from "react-paginate";
import "./Pagination .scss";

function MainPagination({ PageCount, HandlePage }) {
  return (
    <div>
      <ReactPaginate
        containerClassName="Pagination"
        activeClassName="Pagi-active"
        activeLinkClassName="pagi-active-link"
        breakLabel="..."
        breakClassName="break-class-pagi"
        nextLabel="Next >"
        nextClassName="Next-pagi"
        nextLinkClassName="Next-content"
        pageLinkClassName="pagi-link"
        onPageChange={HandlePage}
        pageRangeDisplayed={4}
        pageCount={PageCount}
        previousLabel="< Previous"
        previousLinkClassName="Pre-content"
        previousClassName="Pre-pagi"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default MainPagination;
