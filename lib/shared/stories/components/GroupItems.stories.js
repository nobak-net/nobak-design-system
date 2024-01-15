import { GroupItems } from "../../components/GroupItems";
import "../../../../styles/index.css";
export default {
  component: GroupItems,
  title: 'Composes / GroupItems',
  argTypes: {
    items: {
      type: {
        summary: 'array'
      },
      defaultValue: [['cogwheel', 'a Description'], ['cogwheel', 'another Description'], ['cogwheel', 'other Description']]
    }
  }
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(GroupItems, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OG2qkuEFEhNmf2wTA0wAGq/Design-System?node-id=754%3A6702'
  }
};