import { CardComponent } from "../components/CardComponent";
import "../../styles/index.css";
export default {
  component: CardComponent,
  title: 'Composables / CardComponent',
  argTypes: {},
  args: {
    title: "Space for server name",
    description: "200k members",
    buttonColor: "primary",
    disabled: false,
    loading: false,
    size: "medium"
  }
};

//export const Default = (args: any) => <CardComponent {...args} />;
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(CardComponent, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/'
  }
};