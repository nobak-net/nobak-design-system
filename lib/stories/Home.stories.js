import { Frame } from "../components/Frame";
import { Layout } from "../shared/components";
import "../../styles/index.css";
export default {
  component: Frame,
  title: 'Home / Login',
  argTypes: {},
  args: {}
};

//export const Default = (args: any) => <Frame {...args} />;
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: '100%'
    },
    className: "bg-gradient-softpurple"
  }, /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(Frame, args, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '400px'
    }
  }, "Hello"))));
};