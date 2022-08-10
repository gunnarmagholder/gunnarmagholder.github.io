import{j as e}from"./jsx-runtime.f3747052.js";import{B as n}from"./Button.2a734ebb.js";import"./index.f6283c0d.js";import"./createTheme.a5a3adff.js";import"./TransitionGroupContext.b1d3016a.js";import"./ButtonBase.cb397a7c.js";var g={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '@mui/material/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = function btn(args) {
  return <Button {...args} />;
};

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  variant: 'text',
  children: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  children: 'Button',
};

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  children: 'Button',
};
`,locationsMap:{text:{startLoc:{col:48,line:16},endLoc:{col:1,line:18},startBody:{col:48,line:16},endBody:{col:1,line:18}},outlined:{startLoc:{col:48,line:16},endLoc:{col:1,line:18},startBody:{col:48,line:16},endBody:{col:1,line:18}},contained:{startLoc:{col:48,line:16},endLoc:{col:1,line:18},startBody:{col:48,line:16},endBody:{col:1,line:18}}}}},title:"Example/Button",component:n,argTypes:{backgroundColor:{control:"color"}}};const t=function(o){return e(n,{...o})},r=t.bind({});r.args={variant:"text",children:"Button"};const a=t.bind({});a.args={variant:"outlined",children:"Button"};const i=t.bind({});i.args={variant:"contained",children:"Button"};const B=["Text","Outlined","Contained"];export{i as Contained,a as Outlined,r as Text,B as __namedExportsOrder,g as default};
//# sourceMappingURL=Button.stories.5055526d.js.map
