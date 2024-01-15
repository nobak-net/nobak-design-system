import { Input } from "../../../components/Input";
import "../../../../../styles/index.css";
function mockFunction(value) {
  // console.log(value);
}
export default {
  component: Input,
  title: 'Data Handle / Input',
  args: {
    type: 'radiobox',
    id: 'email',
    label: 'Email',
    variant: 'full',
    options: [{
      value: '1',
      name: 'desc'
    }]
  }
};
export var Radiobox = function Radiobox(args) {
  return /*#__PURE__*/React.createElement(Input, args);
};
Radiobox.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};