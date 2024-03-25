import "./ContactUs.scss";

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Card } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ContactUs() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      setErrorMessage("Vui lòng nhập tên của bạn");
    } else {
      setIsSubmitting(true);

      setTimeout(() => {
        setSuccessMessage(
          "Tin nhắn của bạn đã được gửi về hệ thống. Chúng tôi sẽ liên lạc sau!"
        );
        setErrorMessage("");
        setIsSubmitting(false);
      }, 2000);

      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setPhoneNumber("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container fluid="md" className="text-center">
        <Row className="text-center mt-5 " data-aos="fade-right">
          <h2 className="fw-bold">Hãy tin nhắn cho chúng tôi khi bạn cần!</h2>
        </Row>
        <Row className="mt-5 mb-4">
          <Col xs={12} md={6} data-aos="fade-up">
            <Card className="custom-frame">
              <Form onSubmit={handleSubmit} data-aos="zoom-in">
                <Row>
                  <Col md={6}>
                    <Form.Group
                      className="mb-3 contactus-group"
                      controlId="lastName"
                    >
                      <Form.Label className="custom-container">
                        Tên cuối
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhi"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        disabled={isSubmitting}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      className="mb-3 contactus-group"
                      controlId="firstName"
                    >
                      <Form.Label className="custom-container">
                        Họ và tên điệm
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Huỳnh Thị Yến"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        disabled={isSubmitting}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3 contactus-group"
                      controlId="exampleForm.ControlInput2"
                    >
                      <Form.Label className="custom-container">
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="abc@xyz.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        disabled={isSubmitting}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3 contactus-group"
                      controlId="exampleForm.ControlPhone"
                    >
                      <Form.Label className="custom-container">
                        Số điện thoại
                      </Form.Label>
                      <PhoneInput
                        international
                        defaultCountry="VN"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        disabled={isSubmitting}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3 contactus-group"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="text-left">Tin nhắn</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Vui lòng diền tin nhắn tại đây!"
                        rows={3}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        disabled={isSubmitting}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {isSubmitting ? (
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Đang gửi...</span>
                      </Spinner>
                    ) : (
                      <Button type="submit">Gửi</Button>
                    )}
                  </Col>
                </Row>
                {errorMessage && (
                  <Row>
                    <Col>
                      <p className="text-danger">{errorMessage}</p>
                    </Col>
                  </Row>
                )}
                {successMessage && (
                  <Row>
                    <Col>
                      <p className="text-success">{successMessage}</p>
                    </Col>
                  </Row>
                )}
              </Form>
            </Card>
          </Col>
          <Col xs={12} md={6} data-aos="fade-up">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1960.2855158309133!2d106.57468704095642!3d10.690366632951875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175328b80a6b185%3A0x48552a18175f6639!2zVHLGsOG7nW5nIFRIUFQgVMOibiBUw7pj!5e0!3m2!1svi!2s!4v1711180363295!5m2!1svi!2s"
              width="100%"
              height="560"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
              frameBorder="0"
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Footer />
    </motion.div>
  );
}

export default ContactUs;
