/*! For license information please see 1204.dd60e730.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunknobak_design_system=self.webpackChunknobak_design_system||[]).push([[1204],{"./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/getUrl.js":module=>{module.exports=function(url,options){return options||(options={}),url?(url=String(url.__esModule?url.default:url),/^['"].*['"]$/.test(url)&&(url=url.slice(1,-1)),options.hash&&(url+=options.hash),/["'() \t\n]|(%20)/.test(url)||options.needQuotes?'"'.concat(url.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):url):url}},"./node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/.pnpm/rci@0.1.0_react-dom@18.2.0_react@18.2.0/node_modules/rci/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nw:()=>CodeInput,R4:()=>getSegmentCssWidth});var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function __spreadArray(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))}var getSelectionState=function(input){return[+input.selectionStart,+input.selectionEnd]},ZERO=[0,0],eq=function(a,b){return a[0]===b[0]&&a[1]===b[1]},useCodeInput=function(inputRef){var _a=(0,react.useState)(ZERO),selection=_a[0],setSelection=_a[1],previousRef=(0,react.useRef)(),handler=function(_a){var inputRef=_a.inputRef,previousRef=_a.previousRef,setSelection=_a.setSelection;return(0,react.useCallback)((function(_a){var type=_a.type,input=inputRef.current,previous=previousRef.current;if(previous&&input){var direction=input.selectionDirection,value=input.value,current=getSelectionState(input),save=function(selection){if(eq(selection,previous)){if(eq(selection,ZERO))return;if(eq(selection,getSelectionState(input)))return}previousRef.current=selection,setSelection((function(state){return eq(state,selection)?state:selection})),input.setSelectionRange.apply(input,__spreadArray(__spreadArray([],selection,!1),[direction||void 0],!1))};if("selectionchange"===type&&document.activeElement!==input)return save([value.length,value.length]);save(function(_a){var _b,current=_a.current,previous=_a.previous,value=_a.value;if(current[0]!==current[1])return null;if("number"!=typeof current[0])return null;if("number"!=typeof current[1])return null;var start=current[0],end=current[1];return start>0&&previous[0]===start&&previous[1]===start+1?[start-1,end]:(null===(_b=value[start])||void 0===_b?void 0:_b.length)?[start,end+1]:null}({previous,current,direction,value})||current)}}),[inputRef,previousRef,setSelection])}({inputRef,previousRef,setSelection});return function(_a){var inputRef=_a.inputRef,previousRef=_a.previousRef,handler=_a.handler;(0,react.useLayoutEffect)((function(){var input=inputRef.current;void 0===previousRef.current&&input&&(previousRef.current=getSelectionState(input));var handlerRef=handler;return null==input||input.addEventListener("input",handlerRef),document.addEventListener("selectionchange",handlerRef),function(){null==input||input.removeEventListener("input",handlerRef),document.removeEventListener("selectionchange",handlerRef)}}),[inputRef,handler,previousRef])}({inputRef,previousRef,handler}),selection},jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const LengthContext=react.createContext(6),useLengthContext=()=>(0,react.useContext)(LengthContext),SelectionContext=react.createContext(null),Context=props=>(0,jsx_runtime.jsx)(LengthContext.Provider,{value:props.length,children:(0,jsx_runtime.jsx)(SelectionContext.Provider,{value:props.selection,children:props.children})}),getSegmentState=(index,[start,end])=>"number"!=typeof start||"number"!=typeof end?null:start===end&&start===index?"cursor":index>=start&&index<end?"selected":null,getSegmentPosition=(index,[start,end])=>index<start?-1:index>=end?1:0,Absolute=props=>(0,jsx_runtime.jsx)("div",{...props,"aria-hidden":!0,style:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",justifyContent:"space-between",zIndex:-1,...props.style}}),handleScroll=event=>{event.preventDefault(),event.stopPropagation(),event.currentTarget.scrollTop=0,event.currentTarget.scrollLeft=0},InputScrollWrapper=props=>(0,jsx_runtime.jsx)("div",{...props,onScroll:handleScroll,style:{...props.style,height:"100%",overflow:"hidden"}}),Input=react.forwardRef(((props,ref)=>{const length=useLengthContext();return(0,jsx_runtime.jsx)("input",{...props,width:void 0,minLength:length,maxLength:length,ref,style:{...props.style,font:"inherit",letterSpacing:"inherit",textIndent:"inherit",background:"transparent",appearance:"none",display:"block",width:props.width||"200%",padding:"0",margin:"0",border:"0 solid transparent",outline:"none"}})})),SegmentRenderer=props=>{const selection=(0,react.useContext)(SelectionContext),length=useLengthContext(),_selection=selection,segmentArray=((size,selection)=>Array(size).fill(null).map(((_,index)=>({state:getSegmentState(index,selection),position:getSegmentPosition(index,selection)}))))(length,_selection),content=segmentArray.map((({state,position},index)=>props.children({index,state,position,selection:_selection})));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:content})};const CodeInput=({renderSegment,length=6,fontFamily="'SF Mono', SFMono-Regular, ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', monospace",fontSize="2rem",padding="0.25rem",paddingY=padding,paddingX=padding,spacing="0.5rem",characterWidth="1ch",style,className,inputClassName,inputStyle,segmentWidth=`calc(${characterWidth} + ${paddingX} * 2)`,inputWidth=`calc(100% + ${segmentWidth} + ${spacing})`,inputRef,scrollWrapperClassName,segmentWrapperClassName,rootProps,...rest})=>{const selection=useCodeInput(inputRef),rootStyle={...style,position:"relative",width:`calc(${segmentWidth} * ${length} + ${spacing} * ${length-1})`,fontFamily,fontSize,textIndent:paddingX,letterSpacing:`calc(${paddingX} * 2 + ${spacing})`,lineHeight:`calc(${fontSize} + ${paddingY} * 2)`,zIndex:0},inputProps={className:inputClassName,style:inputStyle,ref:inputRef};return(0,jsx_runtime.jsx)(Context,{length,selection,children:(0,jsx_runtime.jsxs)("div",{...rootProps,className,style:rootStyle,children:[(0,jsx_runtime.jsx)(Absolute,{className:segmentWrapperClassName,children:(0,jsx_runtime.jsx)(SegmentRenderer,{children:renderSegment})}),(0,jsx_runtime.jsx)(InputScrollWrapper,{className:scrollWrapperClassName,onMouseDownCapture:event=>{if(0!==event.button||event.ctrlKey)return;if(event.shiftKey||event.metaKey)return;if(!(event.currentTarget instanceof HTMLElement))return;if(!(inputRef.current instanceof HTMLInputElement))return;event.stopPropagation(),event.preventDefault();const{left,width}=event.currentTarget.getBoundingClientRect(),eventX=event.clientX-left,index=Math.floor(eventX/width*length);document.activeElement!==inputRef.current&&inputRef.current?.focus(),inputRef.current?.setSelectionRange(index,index+1)},onDoubleClickCapture:()=>{inputRef.current?.setSelectionRange(0,length)},children:(0,jsx_runtime.jsx)(Input,{width:inputWidth,...rest,...inputProps})})]})})},getSegmentCssWidth=paddingX=>`calc(1ch + ${paddingX} * 2)`},"./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./node_modules/.pnpm/use-is-focused@0.0.1_react-dom@18.2.0_react@18.2.0/node_modules/use-is-focused/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>useIsFocused});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),useIsFocused=function(inputRef){var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0),isFocused=_a[0],setIsFocused=_a[1],isFocusedRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isFocused);return isFocusedRef.current=isFocused,(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var input=inputRef.current;if(input){var onFocus=function(){return setIsFocused(!0)},onBlur=function(){return setIsFocused(!1)};return input.addEventListener("focus",onFocus),input.addEventListener("blur",onBlur),void 0===isFocusedRef.current&&setIsFocused(document.activeElement===input),function(){input.removeEventListener("focus",onFocus),input.removeEventListener("blur",onBlur)}}}),[inputRef,setIsFocused]),isFocused}}}]);