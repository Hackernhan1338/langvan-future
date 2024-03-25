import { Col, Container, Row } from "react-bootstrap";
import Product from "../Data.json";
import "./Cart.scss";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import Quantity from "./Quantity";
import CartContext from "../Context/CartContext";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Cart({ CartData }) {
  const { cart, HandleQuantity, ProQuantity, setProQuantity } = useContext(
    CartContext
  );
  const [Data, setData] = useState(cart);
  const [CartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    Data.forEach((x) => {
      total += x.Data.Price * x.quantity;
    });
    setCartTotal(total.toFixed(2));
  });

  const HandleDelete = (Id) => {
    const NewCart = Data.filter((x) => x.Data.ID !== Id);
    setData(NewCart);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container className="mt-5">
        <table id="customers">
          <tr>
            <th className="text-center">Tên</th>
            <th className="text-center">Giá</th>
            <th className="text-center">Số lượng</th>
            <th className="text-center">Thành tiền</th>
          </tr>
          {Data.map((item, index) => (
            <tr>
              <td key={index}>{item.Data.Name}</td>
              <td key={index} className="text-center">
                ${item.Data.Price}
              </td>
              <td key={index} className="text-center">
                <Quantity
                  cart={cart}
                  quantity={ProQuantity}
                  setQuantity={setProQuantity}
                  MainCart={true}
                  HandleQuantity={HandleQuantity}
                  Id={item.Data.ID}
                />
              </td>
              <td key={index} className="text-center">
                ${item.Data.Price * item.quantity}
              </td>
              <div key={index}>
                <Button
                  variant="danger"
                  className="ms-2 mt-2"
                  onClick={() => {
                    HandleDelete(item.Data.ID);
                  }}
                >
                  <i class="fa-solid fa-trash-can"></i>
                </Button>
              </div>
            </tr>
          ))}
        </table>
        <div className="cart-total-pay">
          <p className="cart-total">Total (USD): ${CartTotal}</p>
          <Button onClick={handleShow} className="cart-pay">
            Thanh toán
          </Button>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose} centered className="modal-cart">
        <Modal.Body>
          <div>
            <h4 className="text-center content-modal">
              Cảm ơn đã sử dụng dịch vụ
              <span className="icon-sucess">
                <i class="fa-regular fa-circle-check"></i>
              </span>
            </h4>
          </div>
          {/* <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
