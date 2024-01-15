function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Form } from "../../../components/Form";
import "../../../../../styles/index.css";
import * as React from 'react';
var loadPayload = function loadPayload() {
  return console.log('Loading Payload');
};
export default {
  component: Form,
  title: 'Data Handle / Form',
  argTypes: {
    type: {
      options: ['stepper', 'dynamic'],
      control: {
        type: 'radio'
      }
    }
  },
  args: {
    type: 'dynamic',
    debug: true,
    button: {
      text: 'Submit',
      variant: 'primary'
    }
  },
  decorators: [withDesign]
};
export var DummyForm = function DummyForm(args) {
  var fields = [{
    field: {
      type: 'text',
      id: 'description',
      placeholder: 'Description',
      label: 'Description',
      required: true
    }
  }];
  return /*#__PURE__*/React.createElement(Form, _extends({}, args, {
    fields: fields
  }));
};
DummyForm.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};