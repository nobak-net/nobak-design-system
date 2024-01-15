import { Cartel } from "../../components/Cartel";
import { Button } from "../../components/Button";
import "../../../../styles/index.css";
export default {
  component: Cartel,
  title: 'Components / Cartel',
  argTypes: {
    message: {
      type: {
        summary: 'object'
      },
      defaultValue: {
        title: 'Profile',
        description: 'Start your crypto career faster than you can imagine, with this incredible tools'
      }
    },
    CTA: {
      defaultValue: /*#__PURE__*/React.createElement(Button, {
        text: "Continue"
      })
    }
  }
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(Cartel, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OG2qkuEFEhNmf2wTA0wAGq/Design-System?node-id=612%3A4832'
  }
};