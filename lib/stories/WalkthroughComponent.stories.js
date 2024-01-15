import "../../styles/index.css";
import { WalkthroughComponent } from "../components/Walkthrough/WalkthroughComponent";
import { useWalkthrough } from "../components/Walkthrough/context/WalkthroughContext";
import { LayoutComponent } from "../components/LayoutComponent";
import { Button, Form } from "../shared";
import { Frame } from "../components/Frame";
var RegisterComponent = function RegisterComponent() {
  var _useWalkthrough = useWalkthrough(),
    goNext = _useWalkthrough.goNext,
    goBack = _useWalkthrough.goBack,
    steps = _useWalkthrough.steps,
    currentIdx = _useWalkthrough.currentIdx;
  return /*#__PURE__*/React.createElement(LayoutComponent, {
    title: 'Register',
    variant: 'simple'
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-4 space-x-4"
  }, /*#__PURE__*/React.createElement(Button, {
    text: "Back",
    disabled: currentIdx === 0,
    onClick: function onClick() {
      return goBack();
    }
  }), /*#__PURE__*/React.createElement(Button, {
    text: "Next",
    disabled: currentIdx + 1 === steps.length,
    onClick: function onClick() {
      return goNext();
    }
  })));
};
var NobaktyComponent = function NobaktyComponent() {
  var _useWalkthrough2 = useWalkthrough(),
    goNext = _useWalkthrough2.goNext,
    goBack = _useWalkthrough2.goBack,
    steps = _useWalkthrough2.steps,
    currentIdx = _useWalkthrough2.currentIdx;
  return /*#__PURE__*/React.createElement(LayoutComponent, {
    title: 'Nobakty',
    variant: 'simple'
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-4 space-x-4"
  }, /*#__PURE__*/React.createElement(Button, {
    text: "Back",
    disabled: currentIdx === 0,
    onClick: function onClick() {
      return goBack();
    }
  }), /*#__PURE__*/React.createElement(Button, {
    text: "Next",
    disabled: currentIdx + 1 === steps.length,
    onClick: function onClick() {
      return goNext();
    }
  })));
};
var DiscordComponent = function DiscordComponent() {
  var _useWalkthrough3 = useWalkthrough(),
    goNext = _useWalkthrough3.goNext,
    goBack = _useWalkthrough3.goBack,
    steps = _useWalkthrough3.steps,
    currentIdx = _useWalkthrough3.currentIdx;
  return /*#__PURE__*/React.createElement(LayoutComponent, {
    title: 'Discord',
    variant: 'simple'
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-4 space-x-4"
  }, /*#__PURE__*/React.createElement(Button, {
    text: "Back",
    disabled: currentIdx === 0,
    onClick: function onClick() {
      return goBack();
    }
  }), /*#__PURE__*/React.createElement(Button, {
    text: "Next",
    disabled: currentIdx + 1 === steps.length,
    onClick: function onClick() {
      return goNext();
    }
  })));
};
var fields = [{
  field: {
    type: 'text',
    id: 'description',
    placeholder: 'Description',
    label: 'Description'
  },
  title: 'Experience Info',
  description: 'Describe in a few words whats about.'
}];
var FormFragment = function FormFragment() {
  var _useWalkthrough4 = useWalkthrough(),
    goNext = _useWalkthrough4.goNext,
    goBack = _useWalkthrough4.goBack,
    steps = _useWalkthrough4.steps,
    currentIdx = _useWalkthrough4.currentIdx;
  var onAfterSubmit = function onAfterSubmit(e) {
    console.log('e', e);
    if (e.status === 200) {
      goNext();
    }
  };
  return /*#__PURE__*/React.createElement(Frame, {
    variant: "simple"
  }, /*#__PURE__*/React.createElement(Form, {
    type: "dynamic",
    debug: false,
    fields: fields,
    button: {
      text: 'Next',
      variant: 'primary'
    },
    preventDefault: true,
    afterSubmit: onAfterSubmit,
    action: "http://localhost:3100/posts"
  }));
};
export default {
  component: WalkthroughComponent,
  title: 'Composables / WalkthroughComponent',
  argTypes: {},
  args: {
    title: 'Title'
  }
};
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(WalkthroughComponent, {
    steps: [{
      name: 'Register',
      component: FormFragment
    }, {
      name: 'Nobakty Info',
      component: NobaktyComponent
    }, {
      name: 'Discord App Info',
      component: DiscordComponent
    }]
  });
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/'
  }
};