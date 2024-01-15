import { ClaimKey } from "../templates/ClaimKey";
import "../../styles/index.css";
export default {
  component: ClaimKey,
  title: 'Templates / ClaimKey',
  argTypes: {}
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(ClaimKey, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/'
  }
};