import { Badge } from "../../components/Badge";
import "../../../../styles/index.css";
export default {
  component: Badge,
  title: 'Development / Badge',
  argTypes: {
    title: {
      type: {
        summary: 'string'
      },
      defaultValue: 'Badge'
    },
    size: {
      type: {
        summary: 'string'
      },
      defaultValue: 'small'
    },
    variant: {
      type: {
        summary: 'string'
      },
      defaultValue: 'indigo'
    }
  }
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};