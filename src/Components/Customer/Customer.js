import React, { Component } from "react";
import Chatbot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import "./Customer.scss";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
class CustomerServiceChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      issue: "",
    };
  }

  handleNameInput = (name) => {
    this.setState({ name });
  };

  handleIssueSelection = (issue) => {
    this.setState({ issue }, () => {
      this.chatbotRef && this.chatbotRef.triggerNextStep();
    });
  };

  render() {
    const steps = [
      {
        id: "Greet",
        message: "Xin chào! Tôi là trợ lí ảo của làng văn thuộc Future.",
        trigger: "waiting1",
      },
      {
        id: "waiting1",
        message:
          "Tôi chắc chắn rằng bạn đang có thắc mắc cần tôi giải quyết. Để có trải nghiệm tốt, hãy trình bày nó cho tôi. Tôi sẽ cố gắng hết sức có thể. Xin cảm ơn đã lựa chọn chúng tôi!",
        trigger: "Ask Name",
      },
      {
        id: "Ask Name",
        message: "Tôi có thể biết tên bạn được không?",
        trigger: "Capture Name",
      },

      {
        id: "Capture Name",
        user: true,
        trigger: "Name",
      },
      {
        id: "Name",
        message: "Chào {previousValue}, Vui lòng chọn vấn đề vướng mắt.",
        trigger: "Issue",
      },
      {
        id: "Issue",
        options: [
          {
            value: "An Item I Ordered",
            label: "Mục yêu thích của tôi",
            trigger: "CheckOrders",
          },
          { value: "Payment", label: "Lịch sử của chúng tôi", trigger: "Payment" },
          {
            value: "Policy returned goods exchange and refund",
            label: "Chính sách bảo mật",
            trigger: "PolicyReturnedGoods",
          },
          {
            value: "Delivery and shipping",
            label: "Trang web bị lỗi",
            trigger: "Deliveryandshipping",
          },
          {
            value: "Warranty policy",
            label: "Diều khoản và điều kiện",
            trigger: "Warrantypolicy",
          },
        ],
      },
      {
        id: "CheckOrders",
        message: `Hãy kiểm tra lại bạn đã thêm bài học yêu thích hay chưa?`,
        trigger: "OrdersExist",
      },
      {
        id: "OrdersExist",
        options: [
          { value: true, label: "Có", trigger: "ItemOrdered" },
          { value: false, label: "Không", trigger: "waiting2" },
        ],
      },
      {
        id: "ItemOrdered",
        message: `Tuyệt vời! Chúc bạn có một trải nghiệm tốt.`,
        trigger: "CaptureOrdered",
      },
      {
        id: "CaptureOrdered",
        user: true,
        trigger: "Ordered",
      },
      {
        id: "Ordered",
        message:
          "Xin chân thành cảm ơn vì sự tin tưởng!",
        trigger: "GoBackToName",
      },
      {
        id: "waiting2",
        message: `Xin lỗi, tôi không thể tìm thấy!`,
        trigger: "GoBackToName",
      },
      {
        id: "Payment",
        message: `Tôi được sinh ra bằng các ngôn ngữ lập trình phức tạp không lâu.`,
        trigger: "waiting3",
      },
      {
        id: "waiting3",
        message: `Người sáng lập ra tôi là bạn Nguyễn Thiện Nhân lớp 10C12 trường THPT Tân TÚc.`,
        trigger: "waiting4",
      },
      {
        id: "waiting4",
        message: `Sự mệnh của tôi mang đến cho bạn trải nghiệm tốt nhất. Xin cảm ơn đã tin tưởng sử dụng!`,
        trigger: "GoBackToName",
      },
      {
        id: "PolicyReturnedGoods",
        message: `Mọi thông tin về bạn cũng như thiết bị của bạn sẽ được bảo mật và không chia sẻ cho bên thứ ba theo quy định của Pháp luật.`,
        trigger: "waiting5",
      },
      {
        id: "waiting5",
        message: `Nhưng chúng tôi có nghĩa vụ tiết lộ cho cơ quan có thẩm quyền nếu phát hiện hành vi vi phạm Pháp luật.`,
        trigger: "waiting6",
      },
      {
        id: "waiting6",
        message: `Xin cảm ơn đã tin tưởng chúng tôi.`,
        trigger: "GoBackToName",
      },
      {
        id: "Deliveryandshipping",
        message: `Nếu phát hiện trang web bị lỗi hãy tải lại trang.`,
        trigger: "waiting7",
      },
      {
        id: "waiting7",
        message: `Nếu sau đó vẫn không được, hãy liên hệ với chúng tôi để được hỗ trợ.`,
        trigger: "waiting8",
      },
      {
        id: "waiting8",
        message: `Rất xin lỗi khách hàng vì các lỗi của trang web. Chúng tôi sẽ cố gắng khắc phục. Xin cảm ơn!`,
        trigger: "GoBackToName",
      },
      {
        id: "Warrantypolicy",
        message: `Xin cảm ơn đã tin tưởng sử dụng dịch vụ.`,
        trigger: "waiting9",
      },
      {
        id: "waiting9",
        message: `Khách hàng sử dụng trang này buộc phải đăng nhập từ tài khoản cấp để tránh bị lỗi.`,
        trigger: "waiting10",
      },
      {
        id: "waiting10",
        message:
          "Trang web đã được cấp chứng chỉ, các hành vi sao chép sẽ vi phạm bản quyền.",
        trigger: "waiting11",
      },
      {
        id: "waiting11",
        message:
          "Chỉ có cá nhân được cấp tài khoản nâng cao mới sử dụng được tính năng quản lí.",
        trigger: "waiting12",
      },
      {
        id: "waiting12",
        message:
          "Nếu có thắc mắc, xin vui lòng liên hệ đẻ được hổ trợ.",
        trigger: "GoBackToName",
      },
      {
        id: "GoBackToName",
        options: [{ value: "GoBack", label: "Quay về", trigger: "Name" }],
      },
    ];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container>
          <Segment floated="left" className="custom-chatbot-container">
            <Chatbot
              className="chatbox"
              steps={steps}
              ref={(ref) => (this.chatbotRef = ref)}
            />
          </Segment>
        </Container>
      </motion.div>
    );
  }
}

export default CustomerServiceChat;
