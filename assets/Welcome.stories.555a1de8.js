import{a as o,j as e}from"./jsx-runtime.f3747052.js";import{a as r}from"./index.4a46a46f.js";import{B as s}from"./Button.2a734ebb.js";import"./index.f6283c0d.js";import"./createTheme.a5a3adff.js";import"./TransitionGroupContext.b1d3016a.js";import"./ButtonBase.cb397a7c.js";const c="_container_1adym_1",l="_boldPrint_1adym_4";var t={container:c,boldPrint:l};function a(){const n=r().state?r().state:{email:" - "};return o("div",{className:t.container,children:[e("p",{className:t.boldPrint,children:"Sch\xF6n, dass Du da bist & herzlich willkommen bei reasy!"}),o("p",{"data-testid":"welcome-text",children:["Vielen Dank f\xFCr Deine Registrierung. Wir haben Dir einen Best\xE4tigungslink Deiner Email-Adresse an",e("span",{className:t.boldPrint,children:` ${n.email} `}),"geschickt."]}),e("p",{children:"Sobald Dein Account best\xE4tigt ist, kannst Du auch schon direkt loslegen!"}),e(s,{href:"/",variant:"contained",children:"Zum Login"})]})}var x={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Welcome from './Welcome';

export default {
  title: 'Components/Welcome',
  component: Welcome,
} as ComponentMeta<typeof Welcome>;

const Template: ComponentStory<any> = function welcome(args) {
  return <Welcome {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:38,line:10},endLoc:{col:1,line:12},startBody:{col:38,line:10},endBody:{col:1,line:12}}}}},title:"Components/Welcome",component:a};const m=function(i){return e(a,{...i})},d=m.bind({});d.args={};const D=["Default"];export{d as Default,D as __namedExportsOrder,x as default};
//# sourceMappingURL=Welcome.stories.555a1de8.js.map
