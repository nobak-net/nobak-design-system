import "../../styles/index.css";
import { TipsComponent } from "../components/TipsComponent";
export default {
  component: TipsComponent,
  title: 'Composables / TipsComponent',
  argTypes: {},
  args: {
    tips: [{
      name: 'Esto es un tip',
      description: 'Tip 1!'
    }, {
      name: 'Esto es otro tip',
      description: 'Tip 2!'
    }, {
      name: 'Esto es otro tip',
      description: 'Tip 3!'
    }]
  }
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(TipsComponent, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/'
  }
};