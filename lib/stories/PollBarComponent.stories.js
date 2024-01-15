import "../../styles/index.css";
import { PollBarComponent } from "../components/PollBarComponent";
export default {
  component: PollBarComponent,
  title: 'Composables / PollBarComponent',
  argTypes: {},
  args: {
    values: {
      yes: 65.315,
      no: 20.500,
      abstain: 14.183
    }
  }
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(PollBarComponent, {
    values: args.values
  });
};