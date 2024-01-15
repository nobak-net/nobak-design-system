import { Frame } from "../components/Frame";
import { Layout } from "../shared/components";
import "../../styles/index.css";
export default {
  component: Frame,
  title: 'Components / Frame',
  argTypes: {},
  args: {}
};
var Sidebar = function Sidebar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '400px'
    }
  }, "Hello Sidebar");
};

//export const Default = (args: any) => <Frame {...args} />;
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: '100%'
    },
    className: "bg-gradient-softpurple"
  }, /*#__PURE__*/React.createElement(Layout, {
    variant: "full"
  }, /*#__PURE__*/React.createElement(Frame, {
    variant: "sidebar",
    sidebar: /*#__PURE__*/React.createElement(Sidebar, null)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '400px'
    }
  }, "Hello"))));
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/'
  }
};