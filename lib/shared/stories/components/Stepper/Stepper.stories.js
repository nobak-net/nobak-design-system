import { Stepper, RadioGroup } from "../../../components";
import "../../../../../styles/index.css";
var options = [{
  name: 'Startup',
  ram: '12GB',
  cpus: '6 CPUs',
  disk: '160 GB SSD disk'
}, {
  name: 'Business',
  ram: '16GB',
  cpus: '8 CPUs',
  disk: '512 GB SSD disk'
}, {
  name: 'Enterprise',
  ram: '32GB',
  cpus: '12 CPUs',
  disk: '1024 GB SSD disk'
}];
var steps = [{
  component: RadioGroup,
  options: options
}];
export default {
  component: Stepper,
  title: 'Lab / Stepper'
};
export var Radio = function Radio() {
  return /*#__PURE__*/React.createElement(Stepper, {
    steps: steps,
    type: "radio"
  });
};
Radio.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};