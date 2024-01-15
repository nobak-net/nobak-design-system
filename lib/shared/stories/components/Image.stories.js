import { Image } from "../../components/Image";
import "../../../../styles/index.css";
export default {
  component: Image,
  title: 'Components / Image',
  argTypes: {
    imageUrl: {
      type: {
        summary: 'string'
      },
      defaultValue: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
    }
  }
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(Image, args);
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=971%3A68'
  }
};