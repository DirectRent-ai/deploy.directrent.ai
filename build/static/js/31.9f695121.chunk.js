(this.webpackJsonprealdeal=this.webpackJsonprealdeal||[]).push([[31],{1552:function(e,a,t){"use strict";t.r(a);var n=t(2),s=t(50),c=t(24),r=t(52),l=t(256),o=t(317),m=t(0),i=t.n(m),u=t(49),d=t(9),b=t(30),f=t(1518),E=t(1526),p=t(1519),g=t(1520),h=t(1527),w=t(1528),O=t(251),j=t(257),N=t(249),v=t(1525),y={password:"",confirm_password:""},S=t(260),x=function(){return S.e().shape({password:S.g().required("Required").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,"Password must contain at-least 8 characters, one number and a special character (!@#$%)"),confirm_password:S.g().required("Required").when("password",{is:function(e){return!!(e&&e.length>0)},then:S.g().oneOf([S.f("password")],"Both password need to be the same")})})},k=["handleSubmit","values"],P=Object(u.connect)((function(e,a){return{initialValues:y,validationSchema:x,submitButtonLabel:"submit ",BtnClasses:"float-right"}}),(function(e){return{}}))(Object(j.a)((function(e){var a=e.handleSubmit,t=(e.values,Object(c.a)(e,k),function(e){13===e.charCode&&a()});return i.a.createElement(v.a,null,i.a.createElement(N.a,{label:i.a.createElement("b",null,"Password"),type:"password",name:"password",bsSize:"sm",onKeyPress:t,component:O.l}),i.a.createElement(N.a,{label:i.a.createElement("b",null,"Confirm password"),type:"password",name:"confirm_password",bsSize:"sm",onKeyPress:t,component:O.l}))}))),q=t(5),C=["turnOffSubmitting","turnOnSubmitting","match"];a.default=Object(u.connect)((function(e,a){return{noBanner:!0,isHideFooter:!0,noHeader:!0,isHideNavigation:!0}}),null)(Object(l.a)(Object(d.i)((function(e){var a=e.turnOffSubmitting,t=e.turnOnSubmitting,l=(e.match,Object(c.a)(e,C)),u=Object(m.useContext)(r.a),O=u.changePass,j=u.isLoggedIn,N=Object(m.useState)(!0),v=Object(s.a)(N,2),y=v[0],S=(v[1],Object(m.useState)("")),x=Object(s.a)(S,2),k=x[0],z=x[1],B=Object(d.h)().tokenId;return Object(m.useEffect)((function(){z(B)}),[B]),j?i.a.createElement(d.c,null,i.a.createElement(d.b,{to:"".concat(q.o,"/create#step1")})):void 0===y?i.a.createElement("div",{className:"signin"},i.a.createElement(f.a,null,i.a.createElement(o.a,{className:"py-4"}),i.a.createElement(E.a,{className:"d-flex justify-content-center my-4"},i.a.createElement(p.a,{md:"5"},i.a.createElement(g.a,{className:"border-0 card-shadow-info"},i.a.createElement(h.a,null,i.a.createElement("div",{class:"fa-3x text-center py-5"},i.a.createElement("i",{class:"fas fa-spinner fa-spin "})))))))):!1===y?i.a.createElement("div",{className:"signin"},i.a.createElement(f.a,null,i.a.createElement(o.a,{className:"py-4"}),i.a.createElement(E.a,{className:"d-flex justify-content-center my-4"},i.a.createElement(p.a,{md:"5"},i.a.createElement(g.a,{className:"border-0 card-shadow-info"},i.a.createElement(w.a,null),i.a.createElement(h.a,null,i.a.createElement("p",{class:"mb-5"},"Your Request has been expired please go back to your login page."),i.a.createElement("p",{className:"text-right"},i.a.createElement(b.b,{to:"/login",className:"btn  btn-blue"},"go back")))))))):i.a.createElement("div",{className:"signin"},i.a.createElement(f.a,null,i.a.createElement(o.a,{className:"py-4"}),i.a.createElement(E.a,{className:"d-flex justify-content-center my-4"},i.a.createElement(p.a,{md:"5"},i.a.createElement(g.a,{className:"border-0 card-shadow-info"},i.a.createElement(w.a,{className:"text-center"},i.a.createElement("h2",{className:"sub-title mt-3 pl-4 mb-0"}," Change Password"),i.a.createElement("p",{class:"pl-4 small text-muted"},"Enter email to recieve link")),i.a.createElement(h.a,null,i.a.createElement(P,Object.assign({},l,{onSubmit:function(e){return O(Object(n.a)({token:k},e),a,t)}}))))))))}))))},317:function(e,a,t){"use strict";var n=t(0),s=t.n(n),c=t(30);a.a=function(e){var a=e.className;return s.a.createElement("div",{className:"d-flex justify-content-center  ".concat(a)},s.a.createElement(c.b,{to:"/"},s.a.createElement("img",{class:"frontlogo",src:"/assets/img/footer-logo.png",alt:"logo",id:"logo"})))}}}]);
//# sourceMappingURL=31.9f695121.chunk.js.map