import Button from "react-bootstrap/Button";
import "../Products/Product.css";

function ShowGallery({ Selection, Selectitem }) {
  return (
    <div>
      {Selection.map((item, index) => (
        <Button
          className="button gallery-item-filter"
          variant="info"
          key={index}
          onClick={() => Selectitem(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}

export default ShowGallery;
