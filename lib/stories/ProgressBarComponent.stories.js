import "../../styles/index.css";
import { ProgressBarComponent } from "../components/ProgressBarComponent";
export default {
  component: ProgressBarComponent,
  title: 'Composables / ProgressBarComponent',
  argTypes: {},
  args: {
    title: "Title"
  }
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(ProgressBarComponent, {
    max: 3,
    value: 1
  });
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/'
  }
};