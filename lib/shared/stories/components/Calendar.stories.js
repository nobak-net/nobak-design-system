import { Calendar, Layout } from "../../components";
import "../../../../styles/index.css";
export default {
  component: Calendar,
  title: 'Date Time / Calendar',
  args: {
    events: [{
      id: 1,
      name: 'Dive into Meditation',
      timestamp: 1645102800,
      duration: 60,
      href: '#'
    }, {
      id: 2,
      name: 'Yoga Class',
      timestamp: 1645444800,
      duration: 60,
      href: '#'
    }, {
      id: 3,
      name: 'Yoga Class #2',
      timestamp: 1645617600,
      duration: 60,
      href: '#'
    }, {
      id: 4,
      name: 'Yoga Class #3',
      timestamp: 1645696800,
      duration: 60,
      href: '#'
    }, {
      id: 5,
      name: 'Yoga Class #5',
      timestamp: 1645628400,
      duration: 60,
      href: '#'
    }, {
      id: 7,
      name: 'Yoga Class #7',
      timestamp: 1645704000,
      duration: 60,
      href: '#'
    }, {
      id: 8,
      name: 'Yoga Class #8',
      timestamp: 1645714800,
      duration: 60,
      href: '#'
    }]
  }
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(Layout, {
    variant: "large"
  }, /*#__PURE__*/React.createElement(Calendar, args));
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};