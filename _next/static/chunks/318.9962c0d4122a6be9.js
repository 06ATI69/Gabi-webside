"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{9318:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(7294),i={exports:{}};function d(){}function o(){}o.resetWarningCache=d,i.exports=function(){function e(e,t,n,a,i,d){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==d){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:d};return n.PropTypes=n,n}();var w=i.exports;let s=e=>!!e&&0!==e.length&&null!=e&&"string"==typeof e,r=({propertyId:e="",widgetId:t="",embedId:n="",basePath:a="tawk.to"})=>{if(n.length){if(!document.getElementById(n)){let e=document.createElement("div");e.id=n,document.body.appendChild(e)}window.Tawk_API.embedded=n}let i=document.createElement("script");i.async=!0,i.src=`https://embed.${a}/${e}/${t}`,i.charset="UTF-8",i.setAttribute("crossorigin","*");let d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(i,d)},h=(0,a.forwardRef)((e,t)=>{(0,a.useEffect)(()=>{n()},[]);let n=()=>{if(!s(e.propertyId)){console.error("[Tawk-messenger-react warn]: You didn't specified 'propertyId' property in the plugin.");return}if(!s(e.widgetId)){console.error("[Tawk-messenger-react warn]: You didn't specified 'widgetId' property in the plugin.");return}window&&document&&i()},i=()=>{window.Tawk_API=window.Tawk_API||{},window.Tawk_LoadStart=new Date,r({propertyId:e.propertyId,widgetId:e.widgetId,embedId:e.embedId,basePath:e.basePath}),e.customStyle&&"object"==typeof e.customStyle&&(window.Tawk_API.customStyle=e.customStyle),d()};(0,a.useImperativeHandle)(t,()=>({maximize:()=>window.Tawk_API.maximize(),minimize:()=>window.Tawk_API.minimize(),toggle:()=>window.Tawk_API.toggle(),popup:()=>window.Tawk_API.popup(),showWidget:()=>window.Tawk_API.showWidget(),hideWidget:()=>window.Tawk_API.hideWidget(),toggleVisibility:()=>window.Tawk_API.toggleVisibility(),endChat:()=>window.Tawk_API.endChat(),getWindowType:()=>window.Tawk_API.getWindowType(),getStatus:()=>window.Tawk_API.getStatus(),isChatMaximized:()=>window.Tawk_API.isChatMaximized(),isChatMinimized:()=>window.Tawk_API.isChatMinimized(),isChatHidden:()=>window.Tawk_API.isChatHidden(),isChatOngoing:()=>window.Tawk_API.isChatOngoing(),isVisitorEngaged:()=>window.Tawk_API.isVisitorEngaged(),onLoaded:()=>window.Tawk_API.onLoaded,onBeforeLoaded:()=>window.Tawk_API.onBeforeLoaded,widgetPosition:()=>window.Tawk_API.widgetPosition(),visitor:e=>{window.Tawk_API.visitor=e},setAttributes:(e,t)=>{window.Tawk_API.setAttributes(e,t)},addEvent:(e,t,n)=>{window.Tawk_API.addEvent(e,t,n)},addTags:(e,t)=>{window.Tawk_API.addTags(e,t)},removeTags:(e,t)=>{window.Tawk_API.removeTags(e,t)}}));let d=()=>{window.addEventListener("tawkLoad",()=>{e.onLoad()}),window.addEventListener("tawkStatusChange",t=>{e.onStatusChange(t.detail)}),window.addEventListener("tawkBeforeLoad",()=>{e.onBeforeLoad()}),window.addEventListener("tawkChatMaximized",()=>{e.onChatMaximized()}),window.addEventListener("tawkChatMinimized",()=>{e.onChatMinimized()}),window.addEventListener("tawkChatHidden",()=>{e.onChatHidden()}),window.addEventListener("tawkChatStarted",()=>{e.onChatStarted()}),window.addEventListener("tawkChatEnded",()=>{e.onChatEnded()}),window.addEventListener("tawkPrechatSubmit",t=>{e.onPrechatSubmit(t.detail)}),window.addEventListener("tawkOfflineSubmit",t=>{e.onOfflineSubmit(t.detail)}),window.addEventListener("tawkChatMessageVisitor",t=>{e.onChatMessageVisitor(t.detail)}),window.addEventListener("tawkChatMessageAgent",t=>{e.onChatMessageAgent(t.detail)}),window.addEventListener("tawkChatMessageSystem",t=>{e.onChatMessageSystem(t.detail)}),window.addEventListener("tawkAgentJoinChat",t=>{e.onAgentJoinChat(t.detail)}),window.addEventListener("tawkAgentLeaveChat",t=>{e.onAgentLeaveChat(t.detail)}),window.addEventListener("tawkChatSatisfaction",t=>{e.onChatSatisfaction(t.detail)}),window.addEventListener("tawkVisitorNameChanged",t=>{e.onVisitorNameChanged(t.detail)}),window.addEventListener("tawkFileUpload",t=>{e.onFileUpload(t.detail)}),window.addEventListener("tawkTagsUpdated",t=>{e.onTagsUpdated(t.detail)}),window.addEventListener("tawkUnreadCountChanged",t=>{e.onUnreadCountChanged(t.detail)})};return null});h.displayName="TawkMessenger",h.defaultProps={customStyle:null,embedId:"",basePath:"tawk.to",onLoad:()=>{},onStatusChange:()=>{},onBeforeLoad:()=>{},onChatMaximized:()=>{},onChatMinimized:()=>{},onChatHidden:()=>{},onChatStarted:()=>{},onChatEnded:()=>{},onPrechatSubmit:()=>{},onOfflineSubmit:()=>{},onChatMessageVisitor:()=>{},onChatMessageAgent:()=>{},onChatMessageSystem:()=>{},onAgentJoinChat:()=>{},onAgentLeaveChat:()=>{},onChatSatisfaction:()=>{},onVisitorNameChanged:()=>{},onFileUpload:()=>{},onTagsUpdated:()=>{},onUnreadCountChanged:()=>{}},h.propTypes={propertyId:w.string.isRequired,widgetId:w.string.isRequired,customStyle:w.object,embedId:w.string,basePath:w.string,onLoad:w.func,onStatusChange:w.func,onBeforeLoad:w.func,onChatMaximized:w.func,onChatMinimized:w.func,onChatHidden:w.func,onChatStarted:w.func,onChatEnded:w.func,onPrechatSubmit:w.func,onOfflineSubmit:w.func,onChatMessageVisitor:w.func,onChatMessageAgent:w.func,onChatMessageSystem:w.func,onAgentJoinChat:w.func,onAgentLeaveChat:w.func,onChatSatisfaction:w.func,onVisitorNameChanged:w.func,onFileUpload:w.func,onTagsUpdated:w.func,onUnreadCountChanged:w.func}}}]);