import { Header } from "../../components/Header";
import "../../../../styles/index.css";
export default {
  component: Header,
  title: 'Components / Header',
  args: {
    section: {
      title: 'Header'
    }
  },
  argTypes: {
    section: {
      title: {
        type: {
          summary: 'string'
        }
      }
    }
  }
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(Header, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};