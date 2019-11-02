(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(60)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),i=a(12),o=a(2),s=a(11),m=a(13),u=a(14),d=a(16),_=a(15),p=a(17),E=(a(42),function(e){var t=e.imageUrl,a=e.title,n=e.categories,c=e.etaRange;return r.a.createElement("div",{className:"restaurant-card"},r.a.createElement("img",{src:t,alt:a,className:"restaurant-card__img"}),r.a.createElement("h2",{className:"restaurant-card__title"},a),r.a.createElement("div",{className:"restaurant-card__categories"},n.join(" \u2022 ")),r.a.createElement("div",{className:"restaurant-card__eta"},c))});E.defaultProps={categories:[],etaRange:""};var f=E,g=(a(43),function(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"lds-default"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),v=(a(44),function(e){var t=e.message;return r.a.createElement("div",{className:"error"},r.a.createElement("p",{className:"error__text"},"something wrong"),r.a.createElement("p",{className:"error__text"},t),r.a.createElement("a",{href:"/",className:"error__link"},"Go to main page"))});v.defaultProps={message:"Sorry, something went wrong"};var h=v,b=(a(45),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.loadRestaurants)(),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.props,t=e.restaurantsListData,a=e.error;return e.isLoading?r.a.createElement(g,null):a?r.a.createElement(h,{message:a}):r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"restaurant-list"},t.map(function(e){var t=e.uuid,a=e.title,n=e.heroImageUrl,c=e.categories,l=e.etaRange;return r.a.createElement(i.b,{to:t,key:t},r.a.createElement(f,{key:t,uuid:t,title:a,imageUrl:n,categories:c,etaRange:l?l.text:"20 - 30 min"}))})))}}]),t}(n.Component));b.defaultProps={restaurantsListData:[],error:null,isLoading:!1};var N="https://mate-uber-eats-api.herokuapp.com/api/v1/",O={SAVE_RESTAURANTS:"SAVE_RESTAURANTS",SAVE_RESTAURANT_PAGE:"SAVE_RESTAURANT_PAGE",SET_LOAD_RESTAURANTS_ERROR:"SET_LOAD_RESTAURANTS_ERROR",START_LOADING:"START_LOADING",STOP_LOADING:"STOP_LOADING",SET_ORDER:"SET_ORDER",SET_MODAL_WINDOW:"SET_MODAL_WINDOW",SET_ALT_DATA_MODAL_WINDOW:"SET_ALT_DATA_MODAL_WINDOW"},y=function(e){return{type:O.SET_LOAD_RESTAURANTS_ERROR,payload:e}},S=function(){return{type:O.START_LOADING}},w=function(){return{type:O.STOP_LOADING}},A=function(e){return{type:O.SET_ORDER,payload:e}},D=function(e){return{type:O.SET_MODAL_WINDOW,payload:e}},T=function(){return function(e){e(D(!1)),e(A(null)),e(y(null))}},k=a(10),j=a(5);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var P=function(e){return e},L=Object(j.a)(P,function(e){var t=e.restaurantsListData;if(!t)return[];var a=t.feedItems,n=t.storesMap;return a.map(function(e){var t=e.uuid;return n[t]})}),U=Object(j.a)(P,function(e){var t=e.restaurantPageData;if(!t)return[];var a=t.sectionsMap;return t.sections.map(function(e){return a[e]})}),M=Object(j.a)(P,U,function(e,t){var a=e.restaurantPageData;if(!a)return[];var n=a.entitiesMap;return t.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach(function(t){Object(k.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{itemUuids:e.itemUuids.map(function(e){return n[e]})})})}),C=Object(j.a)(P,function(e){return e.restaurantPageData}),I=Object(j.a)(P,function(e){var t=e.restaurantPageData;return t?t.priceBucket:[]}),W=Object(j.a)(P,function(e){return e.error}),x=Object(j.a)(P,function(e){return e.isLoading}),V=Object(j.a)(P,function(e){var t=e.order;return t||[]}),F=Object(j.a)(P,function(e){return e.showModalWindow}),G=Object(j.a)(P,function(e){return e.orderAmount}),z=Object(j.a)(P,function(e){var t=e.restaurantPageData;return t?t.currencyCode:[]}),B=Object(j.a)(P,function(e){return e.altDataModalWindow}),K={loadRestaurants:function(){return function(e){e(S()),fetch("".concat(N,"restaurants/")).then(function(e){return e.json()}).then(function(t){var a=t.data;return e(function(e){return{type:O.SAVE_RESTAURANTS,payload:e}}(a))}).catch(function(t){return e(y(t.message))}).finally(function(){return e(w())})}}},J=Object(o.b)(function(e){return{restaurantsListData:L(e),error:W(e),isLoading:x(e)}},K)(b),Q=a(26),X=a.n(Q),Y=(a(47),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={isFocused:!1},a.handleFocus=function(){return a.setState({isFocused:!0})},a.handleBlur=function(){return a.setState({isFocused:!1})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.iconUrl,a=e.value,n=e.onChange,c=e.type,l=e.placeholder,i=e.name,o=e.className,s=e.isSmall,m=e.label,u=this.state.isFocused,d=X()("control__input-wrapper",Object(k.a)({"control__input-wrapper--focused":u},o,!!o)),_=X()("control__input",{"control__input--small":s,"control__input--time":"time"===c});return r.a.createElement("label",{htmlFor:"control",className:"control"},m&&r.a.createElement("p",{className:"control__label"},m),r.a.createElement("div",{className:d},!!t&&r.a.createElement("img",{src:t,alt:l,className:"control__icon"}),r.a.createElement("input",{id:"control",type:c,value:a,onChange:n,onFocus:this.handleFocus,onBlur:this.handleBlur,name:i,placeholder:l,className:_})))}}]),t}(n.PureComponent));Y.defaultProps={iconUrl:"",type:"text",placeholder:"",className:"",isSmall:!0,label:""};var q=Y,H=(a(48),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={address:"",time:"",search:"",isMobileSearchVisible:!1,isMobileDeliveryInfoVisible:!1},a.handleChange=function(e){var t=e.target;a.setState(Object(k.a)({},t.name,t.value))},a.toggleSearch=function(){return a.setState(function(e){return{isMobileSearchVisible:!e.isMobileSearchVisible,isMobileDeliveryInfoVisible:!1}})},a.toggleDeliveryInfo=function(){return a.setState(function(e){return{isMobileDeliveryInfoVisible:!e.isMobileDeliveryInfoVisible,isMobileSearchVisible:!1}})},a.closeMobile=function(){return a.setState({isMobileDeliveryInfoVisible:!1,isMobileSearchVisible:!1})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.address,a=e.time,n=e.search,c=e.isMobileDeliveryInfoVisible,l=e.isMobileSearchVisible;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header__inner"},r.a.createElement(i.b,{to:"/"},r.a.createElement("img",{className:"header__logo",src:"./images/logo.svg",alt:"Uber Eats"})),r.a.createElement("div",{className:"header__delivery-info"},r.a.createElement(q,{name:"address",value:t,onChange:this.handleChange,placeholder:"Address",iconUrl:"./images/place.svg"}),r.a.createElement(q,{name:"time",value:a,onChange:this.handleChange,placeholder:"Time",iconUrl:"",type:"time"})),r.a.createElement(q,{name:"search",value:n,onChange:this.handleChange,placeholder:"Search",iconUrl:"./images/search.svg",className:"header__search"}),r.a.createElement("div",{className:"header__toogle-buttons"},r.a.createElement("button",{onClick:this.toggleDeliveryInfo,type:"button",className:"header__toogle-btn"},r.a.createElement("img",{src:"./images/place.svg",alt:"place icon",className:"control__icon"})),r.a.createElement("button",{onClick:this.toggleSearch,type:"button",className:"header__toogle-btn"},r.a.createElement("img",{src:"./images/search.svg",alt:"search icon",className:"control__icon"}))),r.a.createElement("span",{className:"header__link"},"Sign In")),(l||c)&&r.a.createElement("div",{className:"header__mobile-controls mobile-controls"},l&&r.a.createElement(q,{label:"Find",name:"search",value:n,onChange:this.handleChange,placeholder:"Search",iconUrl:"./images/search.svg",isSmall:!1}),c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{label:"When",name:"time",value:a,onChange:this.handleChange,placeholder:"Time",iconUrl:"",type:"time",isSmall:!1}),r.a.createElement(q,{label:"To",name:"address",value:t,onChange:this.handleChange,placeholder:"Address",iconUrl:"./images/place.svg",isSmall:!1})),r.a.createElement("button",{onClick:this.closeMobile,type:"button",className:"mobile-controls__close"},r.a.createElement("img",{src:"./images/close.svg",alt:"search icon"})))))}}]),t}(n.Component)),Z=(a(49),function(e){var t=e.name,a=e.value,n=e.onSelect,c=e.options,l=e.iconUrl;return r.a.createElement("div",{className:"select"},r.a.createElement("select",{name:t,defaultValue:a,onChange:n,className:"select__input"},c.map(function(e){var t=e.value,a=e.label;return r.a.createElement("option",{value:t,key:t},a)})),!!l&&r.a.createElement("img",{className:"select__icon",src:l,alt:"select icon"}),r.a.createElement("img",{className:"select__arrow",src:"./images/arrow-down.svg",alt:"arrow down"}))});Z.defaultProps={onSelect:function(){},options:[],iconUrl:""};var $=Z,ee=(a(50),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"footer__top-part"},r.a.createElement("div",{className:"footer__main"},r.a.createElement("div",{className:"footer__logo-container"},r.a.createElement("img",{className:"footer__logo",src:"./images/logo-white.svg",alt:"Uber Eats"}),r.a.createElement($,{name:"language",options:[{value:"en",label:"English"},{value:"ua",label:"Ukrainian"}],value:"en",iconUrl:"./images/world.svg"})),r.a.createElement("div",{className:"footer__mobile-apps"},r.a.createElement("a",{className:"footer__mobile-app",href:"# "},r.a.createElement("img",{src:"./images/app-store.png",alt:"App Store"})),r.a.createElement("a",{className:"footer__mobile-app",href:"# "},r.a.createElement("img",{src:"./images/google-play.png",alt:"Google Play"})))),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{href:"# ",className:"links__link links__link--intended"},"About UberEats"),r.a.createElement("a",{href:"# ",className:"links__link"},"Read our blog"),r.a.createElement("a",{href:"# ",className:"links__link"},"Sign up to deliver"),r.a.createElement("a",{href:"# ",className:"links__link"},"Add your restaurant")),r.a.createElement("div",{className:"footer__top-links"},r.a.createElement("a",{href:"# ",className:"links__link links__link--intended"},"Get help"),r.a.createElement("a",{href:"# ",className:"links__link"},"Read FAQs"),r.a.createElement("a",{href:"# ",className:"links__link"},"View all cities"))),r.a.createElement("div",{className:"footer__bottom-part"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2019 Uber Technologies Inc."),r.a.createElement("div",{className:"footer__misc"},r.a.createElement("div",{className:"footer__bottom-links links"},r.a.createElement("a",{href:"# ",className:"links__link"},"Privacy policy"),r.a.createElement("a",{href:"# ",className:"links__link"},"Terms of  use"),r.a.createElement("a",{href:"# ",className:"links__link"},"Pricing")),r.a.createElement("div",{className:"footer__social social"},r.a.createElement("a",{href:"# ",className:"social__link"},r.a.createElement("img",{src:"./images/fb.svg",alt:"facebook"})),r.a.createElement("a",{href:"# ",className:"social__link"},r.a.createElement("img",{src:"./images/tw.svg",alt:"twitter"})),r.a.createElement("a",{href:"# ",className:"social__link"},r.a.createElement("img",{src:"./images/ig.svg",alt:"instagram"})))))))}),te=(a(51),function(e){var t=e.title,a=e.imageUrl,n=e.description,c=e.price,l=e.restaurantCurency,i=e.uuid,o=e.createOrder,s=e.setAltData,m=a||"./images/no_image.png",u=t||"no-image icon";return r.a.createElement("div",{id:i,className:"card",onClick:function(e){o(e.target.id),s({title:t,imageUrl:a,itemDescription:n,price:c})},onKeyPress:function(e){return o(e.target.id)},role:"presentation"},r.a.createElement("div",{id:i,className:"card__description"},r.a.createElement("div",{id:i,className:"card__description-wrapper"},r.a.createElement("p",{id:i},t),r.a.createElement("p",{id:i,className:"card__description-info"},n)),r.a.createElement("p",{id:i},"".concat(l).concat(c))),r.a.createElement("div",{className:"card__wrapper-img"},r.a.createElement("img",{id:i,className:"card__img",src:m,alt:u})))});te.defaultProps={imageUrl:"",description:"",restaurantCurency:""};var ae=Object(o.b)(function(e){return{restaurantCurency:I(e)}},function(e){return{createOrder:function(t){return e(function(e){return function(t){t(D(!0)),t(S()),fetch("".concat(N,"menu-items/").concat(e)).then(function(e){return e.json()}).then(function(e){var a=e.data;return t(A(a))}).catch(function(e){return t(y(e.message))}).finally(function(){return t(w())})}}(t))},setAltData:function(t){return e(function(e){return{type:O.SET_ALT_DATA_MODAL_WINDOW,payload:e}}(t))}}})(te),ne=(a(52),Object(o.b)(function(e){return{restaurantItems:M(e)}})(function(e){var t=e.category,a=e.restaurantItems,n=t.title,c=t.uuid,l=a.find(function(e){return e.uuid===t.uuid}).itemUuids;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title-categories"},n),r.a.createElement("section",{id:c,className:"section"},l.map(function(e){return r.a.createElement(ae,Object.assign({},e,{key:e.uuid}))})))})),re=(a(53),function(e){var t=e.loadRestaurantPage,a=e.restaurantPageData,c=e.restaurantSections,l=e.match.params;Object(n.useEffect)(function(){t(l.uuid),window.scrollTo(0,0)},[l.uuid,t]);var i=function(e){var t=e.slice(2),a=document.getElementById(t).getBoundingClientRect();window.scrollTo({left:0,top:a.y+window.scrollY-170,behavior:"smooth"})};if(!a)return r.a.createElement(g,null);var o=a.uuid,s=a.title,m=a.heroImageUrls,u=a.categories,d=a.etaRange,_=a.location,p=m[m.length-1].url,E=m.reduce(function(e,t,a){var n="".concat(t.url," ").concat(t.width,"w");return a!==m.length-1&&(n="".concat(n,",")),"".concat(e).concat(n)},"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hero"},r.a.createElement("img",{className:"hero__img",srcSet:E,sizes:" (max-width: 320px) 240px, (max-width: 768px) 550px, (max-width: 1280px) 750px, (max-width: 1980px) 1080px, 750px ",src:p,alt:s}),r.a.createElement("div",{className:"wrapper-title"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",{id:o,className:"title__name"},s),r.a.createElement("div",{className:"title__categories"},u.join(" \u2022 ")),r.a.createElement("div",{className:"title__eta"},d||"20 - 30 min"),r.a.createElement("div",{className:"title__address"},"".concat(_.address," \u2022 "),r.a.createElement("span",{className:"title__more"},"More info")))),r.a.createElement("div",{className:"left-margin-block"}))),r.a.createElement("div",{className:"title-mobile"},r.a.createElement("h1",{id:o,className:"title-mobile__name"},s),r.a.createElement("div",{className:"title-mobile__categories"},u.join(" \u2022 ")),r.a.createElement("div",{className:"title-mobile__eta"},d||"20 - 30 min")),r.a.createElement("div",{className:"content"},r.a.createElement("nav",{className:"restoraunt-menu"},c.map(function(e){return r.a.createElement("span",{id:"m_".concat(e.uuid),className:"restoraunt-menu__item",key:e.uuid,onClick:function(e){return i(e.target.id)},onKeyPress:function(e){return i(e.target.id)},role:"presentation"},e.title)})),c.map(function(e){return r.a.createElement(ne,{category:e,key:e.uuid})})))});re.defaultProps={restaurantPageData:null,restaurantSections:[]};var ce={loadRestaurantPage:function(e){return function(t){t(S()),fetch("".concat(N,"restaurants/").concat(e)).then(function(e){return e.json()}).then(function(e){var a=e.data;return t(function(e){return{type:O.SAVE_RESTAURANT_PAGE,payload:e}}(a))}).catch(function(e){return t(y(e.message))}).finally(function(){return t(w())})}}},le=Object(o.b)(function(e){return{restaurantPageData:C(e),restaurantSections:U(e),order:V(e)}},ce)(re),ie=a(32),oe=(a(54),function(e){var t=e.hideModalWindow,a=e.orderAmount,c=e.currencyCode,l=e.altPrice,i=Object(n.useState)(1),o=Object(ie.a)(i,2),s=o[0],m=o[1],u=a||l;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"counter"},r.a.createElement("div",{className:"counter__mobile"},"Quantity"),r.a.createElement("img",{className:"counter__button",src:"./images/button-minus.svg",alt:"icon minus",onClick:function(){s>1&&m(s-1)},onKeyPress:function(){return m(s+1)},role:"presentation"}),r.a.createElement("div",{className:"counter__item"},s),r.a.createElement("img",{className:"counter__button",src:"./images/button-plus.svg",alt:"icon plus",onClick:function(){return m(s+1)},onKeyPress:function(){return m(s+1)},role:"presentation"})),r.a.createElement("button",{type:"button",className:"button-order",onClick:t},r.a.createElement("div",{className:"button-order__wrapper-number"},r.a.createElement("span",{className:"button-order__number"},"Add ".concat(s," to order"))),r.a.createElement("span",{className:"button-order__amount"},"".concat((u*s).toFixed(2)," ").concat(c))))});oe.defaultProps={altPrice:0};var se={hideModalWindow:T},me=Object(o.b)(function(e){return{orderAmount:G(e),currencyCode:z(e)}},se)(oe),ue=(a(55),function(e){var t=e.option,a=t.title,n=t.uuid;return r.a.createElement("div",{className:"option"},r.a.createElement("div",{className:"option__checkbox"},r.a.createElement("input",{id:n,type:"checkbox",className:"option__checkbox-input"}),r.a.createElement("label",{htmlFor:n,className:"option__checkbox-title"},a)))}),de=(a(56),function(e){var t=e.customizations,a=t.title,n=t.maxPermitted,c=t.options,l=n||1;return r.a.createElement("div",{className:"customizations-sections"},r.a.createElement("div",{className:"customizations-sections__head"},r.a.createElement("div",{className:"modal__wrapper-content"},r.a.createElement("div",{className:"customizations-sections__title"},a),r.a.createElement("div",{className:"customizations-sections__count"},"Choose up to ".concat(l)))),r.a.createElement("div",{className:"customizations-sections__options"},r.a.createElement("div",{className:"modal__wrapper-content"},c.map(function(e){return r.a.createElement(ue,{option:e,key:e.uuid})}))))}),_e=(a(57),function(e){var t=e.hideModalWindow,a=e.order,n=e.isLoading,c=e.error,l=e.altData;if(n)return r.a.createElement(g,null);var i=c?l:a,o=i.imageUrl,s=i.title,m=i.itemDescription,u=i.customizationsList,d=void 0===u?[]:u,_=o||"./images/no_image.png",p=s||"no-image icon";return r.a.createElement("aside",{className:"modal"},r.a.createElement("div",{className:"modal-window"},r.a.createElement("div",{className:"modal-window__wrapper-img"},r.a.createElement("img",{className:"modal-window__img",src:_,alt:p})),r.a.createElement("div",{className:"modal__wrapper-content"},r.a.createElement("p",{className:"modal-window__title"},s),r.a.createElement("p",{className:"modal-window__description"},m)),d.map(function(e){return r.a.createElement(de,{customizations:e,key:e.uuid})}),r.a.createElement("div",{className:"modal__wrapper-content"},r.a.createElement("div",{className:"modal-window__footer"},r.a.createElement(me,{altPrice:l.price}))),r.a.createElement("div",{onClick:t,onKeyPress:t,role:"presentation"},r.a.createElement("img",{className:"modal-window__button-close",src:"./images/button-close.svg",alt:"button close",title:"close"}))))});_e.defaultProps={error:null,isLoading:!1,order:[]};var pe={hideModalWindow:T},Ee=Object(o.b)(function(e){return{order:V(e),error:W(e),isLoading:x(e),altData:B(e)}},pe)(_e),fe=(a(58),Object(o.b)(function(e){return{order:V(e),modalWindow:F(e)}})(function(e){var t=e.modalWindow;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement("main",{className:"page"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:J}),r.a.createElement(s.a,{path:"/:uuid",component:le}))),r.a.createElement(ee,null),t&&r.a.createElement(Ee,null))})),ge=a(18),ve=a(31);function he(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function be(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?he(a,!0).forEach(function(t){Object(k.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):he(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Ne={restaurantsListData:null,restaurantPageData:null,isLoading:!1,error:null,order:null,showModalWindow:!1,orderAmount:0,altDataModalWindow:{title:"",imageUrl:"",itemDescription:"",price:0}};var Oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ge.c,ye=[ve.a],Se=Object(ge.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.SAVE_RESTAURANTS:return be({},e,{error:null,restaurantsListData:t.payload,restaurantPageData:null});case O.SAVE_RESTAURANT_PAGE:return be({},e,{error:null,restaurantPageData:t.payload});case O.SET_LOAD_RESTAURANTS_ERROR:return be({},e,{error:t.payload,restaurantsListData:null,order:null});case O.START_LOADING:return be({},e,{isLoading:!0});case O.STOP_LOADING:return be({},e,{isLoading:!1});case O.SET_ORDER:var a=t.payload;return be({},e,{order:a,orderAmount:a?a.price:0});case O.SET_MODAL_WINDOW:return be({},e,{showModalWindow:t.payload});case O.SET_ALT_DATA_MODAL_WINDOW:return be({},e,{altDataModalWindow:t.payload});default:return e}},Oe(ge.a.apply(void 0,ye)));a(59);l.a.render(r.a.createElement(o.a,{store:Se},r.a.createElement(i.a,null,r.a.createElement(fe,null))),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.32f4474b.chunk.js.map