(this.webpackJsonprealdeal=this.webpackJsonprealdeal||[]).push([[28],{1557:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(49),c=a(256),s=a(50),i=a(390),o=(a(347),a(1520)),m=a(1528),u=a(1527),f=a(1518),b=a(1526),d=a(1519),p=a(1525),E=a(352),g=a(245),O=a(251),y=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c={backgroundColor:"#2e6ca0",color:"#fff",display:"flex  ",justifyContent:"center  ",alignItems:"center  ",fontSize:"28px",fontWeight:"bold"},y=Object(n.useRef)(null),h=Object(n.useState)(!0),j=Object(s.a)(h,2),v=j[0],N=j[1];return l.a.createElement("div",{className:"tenant-reference"},l.a.createElement(o.a,null,l.a.createElement(m.a,null,l.a.createElement("div",{className:" advertearned d-block mx-auto px-3 py-2 text-white w-75 rounded mb-5 mt-2"},l.a.createElement("h2",{className:"sub-title text-white text-center my-4 "},"$0 Earned so far from free advertising"))),l.a.createElement(u.a,null,l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement(d.a,{md:"7"},l.a.createElement(p.a,null,l.a.createElement("legend",null,"E-mail your friend"),l.a.createElement(O.r,{placeholder:"Enter friend e-mail address"}),l.a.createElement("button",{type:"submit",className:"btn btn-sm btn-success "},l.a.createElement("i",{className:"fas fa-check pr-2"}),"Invite"),l.a.createElement("br",null)),a&&l.a.createElement("div",null,l.a.createElement(E.a,{color:"primary",isOpen:v,toggle:function(){return N(!1)},fade:!1},l.a.createElement("i",{className:"fas fa-check pr-2"}),"Link Copied")),l.a.createElement(p.a,{inline:!0,className:"mt-3"},l.a.createElement("div",{class:"form-group"},l.a.createElement("input",{type:"text",class:"form-control outline-0",id:"exampleInputPassword1",ref:y,value:"https://DirectRent.com",readOnly:!0})),l.a.createElement(g.a,{className:"btn btn-lihgt mr-2 ",onClick:function(e){y.current.select(),document.execCommand("copy"),r(!a)}},l.a.createElement("i",{class:"fas fa-link"})),l.a.createElement("br",null)),l.a.createElement("h2",{className:"sub-title mt-4 mb-2"},"Post on Social Media"),l.a.createElement(g.a,{className:"btn btn-blue mr-2"},l.a.createElement("i",{class:"fab fa-facebook-f mr-1"}),"Share"),l.a.createElement(g.a,{className:"btn btn-blue mr-2"},l.a.createElement("i",{class:"fab fa-twitter mr-1"}),"Tweet"),l.a.createElement(g.a,{className:"btn btn-blue mr-2"},l.a.createElement("i",{class:"fab fa-linkedin-in mr-1"}),"Share")),l.a.createElement(d.a,{md:"5"},l.a.createElement("h2",{className:"sub-title text-center text-dark"},"How it works?"),l.a.createElement(i.VerticalTimeline,{layout:"1-column-left",animate:!1},l.a.createElement(i.VerticalTimelineElement,{className:"vertical-timeline-element--work",iconStyle:c,icon:1},l.a.createElement("p",null," Share your Link to landlord friend")),l.a.createElement(i.VerticalTimelineElement,{className:"vertical-timeline-element--work",iconStyle:c,icon:2},l.a.createElement("p",null,"Your friend signup and list a property")),l.a.createElement(i.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:c,icon:3},l.a.createElement("p",null,"They get a free trial and your get a $25 of free advertising")))))))))};t.default=Object(r.connect)((function(e){return{Header:{headertitle:"Refer a Landlord to DirectRent  ",subheader:"Invite a friend and get $29 of free advertising"},pageName:"Invite friend"}}))(Object(c.a)((function(e){return l.a.createElement(y,null)})))},352:function(e,t,a){"use strict";var n=a(3),l=a(8),r=a(85),c=a(0),s=a.n(c),i=a(1),o=a.n(i),m=a(26),u=a.n(m),f=a(67),b=a(297),d=["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"];function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:f.p,transition:o.a.shape(b.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},O={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:E(E({},b.a.defaultProps),{},{unmountOnExit:!0})};function y(e){var t=e.className,a=e.closeClassName,r=e.closeAriaLabel,c=e.cssModule,i=e.tag,o=e.color,m=e.isOpen,p=e.toggle,g=e.children,O=e.transition,y=e.fade,h=e.innerRef,j=Object(l.a)(e,d),v=Object(f.l)(u()(t,"alert","alert-"+o,{"alert-dismissible":p}),c),N=Object(f.l)(u()("close",a),c),k=E(E(E({},b.a.defaultProps),O),{},{baseClass:y?O.baseClass:"",timeout:y?O.timeout:0});return s.a.createElement(b.a,Object(n.a)({},j,k,{tag:i,className:v,in:m,role:"alert",innerRef:h}),p?s.a.createElement("button",{type:"button",className:N,"aria-label":r,onClick:p},s.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,g)}y.propTypes=g,y.defaultProps=O,t.a=y}}]);
//# sourceMappingURL=28.968a2d06.chunk.js.map