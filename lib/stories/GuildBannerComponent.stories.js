import { GuildBannerComponent } from "../components/GuildBannerComponent";
import "../../styles/index.css";
export default {
  component: GuildBannerComponent,
  title: 'Composables / GuildBannerComponent',
  argTypes: {},
  args: {
    cover: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80",
    title: "Nobak",
    description: "200k members",
    buttonColor: "primary",
    disabled: false,
    loading: false,
    size: "medium",
    menu: [{
      name: 'Proposals',
      url: ''
    }, {
      name: 'Delegate',
      url: ''
    }, {
      name: 'Treasury',
      url: ''
    }, {
      name: 'About',
      url: ''
    }],
    socialLinks: [{
      name: 'Twitter',
      url: ''
    }, {
      name: 'Site',
      url: ''
    }, {
      name: 'Github',
      url: ''
    }]
  }
};

//export const Default = (args: any) => <CardComponent {...args} />;
export var Default = function Default(args) {
  return /*#__PURE__*/React.createElement(GuildBannerComponent, args);
};