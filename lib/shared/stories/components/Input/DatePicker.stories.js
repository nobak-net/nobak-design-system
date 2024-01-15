import { Input } from "../../../components/Input";
import "../../../../../styles/index.css";
function mockFunction(value) {
  // console.log(value);
}
export default {
  component: Input,
  title: 'Data Handle / Input',
  args: {
    type: 'datepicker',
    id: 'datepicker',
    label: 'Date Picker'
  }
};
export var DatePicker = function DatePicker(args) {
  return /*#__PURE__*/React.createElement(Input, args);
};
DatePicker.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};