(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(9),a=n.n(i),s=n(3),c=n(4),r=n(5),h=n(7),l=n(6),o=n(1),m=n.n(o),u=(n(14),n(2)),p=(n(15),n(0)),g=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={shift:0},t.handleScrollNext=function(){var e=t.props,n=e.images,i=e.itemWidth,a=e.frameSize,s=e.step,c=e.infinite,r=e.gap,h=t.state.shift,l=i*n.length+(r*n.length-r),o=a*(i+r)-r;t.setState({shift:h+(i+r)*s}),h+o===l&&c&&t.setState({shift:0})},t.handleScrollPrevious=function(){var e=t.props,n=e.images,i=e.itemWidth,a=e.frameSize,s=e.step,c=e.infinite,r=e.gap,h=t.state.shift,l=i*n.length+(r*n.length-r),o=a*(i+r)-r;h<=0&&c?t.setState({shift:l-o}):t.setState({shift:h-(i+r)*s})},t}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(){var t=this.props,e=t.images,n=t.itemWidth,i=t.frameSize,a=t.gap,s=this.state.shift,c=n*e.length+(a*e.length-a),r=i*(n+a)-a,h=s+r-c;c<s+r?this.setState({shift:s-h}):s<0&&this.setState({shift:0})}},{key:"render",value:function(){var t=this.props,e=t.images,n=t.itemWidth,i=t.frameSize,a=t.animationDuration,s=t.infinite,c=t.gap,r=this.state.shift,h=i*(n+c)-c,l=n*e.length+(c*e.length-c)-h,o={disabled:{disabled:!0},width:{width:"".concat(h,"px"),height:"".concat(n,"px")},widthImg:{width:"".concat(n,"px")},shift:{transform:"translateX(".concat(-r,"px)"),transition:"transform ".concat(a,"ms"),gap:c}};return Object(p.jsxs)("div",{className:"Carousel",children:[Object(p.jsx)("div",{className:"Carousel__container",style:o.width,children:Object(p.jsx)("ul",{className:"Carousel__list",style:o.shift,children:e.map((function(t){return Object(p.jsx)("li",{className:"list-Emojie",children:Object(p.jsx)("img",{src:t,alt:"emojie".concat(t.slice(-5,-4)),style:o.widthImg})},t.slice(-5,-4))}))})}),Object(p.jsxs)("div",{className:"Buttons__scroll",children:[Object(p.jsx)("button",Object(u.a)(Object(u.a)({type:"button",onClick:this.handleScrollPrevious},r<=0&&!s&&o.disabled),{},{children:Object(p.jsx)("span",{children:"Prev"})})),Object(p.jsx)("button",Object(u.a)(Object(u.a)({type:"button","data-cy":"next",onClick:this.handleScrollNext},r>=l&&!s&&o.disabled),{},{children:Object(p.jsx)("span",{children:"Next"})}))]})]})}}]),n}(m.a.Component),d=g,f=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1,gap:10,images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t.handleChange=function(e,n){var i=Object(s.a)({},n,+e.target.value);t.setState(i)},t.handleInfinite=function(){var e=t.state.infinite;t.setState({infinite:!e})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.itemWidth,i=e.frameSize,a=e.step,s=e.animationDuration,c=e.infinite,r=e.gap,h=e.images;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",h.length," images"]}),Object(p.jsx)(d,{images:h,step:a,frameSize:i,itemWidth:n,animationDuration:s,infinite:c,gap:r}),Object(p.jsxs)("form",{method:"get",className:"form",children:["Width:",Object(p.jsx)("input",{className:"input",type:"number",value:n,name:"itemWidth",min:"100",max:"200",onChange:function(e){return t.handleChange(e,"itemWidth")}}),"Frame Size:",Object(p.jsx)("input",{className:"input frameSizeInput",type:"number",value:i,name:"frameSize",onChange:function(e){return t.handleChange(e,"frameSize")},min:"1",max:h.length}),"Step:",Object(p.jsx)("input",{className:"input stepInput",type:"number",value:a,name:"frameSize",onChange:function(e){return t.handleChange(e,"step")},min:"1",max:h.length}),"Aimation:",Object(p.jsx)("input",{className:"input",type:"number",value:s,name:"animationDuration",onChange:function(e){return t.handleChange(e,"animationDuration")},min:"0"}),"Infinite:",Object(p.jsx)("input",{className:"input",type:"checkbox",name:"infinite",onChange:this.handleInfinite})]})]})}}]),n}(m.a.Component),j=f;a.a.render(Object(p.jsx)(j,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.351e2319.chunk.js.map