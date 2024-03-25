import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import FormCheck from "react-bootstrap/FormCheck";
import "./Feedback.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

function CustomService(props) {
  const { onRatingChange, onNextPage, ratings, ratingError } = props;

  function renderStarRating(ratingType, ratingValue) {
    const maxRating = 5; //
    const starIcons = [];

    for (let i = 1; i <= maxRating; i++) {
      const starColor = i <= ratingValue ? "gold" : "grey";
      starIcons.push(
        <FontAwesomeIcon
          icon={faStar}
          key={i}
          className="star"
          style={{ color: starColor }}
          onClick={() => onRatingChange(ratingType, i)}
        />
      );
    }

    return starIcons;
  }

  return (
    <div>
      <h3>Bạn hãy mô tả mức độ hài lòng về tổng thể dịch vụ như thế nào?</h3>
      <Form.Group controlId="serviceRating">
        <Form.Label>Dịch cụ cung cấp:</Form.Label>
        <div className="star-rating">
          {renderStarRating("serviceRating", ratings.serviceRating)}
        </div>
      </Form.Group>

      <Form.Group controlId="productQualityRating">
        <Form.Label>Chất lượng bài học:</Form.Label>
        <div className="star-rating">
          {renderStarRating(
            "productQualityRating",
            ratings.productQualityRating
          )}
        </div>
      </Form.Group>

      <Form.Group controlId="supportRating">
        <Form.Label>Hỗ trợ:</Form.Label>
        <div className="star-rating">
          {renderStarRating("supportRating", ratings.supportRating)}
        </div>
      </Form.Group>

      <Form.Group controlId="generalSatisfactionRating">
        <Form.Label>Sự hài lòng chung:</Form.Label>
        <div className="star-rating">
          {renderStarRating(
            "generalSatisfactionRating",
            ratings.generalSatisfactionRating
          )}
        </div>
      </Form.Group>

      {ratingError && (
        <p style={{ color: "red" }}>Vui lòng đánh giá cho tất cả chúng.</p>
      )}
      <Button className="next" onClick={onNextPage}>
        Tiếp theo
      </Button>
    </div>
  );
}

function Summary(props) {
  const { ratings, feedback, onPrevPage, onSubmit } = props;

  return (
    <div>
      <Container>
        <h3>Tóm tắt</h3>
        <h4>Bạn hãy mô tả mức độ hài lòng về tổng thể dịch vụ như thế nào?</h4>
        <p>Dịch cụ cung cấp: {ratings.serviceRating}</p>
        <p>Chất lượng bài học: {ratings.productQualityRating}</p>
        <p>Hỗ trợ: {ratings.supportRating}</p>
        <p>Sự hài lòng chung: {ratings.generalSatisfactionRating}</p>
        <h5>Trải nghiệm và bình luận về dịch vụ mang lại</h5>
        <p>Trải nghiệm và bình luận: {feedback}</p>
        <Button className="prev" onClick={onPrevPage}>
          Quay lại
        </Button>{" "}
        <Button className="submit" onClick={onSubmit}>
          Tiếp theo
        </Button>
      </Container>
    </div>
  );
}

