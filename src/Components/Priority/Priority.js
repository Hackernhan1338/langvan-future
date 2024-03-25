import { Container } from "react-bootstrap";
import "./Priority.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Priority() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <Container fluid="lg">
        <div class="container-fluid mb-5" data-aos="fade-up">
          <div class="text-center mt-5">
            <h1 className="priority-title">XIN CAM KẾT</h1>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="box1" data-aos="zoom-in">
                <div class="our-services settings">
                  <div className="icon">
                    <i class="fa-solid fa-truck-fast"></i>
                  </div>
                  <h3>NHANH CHÓNG</h3>
                  <p>
                    Dịch vụ học tập theo chủ đề thông qu nhiều hoạt động...{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box1" data-aos="zoom-in">
                <div class="our-services speedup">
                  <div className="icon">
                    <i class="fa-solid fa-shield-halved"></i>
                  </div>
                  <h3>AN TOÀN</h3>
                  <p>Được sử dụng công nghệ và chính sách bảo mật hàng đầu...</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box1" data-aos="zoom-in">
                <div class="our-services privacy">
                  <div className="icon">
                    <i class="fa-regular fa-comment-dots"></i>
                  </div>
                  <h3>THUẬN TIỆN</h3>
                  <p>Học mọi nơi, học mọi lúc với nội dung web được cập nhật liên tục...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Priority;
