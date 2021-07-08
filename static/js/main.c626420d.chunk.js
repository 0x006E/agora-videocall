(this["webpackJsonpagora-videocall"]=this["webpackJsonpagora-videocall"]||[]).push([[0],{22:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(16),o=n.n(c),s=(n(22),n(3)),i=n(2),u=n.n(i),l=n(17),d=n(6),j=n(5),b=n(1),f=function(e){var t=e.users,n=e.tracks;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{id:"videos",children:[Object(b.jsx)(j.a,{className:"vid",videoTrack:n[1]}),t.length>0&&t.map((function(e){return e.videoTrack?Object(b.jsx)(j.a,{className:"vid",videoTrack:e.videoTrack},e.uid):null}))]})})},h=n(8),v=Object(j.b)({mode:"live",codec:"vp8"}),O=function(e){var t=v(),n=e.tracks,a=e.setStart,c=e.setInCall,o=Object(r.useState)({video:!0,audio:!0}),i=Object(s.a)(o,2),l=i[0],j=i[1],f=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("audio"!==t){e.next=6;break}return e.next=3,n[0].setEnabled(!l.audio);case 3:j((function(e){return Object(h.a)(Object(h.a)({},e),{},{audio:!e.audio})})),e.next=10;break;case 6:if("video"!==t){e.next=10;break}return e.next=9,n[1].setEnabled(!l.video);case 9:j((function(e){return Object(h.a)(Object(h.a)({},e),{},{video:!e.video})}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.leave();case 2:t.removeAllListeners(),n[0].close(),n[1].close(),a(!1),c(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"controls",children:[Object(b.jsx)("button",{style:{background:l.audio?"dodgerblue":"firebrick"},onClick:function(){return f("audio")},children:Object(b.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"})})}),Object(b.jsx)("button",{style:{background:"firebrick",transform:"rotate(135deg)"},onClick:function(){return O()},children:Object(b.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})})}),Object(b.jsx)("button",{style:{background:l.video?"dodgerblue":"firebrick"},onClick:function(){return f("video")},children:Object(b.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"})})})]})},p=function(e){var t=Object(j.c)(),n=e.setInCall,a=e.channelName,c=e.token,o=Object(r.useState)([]),i=Object(s.a)(o,2),h=i[0],p=i[1],x=Object(r.useState)(!1),k=Object(s.a)(x,2),g=k[0],m=k[1],w=v(),C=t(),N=C.ready,y=C.tracks;return Object(r.useEffect)((function(){w.setClientRole("host")}),[]),Object(r.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w.on("user-published",function(){var e=Object(d.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.subscribe(t,n);case 2:console.log("subscribe success"),"video"===n&&p((function(e){return[].concat(Object(l.a)(e),[t])})),"audio"===n&&(null===(r=t.audioTrack)||void 0===r||r.play());case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),w.on("user-unpublished",(function(e,t){var n;(console.log("unpublished",e,t),"audio"===t)&&(null===(n=e.audioTrack)||void 0===n||n.stop());"video"===t&&p((function(t){return t.filter((function(t){return t.uid!==e.uid}))}))})),w.on("user-left",(function(e){console.log("leaving",e),p((function(t){return t.filter((function(t){return t.uid!==e.uid}))}))})),e.next=5,w.join("521fef790ec2421eb28596688693105f",t,c,null);case 5:if(!y){e.next=8;break}return e.next=8,w.publish([y[0],y[1]]);case 8:m(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();N&&y&&(console.log("init ready"),e(a))}),[a,w,N,y,c]),Object(b.jsxs)("div",{className:"App",children:[N&&y&&Object(b.jsx)(O,{tracks:y,setStart:m,setInCall:n}),g&&y&&Object(b.jsx)(f,{users:h,tracks:y})]})},x=function(e){var t=e.setInCall,n=e.setChannelName,r=e.setToken;return Object(b.jsxs)("form",{className:"join",children:[Object(b.jsx)("input",{type:"text",placeholder:"Enter Channel Name",onChange:function(e){return n(e.target.value)}}),Object(b.jsx)("input",{type:"text",placeholder:"Enter Channel Token",onChange:function(e){return r(e.target.value)}}),Object(b.jsx)("button",{onClick:function(e){e.preventDefault(),t(!0)},children:"Join"})]})},k=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(s.a)(c,2),i=o[0],u=o[1],l=Object(r.useState)(""),d=Object(s.a)(l,2),j=d[0],f=d[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"heading",children:"Agora Video Call Demo"}),n?Object(b.jsx)(p,{setInCall:a,channelName:i,token:j}):Object(b.jsx)(x,{setInCall:a,setChannelName:u,setToken:f})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),g()}},[[47,1,2]]]);
//# sourceMappingURL=main.c626420d.chunk.js.map