import { Input } from "../../../components/Input";
import "../../../../../styles/index.css";
function mockFunction(value) {
  // console.log(value);
}
export default {
  component: Input,
  title: 'Data Handle / Input',
  args: {
    type: 'checkbox',
    id: 'recurrence',
    label: 'Set Recurrence',
    options: [{
      name: 'SUN',
      value: '0'
    }, {
      name: 'MON',
      value: '1'
    }, {
      name: 'TUE',
      value: '2'
    }, {
      name: 'WEN',
      value: '3'
    }, {
      name: 'THU',
      value: '4'
    }, {
      name: 'FRI',
      value: '5'
    }, {
      name: 'SAT',
      value: '6'
    }]
  }
};
export var Checkbox = function Checkbox(args) {
  return /*#__PURE__*/React.createElement(Input, args);
};
Checkbox.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};