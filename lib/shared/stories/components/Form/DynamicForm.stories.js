function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Form } from "../../../components/Form";
import "../../../../../styles/index.css";
import * as React from 'react';
var loadPayload = function loadPayload() {
  return console.log('Loading Payload');
};

// const validateEmail: any = (mail: string) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) ? true : false

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
    },
    preventDefault: true,
    afterSubmit: function afterSubmit() {
      return console.log('Hello Submit');
    }
  }
};
export var DynamicForm1 = function DynamicForm1(args) {
  // const getChild: any = async (e: any) => {
  //   console.log('E', e)
  //   if (e.value === "1") {
  //     return [{ name: 'Option A', value: 1 },{ name: 'Option B', value: 2 }]
  //   } else if (e.value === "2") {
  //     return [{ name: 'Option C', value: 3 },{ name: 'Option D', value: 4 }]
  //   }
  // }

  // const updateGrandchild: any = async (e: any) => {
  //   if (e.value === "1") {
  //     return [{ name: 'Option A 1', value: 5 },{ name: 'Option A 2', value: 6 }]
  //   } else if (e.value === "2") {
  //     return [{ name: 'Option B 1', value: 7 },{ name: 'Option B 2', value: 8 }]
  //   } else if (e.value === "3") {
  //     return [{ name: 'Option C 1', value: 9 },{ name: 'Option C 2', value: 10 }]
  //   } else if (e.value === "4") {
  //     return [{ name: 'Option D 1', value: 11 },{ name: 'Option D 2', value: 12 }]
  //   }
  // }

  var fields = [{
    field: {
      type: 'text',
      id: 'description',
      placeholder: 'Description',
      label: 'Description',
      required: true
    },
    title: 'Experience Info',
    description: 'Describe in a few words whats about.'
  }, {
    field: {
      type: 'textarea',
      id: 'description',
      placeholder: 'Description',
      label: 'Description',
      required: true
    },
    title: 'Experience Info',
    description: 'Describe in a few words whats about.'
  }, {
    field: {
      type: 'select',
      id: 'parent',
      label: 'Parent',
      placeholder: 'select',
      options: [{
        name: 'Option 1',
        value: 1
      }, {
        name: 'Option 2',
        value: 2
      }]
    }
  }
  //   {
  //     field: {
  //       type: 'select',
  //       id: 'child',
  //       label: 'Child',
  //       placeholder: 'select',
  //       belongs_to: 'parent',
  //       populateOptions: getChild
  //     },
  //   },
  //   {
  //     field: {
  //       type: 'select',
  //       id: 'child2',
  //       label: 'Child 2',
  //       placeholder: 'select',
  //       belongs_to: 'child',
  //       populateOptions: updateGrandchild
  //     },
  //   },
  //   { field: {
  //     type: 'time',
  //     id: 'duration',
  //     placeholder: 'Duration',
  //     label: 'Duration',
  //     icon: 'clock',
  //     required: true,
  //   },
  //   title: 'Experience Info',
  //   description: 'Choose the duration of your experience',
  // },
  ];
  return /*#__PURE__*/React.createElement(Form, _extends({}, args, {
    fields: fields
  }));
};
DynamicForm1.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};
export var DynamicForm2 = function DynamicForm2(args) {
  var fields = [{
    field: {
      type: 'text',
      id: 'description',
      placeholder: 'Description',
      label: 'Description',
      required: true
    },
    title: 'Experience Info',
    description: 'Describe in a few words whats about.'
  }];
  return /*#__PURE__*/React.createElement(Form, _extends({}, args, {
    fields: fields
  }));
};
DynamicForm2.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
  }
};