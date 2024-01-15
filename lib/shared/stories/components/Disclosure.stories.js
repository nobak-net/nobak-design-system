import { Disclosure } from "../../components/Disclosure";
import "../../../../styles/index.css";
var items = [{
  title: 'About us',
  text: 'We are ...'
}, {
  title: 'How we work',
  text: 'Learn more ...'
}];
export default {
  component: Disclosure,
  title: 'Components / Disclosure',
  argsTypes: {
    items: {
      control: 'array'
    }
  },
  args: {
    items: items
  }
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(Disclosure, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};