function ProductFeedback() {
  const [page, setPage] = useState(1);
  const [feedback, setFeedback] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ratings, setRatings] = useState({
    serviceRating: 0,
    productQualityRating: 0,
    supportRating: 0,
    generalSatisfactionRating: 0,
  });
  const [ratingError, setRatingError] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const progress = ((page - 1) / 3) * 100;

  const handleRatingChange = (ratingType, ratingValue) => {
    setRatings({
      ...ratings,
      [ratingType]: ratingValue,
    });
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < 4) {
      if (page === 1) {
        if (
          ratings.serviceRating === 0 ||
          ratings.productQualityRating === 0 ||
          ratings.supportRating === 0 ||
          ratings.generalSatisfactionRating === 0
        ) {
          setRatingError(true);
          return;
        }
      } else if (page === 2) {
        if (feedback.trim() === "") {
          setRatingError(true);
          return;
        }
      } else if (page === 3) {
        if (
          firstName.trim() === "" ||
          lastName.trim() === "" ||
          email.trim() === "" ||
          phoneNumber.trim() === "" ||
          !acceptTerms
        ) {
          setRatingError(true);
          return;
        }
      }

      setRatingError(false);
      setPage(page + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  const handleShowTermsModal = () => {
    setShowTermsModal(true);
  };

  const handleCloseTermsModal = () => {
    setShowTermsModal(false);
  };

  const handleAcceptTermsChange = () => {
    setAcceptTerms(!acceptTerms);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container className="mt-3 text-center">
        <ProgressBar now={progress} variant="success" />
        {page === 1 ? (
          <CustomService
            onRatingChange={handleRatingChange}
            onNextPage={handleNextPage}
            ratings={ratings}
            ratingError={ratingError}
          />
        ) : page === 2 ? (
          <Form onSubmit={handleSubmit} className="text-center">
            <Form.Group controlId="feedback">
              <Form.Label>Trải nghiệm và bình luận về dịch vụ chúng tôi mang lại</Form.Label>
              <Form.Control
                placeholder="Viết về trải nghiệm của bạn tại đây.."
                as="textarea"
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="page2-feedback"
              />
            </Form.Group>
            {ratingError && <p style={{ color: "red" }}>Required</p>}
            <Button className="mt-3 me-3 prev" onClick={handlePrevPage}>
              Quay về
            </Button>{" "}
            <Button className="mt-3 next" onClick={handleNextPage}>
              Tiếp theo
            </Button>
          </Form>
        ) : page === 3 ? (
          <Form onSubmit={handleSubmit} className="page-3">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3 " controlId="lastName">
                      <Form.Label className="custom-container">
                        Họ và tên điệm
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Họ và tên điệm"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        disabled={submitted}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="firstName">
                      <Form.Label className="custom-container">
                        Tên
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Tên"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        disabled={submitted}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label className="custom-container">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="abc@xyz.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  disabled={submitted}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlPhone">
                <Form.Label className="custom-container">Số điện thoại</Form.Label>
                <PhoneInput
                  international
                  defaultCountry="VN"
                  value={phoneNumber}
                  onChange={(value) => setPhoneNumber(value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="acceptTerms">
                <Form.Check
                  type="checkbox"
                  label="Vui lòng đồng ý Các điều khoản và điều kiện của chúng tôi."
                  checked={acceptTerms}
                  onChange={handleAcceptTermsChange}
                />
                {ratingError && !acceptTerms && (
                  <p style={{ color: "red" }}>
                    Vui lòng đồng ý Các điều khoản và điều kiện của chúng tôi.
                  </p>
                )}
              </Form.Group>
              <Button className="prev" onClick={handlePrevPage}>
                Quay về
              </Button>{" "}
              <Button className="next" onClick={handleNextPage}>
                Tiếp theo
              </Button>
              <Button variant="link" onClick={handleShowTermsModal}>
                Xem điều khoản và điều kiện
              </Button>
            </Form>
          </Form>
        ) : page === 4 ? (
          <div className="text-center">
            {loading ? (
              <>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Đang gửi...</span>
                </Spinner>
                <p>Đang đăng...</p>
              </>
            ) : submitted ? (
              <div className="check">
                <FormCheck
                  type="checkbox"
                  checked={true}
                  disabled={true}
                  inline
                />
                <p>Xin cảm ơn đã cho chung tôi nhận xét!</p>
              </div>
            ) : (
              <Summary
                ratings={ratings}
                feedback={feedback}
                onPrevPage={handlePrevPage}
                onSubmit={handleSubmit}
              />
            )}
          </div>
        ) : null}

        <Modal show={showTermsModal} onHide={handleCloseTermsModal}>
          <Modal.Header closeButton>
            <Modal.Title>Xem điều khoản và điều kiện</Modal.Title>
          </Modal.Header>
          <Modal.Body>{/**/}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseTermsModal}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <Footer />
    </motion.div>
  );
}

export default ProductFeedback;
