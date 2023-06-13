import{j as q}from"./jsx-runtime-91a467a5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const s=({allCaps:t=!1,color:_="primary",label:x="no label",size:S="h1",fontColor:P})=>q("span",{className:`label ${S} text-${_} ${t&&"text-capitalize"}`,style:{color:P},children:x});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{size:{defaultValue:{value:"h1"},description:"How large should the text be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},label:{defaultValue:{value:"no label"},description:"Label contents",name:"label",required:!1,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"Color of the label",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},allCaps:{defaultValue:{value:"false"},description:"Define if text is capitalize",name:"allCaps",required:!1,type:{name:"boolean"}},fontColor:{defaultValue:null,description:"Define custom color of the label",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const A={title:"UI/MyLabel",component:s,tags:["autodocs"],argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}},e={args:{size:"normal",label:"Example label",color:"primary"}},a={args:{size:"h1",label:"Prueba All Caps",color:"tertiary",allCaps:!0}},r={args:{size:"h2",label:"Prueba Secondary",color:"secondary"}},o={args:{size:"h3",label:"Prueba Terciary",color:"tertiary"}},l={args:{size:"h2",label:"Prueba Font",fontColor:"#999"}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'normal',
    label: 'Example label',
    color: 'primary'
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'h1',
    label: 'Prueba All Caps',
    color: 'tertiary',
    allCaps: true
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,y,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'h2',
    label: 'Prueba Secondary',
    color: 'secondary'
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,g,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'h3',
    label: 'Prueba Terciary',
    color: 'tertiary'
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var C,z,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'h2',
    label: 'Prueba Font',
    fontColor: '#999'
  }
}`,...(v=(z=l.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};const F=["Basic","AllCaps","Secondary","Terciary","CustomFontColor"];export{a as AllCaps,e as Basic,l as CustomFontColor,r as Secondary,o as Terciary,F as __namedExportsOrder,A as default};
//# sourceMappingURL=MyLabel.stories-6674b74e.js.map
