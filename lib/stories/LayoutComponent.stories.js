import { Dropdown } from "../shared/components/Dropdown";
import { CardComponent } from "../components/CardComponent";
import "../../styles/index.css";
import { LayoutComponent } from "../components/LayoutComponent";
import { Button } from "../shared";
var items = [{
  text: 'Edit',
  type: 'button'
}, {
  text: 'Duplicate',
  type: 'button'
}];
export default {
  component: LayoutComponent,
  title: 'Composables / LayoutComponent',
  argTypes: {},
  args: {
    title: "Title"
  }
};
var FragmentButton = function FragmentButton() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    text: "Join",
    size: "medium"
  }));
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(LayoutComponent, {
    title: "Hola soy un titulo",
    variant: "complex",
    component: FragmentButton
  }, /*#__PURE__*/React.createElement("div", null, "\"Hola soy un contenido\""));
};
var FragmentDropdown = function FragmentDropdown() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Dropdown, {
    items: items,
    button: {
      icon: 'User'
    }
  }));
};
export var Default3 = function Default3(args) {
  return /*#__PURE__*/React.createElement(LayoutComponent, {
    title: "Hola soy un titulo",
    variant: "complex",
    component: FragmentDropdown,
    gridComponents: [{
      component: CardComponent,
      options: {
        title: "User1"
      }
    }, {
      component: CardComponent,
      options: {
        title: "User2"
      }
    }]
  });
};