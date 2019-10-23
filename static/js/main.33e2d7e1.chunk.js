(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,a,t){e.exports=t(62)},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),c=t.n(l),s=t(17),i=t(15),o=t(6),u=(t(43),t(18)),m=t(31),d=t(9),p="https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/",f={SAVE_RESTAURANTS:"SAVE_RESTAURANTS",SAVE_RESTAURANT_PAGE:"SAVE_RESTAURANT_PAGE",SET_LOAD_RESTAURANTS_ERROR:"SET_LOAD_RESTAURANTS_ERROR",START_LOADING:"START_LOADING",STOP_LOADING:"STOP_LOADING"},E=function(e){return{type:f.SET_LOAD_RESTAURANTS_ERROR,payload:e}},_=function(){return{type:f.START_LOADING}},g=function(){return{type:f.STOP_LOADING}};function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function v(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(t,!0).forEach(function(a){Object(d.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var b={restaurantsListData:null,restaurantPageData:null,isLoading:!1,error:null};var N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,O=[m.a],y=Object(u.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case f.SAVE_RESTAURANTS:return v({},e,{error:null,restaurantsListData:a.payload,restaurantPageData:null});case f.SAVE_RESTAURANT_PAGE:return v({},e,{error:null,restaurantPageData:a.payload});case f.SET_LOAD_RESTAURANTS_ERROR:return v({},e,{error:a.payload,restaurantsListData:null,restaurantPage:null});case f.START_LOADING:return v({},e,{isLoading:!0});case f.STOP_LOADING:return v({},e,{isLoading:!1});default:return e}},N(u.a.apply(void 0,O))),S=t(10),j=t(11),A=t(13),k=t(12),R=t(14),P=(t(44),function(e){var a=e.imageUrl,t=e.title,n=e.categories,l=e.etaRange;return r.a.createElement("div",{className:"restaurant-card"},r.a.createElement("img",{src:a,alt:t,className:"restaurant-card__img"}),r.a.createElement("h2",{className:"restaurant-card__title"},t),r.a.createElement("div",{className:"restaurant-card__categories"},n.join(" \u2022 ")),r.a.createElement("div",{className:"restaurant-card__eta"},l))});P.defaultProps={categories:[],etaRange:""};var D=P,T=(t(45),t(46),function(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"lds-default"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),w=(t(47),function(e){var a=e.message;return r.a.createElement("div",{className:"error"},r.a.createElement("p",{className:"error__text"},a),r.a.createElement("a",{href:"/",className:"error__link"},"Go to Home"))});w.defaultProps={message:"Sorry, something went wrong"};var U=w,C=function(e){function a(){return Object(S.a)(this,a),Object(A.a)(this,Object(k.a)(a).apply(this,arguments))}return Object(R.a)(a,e),Object(j.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.loadRestaurants)()}},{key:"render",value:function(){var e=this.props,a=e.restaurantsListData,t=e.error;return e.isLoading?r.a.createElement(T,null):t?r.a.createElement(U,{message:t}):r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"restaurant-list"},a.map(function(e){var a=e.uuid,t=e.title,n=e.heroImageUrl,l=e.categories,c=e.etaRange;return r.a.createElement(s.b,{to:a,key:a},r.a.createElement(D,{key:a,uuid:a,title:t,imageUrl:n,categories:l,etaRange:c?c.text:"20 - 30 min"}))})))}}]),a}(n.Component);C.defaultProps={restaurantsListData:[],error:null,isLoading:!1};var L=t(16);function I(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}var V=function(e){return e},M=Object(L.a)(V,function(e){var a=e.restaurantsListData;if(!a)return[];var t=a.feedItems,n=a.storesMap;return t.map(function(e){var a=e.uuid;return n[a]})}),x=Object(L.a)(V,function(e){var a=e.restaurantPageData;if(!a)return[];var t=a.sectionsMap;return a.sections.map(function(e){return t[e]})}),G=Object(L.a)(V,x,function(e,a){var t=e.restaurantPageData;if(!t)return[];var n=t.entitiesMap;return a.map(function(e){return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?I(t,!0).forEach(function(a){Object(d.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},e,{itemUuids:e.itemUuids.map(function(e){return n[e]})})})}),F=Object(L.a)(V,function(e){return e.restaurantPageData}),B=Object(L.a)(V,function(e){var a=e.restaurantPageData;return a?a.priceBucket:[]}),J=Object(L.a)(V,function(e){return e.error}),X=Object(L.a)(V,function(e){return e.isLoading}),z={loadRestaurants:function(){return function(e){e(_()),fetch(p).then(function(e){return e.json()}).then(function(a){var t=a.data;return e(function(e){return{type:f.SAVE_RESTAURANTS,payload:e}}(t))}).catch(function(a){return e(E(a.message))}).finally(function(){return e(g())})}}},H=Object(o.b)(function(e){return{restaurantsListData:M(e),error:J(e),isLoading:X(e)}},z)(C),Q=t(26),W=t.n(Q),q=(t(49),function(e){function a(){var e,t;Object(S.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(A.a)(this,(e=Object(k.a)(a)).call.apply(e,[this].concat(l)))).state={isFocused:!1},t.inputRef=Object(n.createRef)(),t.handleFocus=function(){return t.setState({isFocused:!0})},t.handleBlur=function(){return t.setState({isFocused:!1})},t.focus=function(){return t.inputRef.current.focus()},t}return Object(R.a)(a,e),Object(j.a)(a,[{key:"render",value:function(){var e=this.props,a=e.iconUrl,t=e.value,n=e.onChange,l=e.type,c=e.placeholder,s=e.name,i=e.className,o=e.isSmall,u=e.label,m=this.state.isFocused,p=W()("control__input-wrapper",Object(d.a)({"control__input-wrapper--focused":m},i,!!i)),f=W()("control__input",{"control__input--small":o,"control__input--time":"time"===l});return r.a.createElement("label",{htmlFor:"control",className:"control"},u&&r.a.createElement("p",{className:"control__label"},u),r.a.createElement("div",{className:p},!!a&&r.a.createElement("img",{src:a,alt:c,className:"control__icon"}),r.a.createElement("input",{id:"control",ref:this.inputRef,type:l,value:t,onChange:n,onFocus:this.handleFocus,onBlur:this.handleBlur,name:s,placeholder:c,className:f})))}}]),a}(n.PureComponent));q.defaultProps={iconUrl:"",type:"text",placeholder:"",className:"",isSmall:!0,label:""};var K=q,Y=(t(50),function(e){function a(){var e,t;Object(S.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(A.a)(this,(e=Object(k.a)(a)).call.apply(e,[this].concat(r)))).state={address:"",time:"",search:"",isMobileSearchVisible:!1,isMobileDeliveryInfoVisible:!1},t.handleChange=function(e){var a=e.target;t.setState(Object(d.a)({},a.name,a.value))},t.toggleSearch=function(){return t.setState(function(e){return{isMobileSearchVisible:!e.isMobileSearchVisible,isMobileDeliveryInfoVisible:!1}})},t.toggleDeliveryInfo=function(){return t.setState(function(e){return{isMobileDeliveryInfoVisible:!e.isMobileDeliveryInfoVisible,isMobileSearchVisible:!1}})},t.closeMobile=function(){return t.setState({isMobileDeliveryInfoVisible:!1,isMobileSearchVisible:!1})},t}return Object(R.a)(a,e),Object(j.a)(a,[{key:"render",value:function(){var e=this.state,a=e.address,t=e.time,n=e.search,l=e.isMobileDeliveryInfoVisible,c=e.isMobileSearchVisible;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header__inner"},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{className:"header__logo",src:"./images/logo.svg",alt:"Uber Eats"})),r.a.createElement("div",{className:"header__delivery-info"},r.a.createElement(K,{name:"address",value:a,onChange:this.handleChange,placeholder:"Address",iconUrl:"./images/place.svg"}),r.a.createElement(K,{name:"time",value:t,onChange:this.handleChange,placeholder:"Time",iconUrl:"",type:"time"})),r.a.createElement(K,{name:"search",value:n,onChange:this.handleChange,placeholder:"Search",iconUrl:"./images/search.svg",className:"header__search"}),r.a.createElement("div",{className:"header__toogle-buttons"},r.a.createElement("button",{onClick:this.toggleDeliveryInfo,type:"button",className:"header__toogle-btn"},r.a.createElement("img",{src:"./images/place.svg",alt:"place icon",className:"control__icon"})),r.a.createElement("button",{onClick:this.toggleSearch,type:"button",className:"header__toogle-btn"},r.a.createElement("img",{src:"./images/search.svg",alt:"search icon",className:"control__icon"}))),r.a.createElement(s.b,{to:"/",className:"header__link"},"Sign In")),(c||l)&&r.a.createElement("div",{className:"header__mobile-controls mobile-controls"},c&&r.a.createElement(K,{label:"Find",name:"search",value:n,onChange:this.handleChange,placeholder:"Search",iconUrl:"./images/search.svg",isSmall:!1}),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{label:"Where",name:"address",value:a,onChange:this.handleChange,placeholder:"Address",iconUrl:"./images/place.svg",isSmall:!1}),r.a.createElement(K,{label:"To",name:"time",value:t,onChange:this.handleChange,placeholder:"Time",iconUrl:"",type:"time",isSmall:!1})),r.a.createElement("button",{onClick:this.closeMobile,type:"button",className:"mobile-controls__close"},r.a.createElement("img",{src:"./images/close.svg",alt:"search icon"})))))}}]),a}(n.Component)),Z=(t(51),function(e){var a=e.name,t=e.value,n=e.onSelect,l=e.options,c=e.iconUrl;return r.a.createElement("div",{className:"select"},r.a.createElement("select",{name:a,defaultValue:t,onChange:n,className:"select__input"},l.map(function(e){var a=e.value,t=e.label;return r.a.createElement("option",{value:a,key:a},t)})),!!c&&r.a.createElement("img",{className:"select__icon",src:c,alt:"select icon"}),r.a.createElement("img",{className:"select__arrow",src:"./images/arrow-down.svg",alt:"arrow down"}))});Z.defaultProps={onSelect:function(){},options:[],iconUrl:""};var $=Z,ee=(t(52),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"footer__top-part"},r.a.createElement("div",{className:"footer__main"},r.a.createElement("div",{className:"footer__logo-container"},r.a.createElement("img",{className:"footer__logo",src:"./images/logo-white.svg",alt:"Uber Eats"}),r.a.createElement($,{name:"language",options:[{value:"en",label:"English"},{value:"ua",label:"Ukrainian"}],value:"en",iconUrl:"./images/world.svg"})),r.a.createElement("div",{className:"footer__mobile-apps"},r.a.createElement("a",{className:"footer__mobile-app",href:"# "},r.a.createElement("img",{src:"./images/app-store.png",alt:"App Store"})),r.a.createElement("a",{className:"footer__mobile-app",href:"# "},r.a.createElement("img",{src:"./images/google-play.png",alt:"Google Play"})))),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{href:"# ",className:"links__link links__link--intended"},"About UberEats"),r.a.createElement("a",{href:"# ",className:"links__link"},"Read our blog"),r.a.createElement("a",{href:"# ",className:"links__link"},"Sign up to deliver"),r.a.createElement("a",{href:"# ",className:"links__link"},"Add your restaurant")),r.a.createElement("div",{className:"footer__top-links"},r.a.createElement("a",{href:"# ",className:"links__link links__link--intended"},"Get help"),r.a.createElement("a",{href:"# ",className:"links__link"},"Read FAQs"),r.a.createElement("a",{href:"# ",className:"links__link"},"View all cities"))),r.a.createElement("div",{className:"footer__bottom-part"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2019 Uber Technologies Inc."),r.a.createElement("div",{className:"footer__misc"},r.a.createElement("div",{className:"footer__bottom-links links"},r.a.createElement("a",{href:"# ",className:"links__link"},"Privacy policy"),r.a.createElement("a",{href:"# ",className:"links__link"},"Terms of  use"),r.a.createElement("a",{href:"# ",className:"links__link"},"Pricing")),r.a.createElement("div",{className:"footer__social social"},r.a.createElement("a",{href:"# ",className:"social__link"},r.a.createElement("img",{src:"./images/fb.svg",alt:"facebook"})),r.a.createElement("a",{href:"# ",className:"social__link"},r.a.createElement("img",{src:"./images/tw.svg",alt:"twitter"})),r.a.createElement("a",{href:"# ",className:"social__link"},r.a.createElement("img",{src:"./images/ig.svg",alt:"instagram"})))))))}),ae=(t(53),t(33)),te=t.n(ae),ne=(t(59),t(60),function(e){var a=e.title,t=e.imageUrl,n=e.description,l=e.price,c=e.restaurantCurency;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__description"},r.a.createElement("div",{className:"card__description-wrapper"},r.a.createElement("p",null,a),r.a.createElement("p",{className:"card__description-info"},n)),r.a.createElement("p",null,"".concat(c).concat(l))),t&&r.a.createElement("img",{className:"card__img",src:t,alt:a}))});ne.defaultProps={imageUrl:"",description:"",restaurantCurency:""};var re=Object(o.b)(function(e){return{restaurantCurency:B(e)}})(ne),le=Object(o.b)(function(e){return{restaurantItems:G(e)}})(function(e){var a=e.category,t=e.restaurantItems,n=a.title,l=a.uuid,c=t.find(function(e){return e.uuid===a.uuid}).itemUuids;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title-categories"},n),r.a.createElement("section",{id:l,className:"section"},c.map(function(e){return r.a.createElement(re,Object.assign({},e,{key:te()()}))})))}),ce=function(e){function a(){return Object(S.a)(this,a),Object(A.a)(this,Object(k.a)(a).apply(this,arguments))}return Object(R.a)(a,e),Object(j.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.loadRestaurantPage)(this.props.match.params.uuid),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.props,a=e.restaurantPageData,t=e.restaurantSections;if(!a)return r.a.createElement(T,null);var n=a.uuid,l=a.title,c=a.heroImageUrls,s=a.categories,i=a.etaRange,o=a.location,u=c[c.length-1].url,m=c.reduce(function(e,a,t){var n="".concat(a.url," ").concat(a.width,"w");return t!==c.length-1&&(n="".concat(n,",")),"".concat(e).concat(n)},"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hero"},r.a.createElement("img",{className:"hero__img",srcSet:m,sizes:" (max-width: 320px) 240px, (max-width: 768px) 550px, (max-width: 1280px) 750px, (max-width: 1980px) 1080px, 750px ",src:u,alt:l}),r.a.createElement("div",{className:"title"},r.a.createElement("h1",{id:n,className:"title__name"},l),r.a.createElement("div",{className:"title__categories"},s.join(" \u2022 ")),r.a.createElement("div",{className:"title__eta"},i||"20 - 30 min"),r.a.createElement("div",{className:"title__address"},"".concat(o.address," \u2022 "),r.a.createElement("a",{href:"# ",className:"title__more"},"More info")))),r.a.createElement("div",{className:"content"},r.a.createElement("nav",{className:"restoraunt-menu"},t.map(function(e){return r.a.createElement("a",{href:"#".concat(e.uuid),className:"restoraunt-menu__item",key:e.uuid},e.title)})),t.map(function(e){return r.a.createElement(le,{category:e,key:e.uuid})})))}}]),a}(n.PureComponent);ce.defaultProps={restaurantPageData:null,restaurantSections:[]};var se={loadRestaurantPage:function(e){return function(a){a(_()),fetch("".concat(p).concat(e)).then(function(e){return e.json()}).then(function(e){var t=e.data;return a(function(e){return{type:f.SAVE_RESTAURANT_PAGE,payload:e}}(t))}).catch(function(e){return a(E(e.message))}).finally(function(){return a(g())})}}},ie=Object(o.b)(function(e){return{restaurantPageData:F(e),restaurantSections:x(e)}},se)(ce),oe=function(){return r.a.createElement(o.a,{store:y},r.a.createElement(s.a,null,r.a.createElement(Y,null),r.a.createElement("main",{className:"page"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:H}),r.a.createElement(i.a,{path:"/:uuid",component:ie}))),r.a.createElement(ee,null)))};t(61);c.a.render(r.a.createElement(oe,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.33e2d7e1.chunk.js.map