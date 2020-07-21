(this["webpackJsonpair-quality-index"]=this["webpackJsonpair-quality-index"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),c=(a(78),a(141)),i=a(65),m=Object(i.a)({palette:{common:{green:"#009865",yellow:"#fffb26",orange:"#ff9835",red:"#ca0034",purple:"#670099",brown:"#7e0123",lightGreen:"#e5f4ef",lightYellow:"#ffffea",lightOrange:"#fef4ea",lightRed:"#fae5ea",lightPurple:"#f0e5f5",lightBrown:"#f1e5e9"}},custom:{btn:{position:"absolute",left:0,top:0,width:"100%",height:"100%",borderRadius:"999px",border:0,fontWeight:"bold",fontSize:"2rem"}},typography:{fontFamily:'"Noto Sans TC", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}}),u=a(46),s=a.n(u),d=a(63),f=a(35),g=a(25),p=a(144),b=a(131),E=a(102),h=a(143),v=a(132),w=a(140),x=a(142),y=a(127),O=a(64),j=a.n(O).a.create({baseURL:"https://data.epa.gov.tw"}),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return j.get("/api/v1/aqx_p_432?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json",e)},k=a(129),N=a(133),S=a(134),I=a(135),W=a(136),B=a(137),P=a(138),R=a(139),M=Object(y.a)((function(e){return{card:{borderRadius:0,border:"1px solid #555"},site:{padding:"16px"},mainIndex:{background:"var(--bgColor)",borderLeft:"1px solid #555",color:e.palette.common.white},topBorder:{borderTop:"1px solid #555"},table:{width:"100%"}}})),q=function(e){return{"--bgColor":e}},L=function(e){var t=M(),a=Object(n.useState)(!1),l=Object(f.a)(a,2),o=l[0],c=l[1],i=e.data;console.log("area index:",i);return r.a.createElement(k.a,{variant:"outlined",className:t.card,onClick:function(){c(!o)}},r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:6,className:t.site},r.a.createElement(v.a,{variant:"h5",align:"center"},i.SiteName)),r.a.createElement(b.a,{item:!0,xs:6,className:"".concat(t.site," ").concat(t.mainIndex),style:function(e){console.log(e);var t=Number(e);return t<50?q(m.palette.common.green):t>50&&t<101?q(m.palette.common.yellow):t>100&&t<151?q(m.palette.common.orange):t>150&&t<201?q(m.palette.common.red):t>200&&t<301?q(m.palette.common.purple):t>300?q(m.palette.common.brown):void 0}(i.AQI)},r.a.createElement(v.a,{variant:"h5",align:"center"},i.AQI))),r.a.createElement(N.a,{in:o,timeout:"auto"},r.a.createElement(S.a,{className:t.topBorder},r.a.createElement(I.a,null,r.a.createElement(W.a,{className:t.table,"aria-label":"simple table"},r.a.createElement(B.a,null,r.a.createElement(P.a,null,r.a.createElement(R.a,{align:"left"},"PM",r.a.createElement("sub",null,"2.5")),r.a.createElement(R.a,{align:"left"},i["PM2.5"])),r.a.createElement(P.a,null,r.a.createElement(R.a,{align:"left"},"PM",r.a.createElement("sub",null,"10")),r.a.createElement(R.a,{align:"left"},i.PM10)),r.a.createElement(P.a,null,r.a.createElement(R.a,{align:"left"},"O",r.a.createElement("sub",null,"3")),r.a.createElement(R.a,{align:"left"},i.O3)),r.a.createElement(P.a,null,r.a.createElement(R.a,{align:"left"},"CO"),r.a.createElement(R.a,{align:"left"},i.CO)),r.a.createElement(P.a,null,r.a.createElement(R.a,{align:"left"},"SO",r.a.createElement("sub",null,"2")),r.a.createElement(R.a,{align:"left"},i.SO2)),r.a.createElement(P.a,null,r.a.createElement(R.a,{align:"left"},"NO",r.a.createElement("sub",null,"2")),r.a.createElement(R.a,{align:"left"},i.NO2))))))))},A=Object(y.a)((function(e){var t;return{selfIndex:(t={background:"var(--bgColor)"},Object(g.a)(t,e.breakpoints.up("sm"),{borderTop:"4px solid var(--borderColor)"}),Object(g.a)(t,e.breakpoints.down("xs"),{borderLeft:"4px solid var(--borderColor)"}),t)}})),Q=function(e,t){return{"--bgColor":e,"--borderColor":t}},T=function(e){var t=A();return r.a.createElement(b.a,{container:!0,item:!0,xs:2,className:t.selfIndex,style:function(e){switch(e){case"green":return Q(m.palette.common.lightGreen,m.palette.common.green);case"yellow":return Q(m.palette.common.lightYellow,m.palette.common.yellow);case"orange":return Q(m.palette.common.lightOrange,m.palette.common.orange);case"red":return Q(m.palette.common.lightRed,m.palette.common.red);case"purple":return Q(m.palette.common.lightPurple,m.palette.common.purple);case"brown":return Q(m.palette.common.lightBrown,m.palette.common.brown)}}(e.data.color)},r.a.createElement(h.a,{alignSelf:"center",p:1},r.a.createElement(v.a,{variant:"body2"},e.data.status,r.a.createElement("br",null),e.data.range)))},_=Object(y.a)((function(e){var t;return{main:{position:"absolute",width:"100%",height:"100%",background:"#eee",padding:e.spacing(2)},board:{background:e.palette.common.white,maxWidth:"800px",padding:e.spacing(2)},standardIndex:(t={marginBottom:e.spacing(4)},Object(g.a)(t,e.breakpoints.down("xs"),{flexDirection:"column"}),Object(g.a)(t,"& > div",Object(g.a)({},e.breakpoints.down("xs"),{maxWidth:function(){return"100%"}})),t),formControl:{minWidth:120}}})),z=[{status:"\u826f\u597d",range:"0~50",color:"green"},{status:"\u666e\u901a",range:"51~100",color:"yellow"},{status:"\u5c0d\u654f\u611f\u65cf\u7fa4\u4e0d\u5065\u5eb7",range:"101~150",color:"orange"},{status:"\u5c0d\u6240\u6709\u65cf\u7fa4\u4e0d\u5065\u5eb7",range:"151~200",color:"red"},{status:"\u975e\u5e38\u4e0d\u5065\u5eb7",range:"201~300",color:"purple"},{status:"\u5371\u5bb3",range:"301~500",color:"brown"}],F=function(){var e=_(),t=Object(n.useState)(""),a=Object(f.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)([]),i=Object(f.a)(c,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C().then((function(e){console.log(e.data.records),u(e.data.records)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(b.a,{container:!0,justify:"center",alignItems:"flex-start",className:e.main},r.a.createElement(b.a,{container:!0,item:!0,xs:12,className:e.board,component:E.a,elevation:3,square:!0},r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(h.a,{mb:4},r.a.createElement(v.a,{variant:"h5"},"\u7a7a\u6c23\u54c1\u8cea\u6307\u6a19AQI"))),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(h.a,{mb:4},r.a.createElement(w.a,{className:e.formControl},r.a.createElement(x.a,{id:"demo-simple-select",value:l,onChange:function(e){console.log(e.target.value),o(e.target.value)},inputProps:{"aria-label":"Without label"},displayEmpty:!0},r.a.createElement(p.a,{value:"",disabled:!0},r.a.createElement("em",null,"\u8acb\u9078\u64c7\u7e23\u5e02")),function(){var e=new Set;if(m)return m.filter((function(t){return!e.has(t.County)&&e.add(t.County)})).map((function(e,t){return r.a.createElement(p.a,{value:e.County,key:t},e.County)}))}())))),r.a.createElement(b.a,{container:!0,className:e.standardIndex},z.map((function(e,t){return r.a.createElement(T,{data:e,key:t})}))),r.a.createElement(b.a,{container:!0,spacing:1},l?function(){var e=new Set;if(m)return m.filter((function(t){return t.County===l&&e.add(t)})).map((function(e,t){return r.a.createElement(b.a,{item:!0,xs:6,key:t},r.a.createElement(L,{data:e}))}))}():null)))};var G=function(){return r.a.createElement(c.a,{theme:m},r.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a(100)},78:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.68c70d5a.chunk.js.map