import { QRCode } from "../../components/QRCode";
import "../../../../styles/index.css";
export default {
  component: QRCode,
  title: 'Development / QRCode'
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(QRCode, {
    value: "wc:be14377f91398ee49b3fceb9425527bb20086a3f7aa277831c1bc1fd35358c51@2?relay-protocol=irn&symKey=776adc40e2fed9d4e8d38b77b3c8e337dc8faa1778217b90b94270a21ca8e893"
  });
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=971%3A68'
  }
};