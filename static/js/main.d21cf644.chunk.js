(this["webpackJsonpgithub-issues-app"]=this["webpackJsonpgithub-issues-app"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(25),a=n.n(s),i=n(172),r=(n(103),n(104),n(74)),l=n.n(r),j=n(69),o=n.n(j),b=n(163),d=n(75),u=n.n(d),O=n(1),x=function(){return Object(O.jsxs)("div",{className:"nav__container",children:[Object(O.jsx)("div",{className:"nav__item__left",children:Object(O.jsx)(o.a,{fontSize:"large"})}),Object(O.jsx)("div",{className:"nav__item__center",children:Object(O.jsx)(l.a,{fontSize:"large"})}),Object(O.jsx)("div",{className:"nav__item__right",children:Object(O.jsx)(b.a,{color:"primary",variant:"dot",children:Object(O.jsx)(u.a,{})})})]})},h=n(20),f=n(46),m=n(76),g=n(17),p=n(49),v=n.n(p),_=n(78),y=n(79),N=n.n(y),I=function(){return N.a.create({baseURL:"https://api.github.com"})},C=function(e,t){return function(){var n=Object(_.a)(v.a.mark((function n(c){var s,a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I().get("/repos/facebook/create-react-app/issues",{params:{per_page:e,page:t}});case 2:s=n.sent,a=s.data,c({type:"GET_GITHUB_DATA",payload:a});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},k=function(e){return{type:"INCREMENT_COUNTER",field:e}},R=n(44),S=n.n(R),T=n(80),E=n.n(T),w=n(81),B=n.n(w),F=n(175),A=function(e){var t=e.labels;if(t&&0===t.length)return null;var n=function(e){switch(e){case 409579052:return"secondary";case 1494610677:return"primary";default:return"default"}};return t.map((function(e){return Object(O.jsx)(F.a,{label:e.name,color:n(e.id),component:"a",clickable:!0},e.node_id)}))},D=n(50),M=n.n(D),U=function(e){return Object(O.jsxs)("div",{className:"issue",children:[Object(O.jsx)("div",{className:"issue__icon material-icons",children:"open"===e.state?Object(O.jsx)(S.a,{color:"error"}):Object(O.jsx)(E.a,{color:"secondary"})}),Object(O.jsxs)("div",{className:"issue__details",children:[Object(O.jsxs)("div",{className:"issue__details__title",children:[Object(O.jsx)("div",{className:"issue__details__title--text",children:e.title}),e.labels&&0!==e.labels.length&&Object(O.jsx)(A,{labels:e.labels})]}),Object(O.jsxs)("div",{className:"issue__details__meta",children:[Object(O.jsxs)("div",{children:["#",e.number]}),Object(O.jsxs)("div",{children:["opened ","".concat(function(e){var t=new Date,n=M()(t,"YYYY/MM/DD"),c=M()(e,"YYYY/MM/DD");return n.diff(c,"days")}(e.updated_at))," ago by"]}),e.user&&e.user.login?Object(O.jsx)("div",{children:e.user.login}):null]})]}),Object(O.jsx)("div",{className:"issue__assignees"}),Object(O.jsx)("div",{className:"issue__comments",children:e.comments>0?Object(O.jsxs)("div",{className:"issue__comments__counter",children:[Object(O.jsx)("div",{className:"material-icons",children:Object(O.jsx)(B.a,{})}),Object(O.jsx)("div",{children:e.comments})]}):""})]})},W=n(30),Y=n.n(W),z=n(164),L=n(7),H=n(171),G=function(){var e=Object(L.a)({root:{borderBottom:"1px solid #e8e8e8"},indicator:{backgroundColor:"#F9826C"}})(H.a),t=Object(L.a)((function(e){return{root:{textTransform:"none",minWidth:72,fontWeight:e.typography.fontWeightRegular,marginRight:e.spacing(4),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},selected:{}}}))((function(e){return Object(O.jsx)(z.a,Object(h.a)({disableRipple:!0},e))})),n=function(e){return Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",lineHeight:1},children:[Object(O.jsxs)("div",{children:[" ",e]}),Object(O.jsx)("div",{children:Object(O.jsx)(Y.a,{})})]})};return Object(O.jsxs)(e,{value:0,"aria-label":"disabled tabs example",variant:"scrollable",scrollButtons:"off",children:[Object(O.jsx)(t,{label:n("Author")}),Object(O.jsx)(t,{label:n("Label")}),Object(O.jsx)(t,{label:n("Projects")}),Object(O.jsx)(t,{label:n("Milestones")}),Object(O.jsx)(t,{label:n("Assigniee")}),Object(O.jsx)(t,{label:n("Sort")})]})},P=function(){var e=Object(g.b)(),t=Object(g.c)((function(e){return e.github})),n=Object(c.useState)(1),s=Object(f.a)(n,2),a=s[0],i=s[1],r=t.githubData,l=t.loading;Object(c.useEffect)((function(){l&&e(C(30,a))}),[l]);return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:Object(O.jsx)(G,{})}),r&&0!==r.length?Object(O.jsx)(m.a,{dataLength:r.length,next:function(){var t=a+1;i(t),e(C(30,t))},hasMore:!0,loader:Object(O.jsx)("h4",{children:"Loading..."}),endMessage:Object(O.jsx)("p",{style:{textAlign:"center"},children:Object(O.jsx)("b",{children:"Yay! You have seen it all"})}),children:r.map((function(e){return Object(O.jsx)(U,Object(h.a)({},e),e.id)}))}):null]})},J=n(165),X=n(166),q=n(173),V=n(167),$=n(168),K=n(137),Q=n(82),Z=n.n(Q),ee=Object(J.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",background:"#FAFBFC",width:"90%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:4},divider:{height:28,margin:4}}})),te=function(){var e=ee();return Object(O.jsx)("div",{className:"search__container",children:Object(O.jsxs)(X.a,{component:"form",className:e.root,children:[Object(O.jsx)(K.a,{endIcon:Object(O.jsx)(Y.a,{}),children:"Filter"}),Object(O.jsx)(V.a,{className:e.divider,orientation:"vertical"}),Object(O.jsx)($.a,{className:e.iconButton,"aria-label":"search",children:Object(O.jsx)(Z.a,{})}),Object(O.jsx)(q.a,{className:e.input,placeholder:"is:issues:is:open"})]})})},ne=(n(131),n(169)),ce=n(51),se=n.n(ce),ae=Object(J.a)((function(e){return{button:{fontWeight:"bold"},add_new:{background:"#2EA44F",color:"#fff"}}})),ie=function(){var e=ae();return Object(O.jsxs)("div",{className:"right__buttons_container",children:[Object(O.jsx)("div",{children:Object(O.jsxs)(ne.a,{size:"small","aria-label":"small outlined button group",children:[Object(O.jsxs)(K.a,{className:e.button,startIcon:Object(O.jsx)(se.a,{}),children:["Label ",Object(O.jsx)(F.a,{size:"small",label:"30"})]}),Object(O.jsxs)(K.a,{className:e.button,startIcon:Object(O.jsx)(se.a,{}),children:["Milestones ",Object(O.jsx)(F.a,{size:"small",label:"6"})]})]})}),Object(O.jsx)("div",{className:"add_new_button",children:Object(O.jsx)(K.a,{className:e.add_new,variant:"contained",children:"New"})})]})},re=function(){return Object(O.jsxs)("div",{className:"filters__conatiner",children:[Object(O.jsx)(te,{}),Object(O.jsx)(ie,{})]})},le=(n(132),n(83)),je=n.n(le),oe=n(84),be=n.n(oe),de=n(85),ue=n.n(de),Oe=n(86),xe=n.n(Oe),he=n(87),fe=n.n(he),me=n(88),ge=n.n(me),pe=n(89),ve=n.n(pe),_e=function(){var e=Object(c.useState)(1),t=Object(f.a)(e,2),n=t[0],s=t[1],a=Object(L.a)({root:{borderBottom:"1px solid #e8e8e8"},indicator:{backgroundColor:"#F9826C"}})(H.a),i=Object(L.a)((function(e){return{root:{textTransform:"none",minWidth:72,fontWeight:e.typography.fontWeightRegular,marginRight:e.spacing(4),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{borderBottom:"1px solid silver",opacity:1},"&$selected":{fontWeight:e.typography.fontWeightMedium},"&:focus":{color:"#40a9ff"}},selected:{}}}))((function(e){return Object(O.jsx)(z.a,Object(h.a)({disableRipple:!0},e))})),r=function(e,t,n){return Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",lineHeight:1},children:[Object(O.jsx)("div",{children:Object(O.jsx)(e,{})}),Object(O.jsxs)("div",{children:[" ",t]}),n&&Object(O.jsx)("div",{children:Object(O.jsx)(F.a,{label:n,size:"small"})})]})};return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(a,{value:n,onChange:function(e,t){s(t)},"aria-label":"disabled tabs example",variant:"scrollable",scrollButtons:"off",children:[Object(O.jsx)(i,{label:r(je.a,"Code")}),Object(O.jsx)(i,{label:r(S.a,"Issues","836")}),Object(O.jsx)(i,{label:r(be.a,"Pull Requests","10")}),Object(O.jsx)(i,{label:r(ue.a,"Discussions")}),Object(O.jsx)(i,{label:r(xe.a,"Actions")}),Object(O.jsx)(i,{label:r(fe.a,"Projects","3")}),Object(O.jsx)(i,{label:r(ge.a,"Security")}),Object(O.jsx)(i,{label:r(ve.a,"Insights")})]})})},ye=n(90),Ne=n.n(ye),Ie=n(174),Ce=n(170),ke=Object(J.a)((function(e){return{link:{display:"flex",color:"#037de1",fontSize:"25px",cursor:"pointer"},icon:{marginRight:e.spacing(.5),width:20,height:20}}})),Re=function(){var e=ke();return Object(O.jsx)("div",{className:"breadcrumbs__container",children:Object(O.jsxs)(Ie.a,{"aria-label":"breadcrumb",children:[Object(O.jsxs)(Ce.a,{color:"inherit",className:e.link,children:[Object(O.jsx)(Ne.a,{className:e.icon}),"facebook"]}),Object(O.jsx)(Ce.a,{color:"inherit",className:e.link,children:"create-react-app"})]})})},Se=(n(133),function(e){var t=e.leftText,n=e.rightText,c=e.onRightButtonClick;return Object(O.jsxs)("div",{className:"btn__group",children:[Object(O.jsx)("button",{className:"left__button",children:t}),Object(O.jsx)("button",{onClick:c,className:"right__button",children:n})]})}),Te=n(45),Ee=n.n(Te),we=function(){var e=Object(g.b)(),t=Object(g.c)((function(e){return e.countIncrement.forks}));return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(Se,{leftText:Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(O.jsx)("span",{style:{marginRight:"2px"},children:Object(O.jsx)(Ee.a,{})}),Object(O.jsx)("span",{children:" Fork "})]}),rightText:Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:t}),onRightButtonClick:function(){e(k("forks"))}})})},Be=function(){var e=Object(g.b)(),t=Object(g.c)((function(e){return e.countIncrement.stars}));return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(Se,{leftText:Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(O.jsx)("span",{style:{marginRight:"2px"},children:Object(O.jsx)(Ee.a,{})}),Object(O.jsx)("span",{children:" Star "})]}),rightText:Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:t}),onRightButtonClick:function(){e(k("stars"))}})})},Fe=n(91),Ae=n.n(Fe),De=function(){var e=Object(g.b)(),t=Object(g.c)((function(e){return e.countIncrement.watchs}));return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(Se,{leftText:Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(O.jsx)("span",{style:{marginRight:"2px"},children:Object(O.jsx)(Ae.a,{})}),Object(O.jsx)("span",{children:" Watch "}),Object(O.jsx)(Y.a,{})]}),rightText:Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:t}),onRightButtonClick:function(){e(k("watchs"))}})})},Me=function(){return Object(O.jsxs)("div",{className:"right__action__container",children:[Object(O.jsx)(De,{}),Object(O.jsx)(Be,{}),Object(O.jsx)(we,{})]})},Ue=function(){return Object(O.jsxs)("div",{className:"top__head_container",children:[Object(O.jsx)(Re,{}),Object(O.jsx)(Me,{})]})},We=function(){return Object(O.jsxs)("div",{className:"head__container",children:[Object(O.jsx)(Ue,{}),Object(O.jsx)(_e,{})]})},Ye=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{}),Object(O.jsx)(We,{}),Object(O.jsxs)("div",{className:"main__section__container",children:[Object(O.jsx)(re,{}),Object(O.jsx)(P,{})]})]})},ze=n(92),Le=Object(ze.a)();var He=function(){return Object(O.jsx)(c.Suspense,{children:Object(O.jsx)(i.b,{history:Le,children:Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{path:"/",exact:!0,component:Ye}),Object(O.jsx)(i.a,{path:"/github-issues-app",exact:!0,component:Ye})]})})})},Ge=n(26),Pe=n(93),Je=n(54),Xe={githubData:[],loading:!0},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_GITHUB_DATA":return Object(h.a)(Object(h.a)({},e),{},{githubData:[].concat(Object(Je.a)(e.githubData),Object(Je.a)(t.payload)),loading:!1});default:return e}},Ve=n(42),$e={watchs:0,stars:0,forks:0},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.field;switch(n){case"INCREMENT_COUNTER":return Object(h.a)(Object(h.a)({},e),{},Object(Ve.a)({},c,e[c]+1));default:return e}},Qe=Object(Ge.c)({github:qe,countIncrement:Ke}),Ze=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ge.d,et=Object(Ge.e)(Qe,Ze(Object(Ge.a)(Pe.a)));a.a.render(Object(O.jsx)(g.a,{store:et,children:Object(O.jsx)(He,{})}),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.d21cf644.chunk.js.map