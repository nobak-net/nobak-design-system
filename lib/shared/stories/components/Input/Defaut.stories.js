import { Input } from "../../../components/Input";
import "../../../../../styles/index.css";
function mockFunction(value) {
  // console.log(value);
}
export default {
  component: Input,
  title: 'Data Handle / Input',
  args: {
    type: 'email',
    id: 'email',
    label: 'Email',
    placeholder: 'example@email.com'
  }
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(Input, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};