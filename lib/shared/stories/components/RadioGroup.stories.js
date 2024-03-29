import { RadioGroup } from "../../components/RadioGroup";
import "../../../../styles/index.css";
var options = [{
  name: 'Startup',
  icon: 'user',
  disabled: false
}, {
  name: 'Business',
  icon: 'user',
  disabled: false
}, {
  name: 'Enterprise',
  icon: 'user',
  disabled: false
}];
var verticalOptions = [{
  name: 'Startup',
  image_url: 'https://images.unsplash.com/photo-1591343395902-1adcb454c4e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
  disabled: false
}, {
  name: 'Business',
  image_url: 'https://images.unsplash.com/photo-1593697972422-9d9cb386afd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
  disabled: false
}, {
  name: 'Enterprise',
  image_url: 'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  disabled: true
}];
export default {
  component: RadioGroup,
  title: 'Data Handle / RadioGroup'
};
export var Default = function Default() {
  return /*#__PURE__*/React.createElement(RadioGroup, {
    options: options,
    variant: "horizontal"
  });
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};
export var Vertical = function Vertical() {
  return /*#__PURE__*/React.createElement(RadioGroup, {
    options: verticalOptions,
    variant: "vertical"
  });
};
Vertical.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};