import{o as L,c as V,a as f,d as U,b as h,w as ke,r as E,e as y,p as ge,f as ee,g as we,u as d,i as he,t as H,h as ye,j as me,F as Q,n as ne,k as at,l as ot,M as j,m as Z,q as nt,s as _e,v as F,x as le,y as S,z as K,A as ae,B as X,C as ie,D as Ee,E as je,G as Ve,H as Be,I as Me,J as rt,K as st,L as it,N as Pe}from"./index-532487fa.js";import{u as oe,t as ut}from"./ReducedMotion-22abd2ab.js";import{_ as dt,a as ct}from"./chevron-right-dccb9501.js";import{o as I,u as Y,H as W,t as re,c as pt,l as be,K as Ae,T as Ke,b as Ue,p as vt,N as Re,a as N,V as de,X as ce,Q as pe}from"./disclosure-b5edaaa0.js";import{_ as ft}from"./Spinner-118967e8.js";const mt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},bt=f("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m8 7l4-4m0 0l4 4m-4-4v18"},null,-1),gt=[bt];function ht(e,a){return L(),V("svg",mt,gt)}const yt={name:"heroicons-outline-arrow-narrow-up",render:ht},xt={class:"fixed bottom-0 right-0 pb-4"},_t={class:"px-6 lg:px-8"},kt=U({__name:"BackToTop",setup(e){const a=()=>{var l;return(l=document.getElementById("container"))==null?void 0:l.scrollTo({top:0,behavior:oe.value?void 0:"smooth"})};return(l,o)=>{const t=yt;return L(),V("div",xt,[f("div",_t,[f("button",{class:"bg-discord-blurple-500 hover:bg-discord-blurple-530 dark:hover:bg-discord-blurple-560 text-gray-200 hover:text-white rounded-md p-2 leading-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-200",onClick:o[0]||(o[0]=n=>a())},[h(t,{class:"h-6 w-6"})])])])}}}),wt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},St=f("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m5 15l7-7l7 7"},null,-1),Ot=[St];function Lt(e,a){return L(),V("svg",wt,Ot)}const Tt={name:"heroicons-outline-chevron-up",render:Lt};function Et(e){throw new Error("Unexpected object: "+e)}var M=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(M||{});function Pt(e,a){let l=a.resolveItems();if(l.length<=0)return null;let o=a.resolveActiveIndex(),t=o??-1,n=(()=>{switch(e.focus){case 0:return l.findIndex(s=>!a.resolveDisabled(s));case 1:{let s=l.slice().reverse().findIndex((c,v,i)=>t!==-1&&i.length-v-1>=t?!1:!a.resolveDisabled(c));return s===-1?s:l.length-1-s}case 2:return l.findIndex((s,c)=>c<=t?!1:!a.resolveDisabled(s));case 3:{let s=l.slice().reverse().findIndex(c=>!a.resolveDisabled(c));return s===-1?s:l.length-1-s}case 4:return l.findIndex(s=>a.resolveId(s)===e.id);case 5:return null;default:Et(e)}})();return n===-1?o:n}var Rt=Object.defineProperty,$t=(e,a,l)=>a in e?Rt(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,$e=(e,a,l)=>($t(e,typeof a!="symbol"?a+"":a,l),l);let Ct=class{constructor(){$e(this,"current",this.detect()),$e(this,"currentId",0)}set(a){this.current!==a&&(this.currentId=0,this.current=a)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},ze=new Ct;function It(e){if(ze.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let a=I(e);if(a)return a.ownerDocument}return document}let Ce=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Dt=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Dt||{}),Nt=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Nt||{}),Ft=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ft||{}),Se=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Se||{});function He(e,a=0){var l;return e===((l=It(e))==null?void 0:l.body)?!1:Y(a,{[0](){return e.matches(Ce)},[1](){let o=e;for(;o!==null;){if(o.matches(Ce))return!0;o=o.parentElement}return!1}})}var jt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(jt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Vt(e,a=l=>l){return e.slice().sort((l,o)=>{let t=a(l),n=a(o);if(t===null||n===null)return 0;let s=t.compareDocumentPosition(n);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function xe(e,a,l){ze.isServer||ke(o=>{document.addEventListener(e,a,l),o(()=>document.removeEventListener(e,a,l))})}function Bt(e,a,l=y(()=>!0)){function o(n,s){if(!l.value||n.defaultPrevented)return;let c=s(n);if(c===null||!c.getRootNode().contains(c))return;let v=function i(r){return typeof r=="function"?i(r()):Array.isArray(r)||r instanceof Set?r:[r]}(e);for(let i of v){if(i===null)continue;let r=i instanceof HTMLElement?i:I(i);if(r!=null&&r.contains(c)||n.composed&&n.composedPath().includes(r))return}return!He(c,Se.Loose)&&c.tabIndex!==-1&&n.preventDefault(),a(n,c)}let t=E(null);xe("mousedown",n=>{var s,c;l.value&&(t.value=((c=(s=n.composedPath)==null?void 0:s.call(n))==null?void 0:c[0])||n.target)},!0),xe("click",n=>{t.value&&(o(n,()=>t.value),t.value=null)},!0),xe("blur",n=>o(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var Oe=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Oe||{});let Ge=U({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:a,attrs:l}){return()=>{let{features:o,...t}=e,n={"aria-hidden":(o&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return W({ourProps:n,theirProps:t,slot:{},attrs:l,slots:a,name:"Hidden"})}}});function We(e={},a=null,l=[]){for(let[o,t]of Object.entries(e))Qe(l,qe(a,o),t);return l}function qe(e,a){return e?e+"["+a+"]":a}function Qe(e,a,l){if(Array.isArray(l))for(let[o,t]of l.entries())Qe(e,qe(a,o.toString()),t);else l instanceof Date?e.push([a,l.toISOString()]):typeof l=="boolean"?e.push([a,l?"1":"0"]):typeof l=="string"?e.push([a,l]):typeof l=="number"?e.push([a,`${l}`]):l==null?e.push([a,""]):We(l,a,e)}function Mt(e){var a;let l=(a=e==null?void 0:e.form)!=null?a:e.closest("form");if(l){for(let o of l.elements)if(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image"){o.click();return}}}function Xe(e,a,l){let o=E(l==null?void 0:l.value),t=y(()=>e.value!==void 0);return[y(()=>t.value?e.value:o.value),function(n){return t.value||(o.value=n),a==null?void 0:a(n)}]}function Ie(e){return[e.screenX,e.screenY]}function At(){let e=E([-1,-1]);return{wasMoved(a){let l=Ie(a);return e.value[0]===l[0]&&e.value[1]===l[1]?!1:(e.value=l,!0)},update(a){e.value=Ie(a)}}}let Ye=Symbol("DescriptionContext");function Kt(){let e=he(Ye,null);if(e===null)throw new Error("Missing parent");return e}function Ut({slot:e=E({}),name:a="Description",props:l={}}={}){let o=E([]);function t(n){return o.value.push(n),()=>{let s=o.value.indexOf(n);s!==-1&&o.value.splice(s,1)}}return ge(Ye,{register:t,slot:e,name:a,props:l}),y(()=>o.value.length>0?o.value.join(" "):void 0)}U({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${re()}`}},setup(e,{attrs:a,slots:l}){let o=Kt();return ee(()=>we(o.register(e.id))),()=>{let{name:t="Description",slot:n=E({}),props:s={}}=o,{id:c,...v}=e,i={...Object.entries(s).reduce((r,[_,m])=>Object.assign(r,{[_]:d(m)}),{}),id:c};return W({ourProps:i,theirProps:v,slot:n.value,attrs:a,slots:l,name:t})}}});function zt(e,a){return e===a}var Ht=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ht||{}),Gt=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Gt||{}),Wt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Wt||{});function qt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Je=Symbol("ListboxContext");function ve(e){let a=he(Je,null);if(a===null){let l=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,ve),l}return a}let Qt=U({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>zt},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:a,attrs:l,emit:o}){let t=E(1),n=E(null),s=E(null),c=E(null),v=E([]),i=E(""),r=E(null),_=E(1);function m(p=b=>b){let b=r.value!==null?v.value[r.value]:null,g=Vt(p(v.value.slice()),$=>I($.dataRef.domRef)),w=b?g.indexOf(b):null;return w===-1&&(w=null),{options:g,activeOptionIndex:w}}let C=y(()=>e.multiple?1:0),[P,D]=Xe(y(()=>e.modelValue===void 0?Y(C.value,{[1]:[],[0]:void 0}):e.modelValue),p=>o("update:modelValue",p),y(()=>e.defaultValue)),u={listboxState:t,value:P,mode:C,compare(p,b){if(typeof e.by=="string"){let g=e.by;return(p==null?void 0:p[g])===(b==null?void 0:b[g])}return e.by(p,b)},orientation:y(()=>e.horizontal?"horizontal":"vertical"),labelRef:n,buttonRef:s,optionsRef:c,disabled:y(()=>e.disabled),options:v,searchQuery:i,activeOptionIndex:r,activationTrigger:_,closeListbox(){e.disabled||t.value!==1&&(t.value=1,r.value=null)},openListbox(){e.disabled||t.value!==0&&(t.value=0)},goToOption(p,b,g){if(e.disabled||t.value===1)return;let w=m(),$=Pt(p===M.Specific?{focus:M.Specific,id:b}:{focus:p},{resolveItems:()=>w.options,resolveActiveIndex:()=>w.activeOptionIndex,resolveId:z=>z.id,resolveDisabled:z=>z.dataRef.disabled});i.value="",r.value=$,_.value=g??1,v.value=w.options},search(p){if(e.disabled||t.value===1)return;let b=i.value!==""?0:1;i.value+=p.toLowerCase();let g=(r.value!==null?v.value.slice(r.value+b).concat(v.value.slice(0,r.value+b)):v.value).find($=>$.dataRef.textValue.startsWith(i.value)&&!$.dataRef.disabled),w=g?v.value.indexOf(g):-1;w===-1||w===r.value||(r.value=w,_.value=1)},clearSearch(){e.disabled||t.value!==1&&i.value!==""&&(i.value="")},registerOption(p,b){let g=m(w=>[...w,{id:p,dataRef:b}]);v.value=g.options,r.value=g.activeOptionIndex},unregisterOption(p){let b=m(g=>{let w=g.findIndex($=>$.id===p);return w!==-1&&g.splice(w,1),g});v.value=b.options,r.value=b.activeOptionIndex,_.value=1},select(p){e.disabled||D(Y(C.value,{[0]:()=>p,[1]:()=>{let b=H(u.value.value).slice(),g=H(p),w=b.findIndex($=>u.compare(g,H($)));return w===-1?b.push(g):b.splice(w,1),b}}))}};Bt([s,c],(p,b)=>{var g;u.closeListbox(),He(b,Se.Loose)||(p.preventDefault(),(g=I(s))==null||g.focus())},y(()=>t.value===0)),ge(Je,u),pt(y(()=>Y(t.value,{[0]:be.Open,[1]:be.Closed})));let k=y(()=>{var p;return(p=I(s))==null?void 0:p.closest("form")});return ee(()=>{ye([k],()=>{if(!k.value||e.defaultValue===void 0)return;function p(){u.select(e.defaultValue)}return k.value.addEventListener("reset",p),()=>{var b;(b=k.value)==null||b.removeEventListener("reset",p)}},{immediate:!0})}),()=>{let{name:p,modelValue:b,disabled:g,form:w,...$}=e,z={open:t.value===0,disabled:g,value:P.value};return me(Q,[...p!=null&&P.value!=null?We({[p]:P.value}).map(([O,x])=>me(Ge,Ae({features:Oe.Hidden,key:O,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:w,name:O,value:x}))):[],W({ourProps:{},theirProps:{...l,...Ke($,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:z,slots:a,attrs:l,name:"Listbox"})])}}});U({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"},id:{type:String,default:()=>`headlessui-listbox-label-${re()}`}},setup(e,{attrs:a,slots:l}){let o=ve("ListboxLabel");function t(){var n;(n=I(o.buttonRef))==null||n.focus({preventScroll:!0})}return()=>{let n={open:o.listboxState.value===0,disabled:o.disabled.value},{id:s,...c}=e,v={id:s,ref:o.labelRef,onClick:t};return W({ourProps:v,theirProps:c,slot:n,attrs:a,slots:l,name:"ListboxLabel"})}}});let Xt=U({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${re()}`}},setup(e,{attrs:a,slots:l,expose:o}){let t=ve("ListboxButton");o({el:t.buttonRef,$el:t.buttonRef});function n(i){switch(i.key){case N.Space:case N.Enter:case N.ArrowDown:i.preventDefault(),t.openListbox(),ne(()=>{var r;(r=I(t.optionsRef))==null||r.focus({preventScroll:!0}),t.value.value||t.goToOption(M.First)});break;case N.ArrowUp:i.preventDefault(),t.openListbox(),ne(()=>{var r;(r=I(t.optionsRef))==null||r.focus({preventScroll:!0}),t.value.value||t.goToOption(M.Last)});break}}function s(i){switch(i.key){case N.Space:i.preventDefault();break}}function c(i){t.disabled.value||(t.listboxState.value===0?(t.closeListbox(),ne(()=>{var r;return(r=I(t.buttonRef))==null?void 0:r.focus({preventScroll:!0})})):(i.preventDefault(),t.openListbox(),qt(()=>{var r;return(r=I(t.optionsRef))==null?void 0:r.focus({preventScroll:!0})})))}let v=Ue(y(()=>({as:e.as,type:a.type})),t.buttonRef);return()=>{var i,r;let _={open:t.listboxState.value===0,disabled:t.disabled.value,value:t.value.value},{id:m,...C}=e,P={ref:t.buttonRef,id:m,type:v.value,"aria-haspopup":"listbox","aria-controls":(i=I(t.optionsRef))==null?void 0:i.id,"aria-expanded":t.disabled.value?void 0:t.listboxState.value===0,"aria-labelledby":t.labelRef.value?[(r=I(t.labelRef))==null?void 0:r.id,m].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:n,onKeyup:s,onClick:c};return W({ourProps:P,theirProps:C,slot:_,attrs:a,slots:l,name:"ListboxButton"})}}}),Yt=U({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${re()}`}},setup(e,{attrs:a,slots:l,expose:o}){let t=ve("ListboxOptions"),n=E(null);o({el:t.optionsRef,$el:t.optionsRef});function s(i){switch(n.value&&clearTimeout(n.value),i.key){case N.Space:if(t.searchQuery.value!=="")return i.preventDefault(),i.stopPropagation(),t.search(i.key);case N.Enter:if(i.preventDefault(),i.stopPropagation(),t.activeOptionIndex.value!==null){let r=t.options.value[t.activeOptionIndex.value];t.select(r.dataRef.value)}t.mode.value===0&&(t.closeListbox(),ne(()=>{var r;return(r=I(t.buttonRef))==null?void 0:r.focus({preventScroll:!0})}));break;case Y(t.orientation.value,{vertical:N.ArrowDown,horizontal:N.ArrowRight}):return i.preventDefault(),i.stopPropagation(),t.goToOption(M.Next);case Y(t.orientation.value,{vertical:N.ArrowUp,horizontal:N.ArrowLeft}):return i.preventDefault(),i.stopPropagation(),t.goToOption(M.Previous);case N.Home:case N.PageUp:return i.preventDefault(),i.stopPropagation(),t.goToOption(M.First);case N.End:case N.PageDown:return i.preventDefault(),i.stopPropagation(),t.goToOption(M.Last);case N.Escape:i.preventDefault(),i.stopPropagation(),t.closeListbox(),ne(()=>{var r;return(r=I(t.buttonRef))==null?void 0:r.focus({preventScroll:!0})});break;case N.Tab:i.preventDefault(),i.stopPropagation();break;default:i.key.length===1&&(t.search(i.key),n.value=setTimeout(()=>t.clearSearch(),350));break}}let c=vt(),v=y(()=>c!==null?(c.value&be.Open)===be.Open:t.listboxState.value===0);return()=>{var i,r,_,m;let C={open:t.listboxState.value===0},{id:P,...D}=e,u={"aria-activedescendant":t.activeOptionIndex.value===null||(i=t.options.value[t.activeOptionIndex.value])==null?void 0:i.id,"aria-multiselectable":t.mode.value===1?!0:void 0,"aria-labelledby":(m=(r=I(t.labelRef))==null?void 0:r.id)!=null?m:(_=I(t.buttonRef))==null?void 0:_.id,"aria-orientation":t.orientation.value,id:P,onKeydown:s,role:"listbox",tabIndex:0,ref:t.optionsRef};return W({ourProps:u,theirProps:D,slot:C,attrs:a,slots:l,features:Re.RenderStrategy|Re.Static,visible:v.value,name:"ListboxOptions"})}}}),Jt=U({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${re()}`}},setup(e,{slots:a,attrs:l,expose:o}){let t=ve("ListboxOption"),n=E(null);o({el:n,$el:n});let s=y(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===e.id:!1),c=y(()=>Y(t.mode.value,{[0]:()=>t.compare(H(t.value.value),H(e.value)),[1]:()=>H(t.value.value).some(u=>t.compare(H(u),H(e.value)))})),v=y(()=>Y(t.mode.value,{[1]:()=>{var u;let k=H(t.value.value);return((u=t.options.value.find(p=>k.some(b=>t.compare(H(b),H(p.dataRef.value)))))==null?void 0:u.id)===e.id},[0]:()=>c.value})),i=y(()=>({disabled:e.disabled,value:e.value,textValue:"",domRef:n}));ee(()=>{var u,k;let p=(k=(u=I(n))==null?void 0:u.textContent)==null?void 0:k.toLowerCase().trim();p!==void 0&&(i.value.textValue=p)}),ee(()=>t.registerOption(e.id,i)),we(()=>t.unregisterOption(e.id)),ee(()=>{ye([t.listboxState,c],()=>{t.listboxState.value===0&&c.value&&Y(t.mode.value,{[1]:()=>{v.value&&t.goToOption(M.Specific,e.id)},[0]:()=>{t.goToOption(M.Specific,e.id)}})},{immediate:!0})}),ke(()=>{t.listboxState.value===0&&s.value&&t.activationTrigger.value!==0&&ne(()=>{var u,k;return(k=(u=I(n))==null?void 0:u.scrollIntoView)==null?void 0:k.call(u,{block:"nearest"})})});function r(u){if(e.disabled)return u.preventDefault();t.select(e.value),t.mode.value===0&&(t.closeListbox(),ne(()=>{var k;return(k=I(t.buttonRef))==null?void 0:k.focus({preventScroll:!0})}))}function _(){if(e.disabled)return t.goToOption(M.Nothing);t.goToOption(M.Specific,e.id)}let m=At();function C(u){m.update(u)}function P(u){m.wasMoved(u)&&(e.disabled||s.value||t.goToOption(M.Specific,e.id,0))}function D(u){m.wasMoved(u)&&(e.disabled||s.value&&t.goToOption(M.Nothing))}return()=>{let{disabled:u}=e,k={active:s.value,selected:c.value,disabled:u},{id:p,value:b,disabled:g,...w}=e,$={id:p,ref:n,role:"option",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,"aria-selected":c.value,disabled:void 0,onClick:r,onFocus:_,onPointerenter:C,onMouseenter:C,onPointermove:P,onMousemove:P,onPointerleave:D,onMouseleave:D};return W({ourProps:$,theirProps:w,slot:k,attrs:l,slots:a,name:"ListboxOption"})}}}),Ze=Symbol("LabelContext");function et(){let e=he(Ze,null);if(e===null){let a=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(a,et),a}return e}function Zt({slot:e={},name:a="Label",props:l={}}={}){let o=E([]);function t(n){return o.value.push(n),()=>{let s=o.value.indexOf(n);s!==-1&&o.value.splice(s,1)}}return ge(Ze,{register:t,slot:e,name:a,props:l}),y(()=>o.value.length>0?o.value.join(" "):void 0)}let el=U({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-label-${re()}`}},setup(e,{slots:a,attrs:l}){let o=et();return ee(()=>we(o.register(e.id))),()=>{let{name:t="Label",slot:n={},props:s={}}=o,{id:c,passive:v,...i}=e,r={...Object.entries(s).reduce((_,[m,C])=>Object.assign(_,{[m]:d(C)}),{}),id:c};return v&&(delete r.onClick,delete r.htmlFor,delete i.onClick),W({ourProps:r,theirProps:i,slot:n,attrs:l,slots:a,name:t})}}}),tt=Symbol("GroupContext"),De=U({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:a,attrs:l}){let o=E(null),t=Zt({name:"SwitchLabel",props:{htmlFor:y(()=>{var s;return(s=o.value)==null?void 0:s.id}),onClick(s){o.value&&(s.currentTarget.tagName==="LABEL"&&s.preventDefault(),o.value.click(),o.value.focus({preventScroll:!0}))}}}),n=Ut({name:"SwitchDescription"});return ge(tt,{switchRef:o,labelledby:t,describedby:n}),()=>W({theirProps:e,ourProps:{},slot:{},slots:a,attrs:l,name:"SwitchGroup"})}}),Ne=U({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${re()}`}},inheritAttrs:!1,setup(e,{emit:a,attrs:l,slots:o,expose:t}){let n=he(tt,null),[s,c]=Xe(y(()=>e.modelValue),u=>a("update:modelValue",u),y(()=>e.defaultChecked));function v(){c(!s.value)}let i=E(null),r=n===null?i:n.switchRef,_=Ue(y(()=>({as:e.as,type:l.type})),r);t({el:r,$el:r});function m(u){u.preventDefault(),v()}function C(u){u.key===N.Space?(u.preventDefault(),v()):u.key===N.Enter&&Mt(u.currentTarget)}function P(u){u.preventDefault()}let D=y(()=>{var u,k;return(k=(u=I(r))==null?void 0:u.closest)==null?void 0:k.call(u,"form")});return ee(()=>{ye([D],()=>{if(!D.value||e.defaultChecked===void 0)return;function u(){c(e.defaultChecked)}return D.value.addEventListener("reset",u),()=>{var k;(k=D.value)==null||k.removeEventListener("reset",u)}},{immediate:!0})}),()=>{let{id:u,name:k,value:p,form:b,...g}=e,w={checked:s.value},$={id:u,ref:r,role:"switch",type:_.value,tabIndex:0,"aria-checked":s.value,"aria-labelledby":n==null?void 0:n.labelledby.value,"aria-describedby":n==null?void 0:n.describedby.value,onClick:m,onKeyup:C,onKeypress:P};return me(Q,[k!=null&&s.value!=null?me(Ge,Ae({features:Oe.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:s.value,form:b,name:k,value:p})):null,W({ourProps:$,theirProps:{...l,...Ke(g,["modelValue","defaultChecked"])},slot:w,attrs:l,slots:o,name:"Switch"})])}}}),Fe=el;const tl=["aria-expanded"],ll=f("span",{class:"sr-only"},"Open menu",-1),al={class:"sticky top-0 overflow-y-auto overflow-x-hidden w-72 md:w-80 lg:custom-scroll sidebar-height"},ol={class:"my-5 px-2 space-y-1 z-10"},nl={class:"pb-1"},rl={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},sl=["aria-expanded"],il={class:"sr-only"},ul={class:"relative mt-1"},dl={class:"truncate"},cl={class:"truncate"},pl={class:"flex justify-between px-2"},vl={class:"flex justify-between px-2"},fl={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ml=["aria-expanded"],bl={class:"sr-only"},gl={class:"truncate"},hl={class:"truncate"},yl={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},xl=["aria-expanded"],_l={class:"sr-only"},kl={class:"truncate"},wl={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},Sl=["aria-expanded"],Ol={class:"sr-only"},Ll={class:"truncate"},Tl={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},El=["aria-expanded"],Pl={class:"sr-only"},Rl={class:"truncate"},$l=U({__name:"Sidebar",setup(e){var a,l,o,t,n;const s=je(),c=Ve(),v=Be(),r=at(ot).greater("lg"),_=E(!1),m=E(),C=y(()=>v.state.sources),P=y(()=>v.state.source),D=y(()=>v.state.tag),u=y(()=>v.state.docs),k=y(()=>v.state.branches),p=y(()=>C.value.find(O=>c.params.source===O.id)),b=E({source:(l=(a=p.value)==null?void 0:a.source)!=null?l:j,name:(t=(o=p.value)==null?void 0:o.name)!=null?t:j.name}),g=E((n=c.params.tag)!=null?n:j.defaultTag),w=y(()=>{var O,x;return Z.value?(O=u.value)==null?void 0:O.classes:(x=u.value)==null?void 0:x.classes.filter(A=>A.access!=="private")}),$=y(()=>{var O,x,A,G;return Z.value?(x=(O=u.value)==null?void 0:O.functions)!=null?x:[]:(G=(A=u.value)==null?void 0:A.functions)==null?void 0:G.filter(te=>te.access!=="private")}),z=y(()=>{var O,x;return Z.value?(O=u.value)==null?void 0:O.typedefs:(x=u.value)==null?void 0:x.typedefs.filter(A=>A.access!=="private")});return nt(m,()=>_.value=!1),_e(r,()=>_.value=!1,{immediate:!0}),ye([b,g],async([O,x],[A,G])=>{if(O!==A)return g.value=O.source.defaultTag,s.push({name:"docs-source-tag-category-file",params:{source:O.source.id,tag:O.source.defaultTag,category:O.source.defaultFile.category,file:O.source.defaultFile.id}});if(x!==G)return s.push({name:"docs-source-tag-category-file",params:{source:O.source.id,tag:x,category:O.source.defaultFile.category,file:O.source.defaultFile.id}})}),(O,x)=>{var A,G,te,ue;const q=dt,se=ct,lt=Tt,fe=Me("router-link");return L(),V(Q,null,[_.value?le("",!0):(L(),V("div",{key:0,class:F(["block fixed lg:hidden z-10 transition-transform transform-gpu",_.value?"translate-x-72 md:translate-x-80":null])},[f("button",{type:"button",class:"rounded-md rounded-l-none rounded-tr-none p-3 inline-flex items-center justify-center text-gray-200 bg-discord-blurple-600 hover:bg-discord-blurple-630 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"sidebar-menu","aria-expanded":_.value,onClick:x[0]||(x[0]=R=>_.value=!_.value)},[ll,h(q,{class:F(["h-6 w-6",{hidden:_.value,block:!_.value}]),"aria-hidden":"true"},null,8,["class"])],8,tl)],2)),f("div",{ref_key:"sidebarElement",ref:m,class:F(["inline-block fixed lg:block lg:relative z-10 sidebar-color transition transform-gpu",_.value?"translate-x-0":"-translate-x-full lg:translate-x-0"])},[f("div",al,[f("nav",ol,[f("ul",null,[f("li",nl,[h(d(pe),{"default-open":!0},{default:S(({open:R})=>[h(d(de),{class:"w-full focus:outline-none",tabindex:"-1"},{default:S(()=>[f("div",rl,[f("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":R},[f("span",il,K(R?"Shrink":"Expand"),1),h(q,{class:F(["inline-block",{hidden:R}]),"aria-hidden":"true"},null,8,["class"]),h(se,{class:F(["inline-block",{hidden:!R}]),"aria-hidden":"true"},null,8,["class"])],8,sl),ae(" Docs settings ")])]),_:2},1024),h(d(ce),{as:"ul",class:"px-2 space-y-3"},{default:S(()=>[f("li",null,[h(d(Qt),{modelValue:g.value,"onUpdate:modelValue":x[1]||(x[1]=T=>g.value=T)},{default:S(({open:T})=>[f("div",ul,[h(d(Xt),{class:"relative w-full py-1 px-3 text-left flex justify-between items-center dark:text-gray-200 rounded bg-gray-100 dark:bg-[#1d1d1d] border dark:border-[#101010] cursor-pointer"},{default:S(()=>[f("span",dl,K(g.value),1),T?le("",!0):(L(),X(se,{key:0})),T?(L(),X(lt,{key:1})):le("",!0)]),_:2},1024),h(d(Yt),{class:"absolute w-full mt-1 overflow-auto text-base dark:text-white bg-gray-100 dark:bg-[#1d1d1d] rounded max-h-60 border dark:border-[#101010] focus:outline-none z-40 lg:custom-scroll"},{default:S(()=>[(L(!0),V(Q,null,ie(d(k),B=>(L(),X(d(Jt),{key:B,class:"cursor-default",value:B},{default:S(({active:J})=>[f("li",{class:F(["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":J}])},[f("span",cl,K(B),1)],2)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"])]),f("li",null,[h(d(De),null,{default:S(()=>[f("div",pl,[h(d(Fe),{class:"mr-4 dark:text-gray-200"},{default:S(()=>[ae("Reduced Motion")]),_:1}),h(d(Ne),{modelValue:d(oe),"onUpdate:modelValue":x[2]||(x[2]=T=>Ee(oe)?oe.value=T:null),class:F(["relative inline-flex h-6 items-center rounded-full w-11 focus:outline-none",d(oe)?"bg-discord-blurple-500":"bg-gray-500"]),onClick:x[3]||(x[3]=T=>d(ut)(d(oe)))},{default:S(()=>[f("span",{class:F(["inline-block w-4 h-4 bg-white rounded-full transition transform-gpu z-20",d(oe)?"translate-x-6":"translate-x-1"])},null,2)]),_:1},8,["modelValue","class"])])]),_:1})]),f("li",null,[h(d(De),null,{default:S(()=>[f("div",vl,[h(d(Fe),{class:"mr-4 dark:text-gray-200"},{default:S(()=>[ae("Show privates")]),_:1}),h(d(Ne),{modelValue:d(Z),"onUpdate:modelValue":x[4]||(x[4]=T=>Ee(Z)?Z.value=T:null),class:F(["relative inline-flex h-6 items-center rounded-full w-11 focus:outline-none",d(Z)?"bg-discord-red-500":"bg-gray-500"])},{default:S(()=>[f("span",{class:F(["inline-block w-4 h-4 bg-white rounded-full transition transform-gpu z-20",d(Z)?"translate-x-6":"translate-x-1"])},null,2)]),_:1},8,["modelValue","class"])])]),_:1})])]),_:1})]),_:1})]),(L(!0),V(Q,null,ie((A=d(u))==null?void 0:A.custom,(R,T)=>(L(),V("li",{key:T},[h(d(pe),{"default-open":!0},{default:S(({open:B})=>[h(d(de),{class:"w-full focus:outline-none",tabindex:"-1"},{default:S(()=>[f("div",fl,[f("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":B},[f("span",bl,K(B?"Shrink":"Expand"),1),h(q,{class:F(["inline-block",{hidden:B}]),"aria-hidden":"true"},null,8,["class"]),h(se,{class:F(["inline-block",{hidden:!B}]),"aria-hidden":"true"},null,8,["class"])],8,ml),f("span",gl,K(R.name),1)])]),_:2},1024),h(d(ce),{as:"ul"},{default:S(()=>[(L(!0),V(Q,null,ie(R.files,(J,Le)=>{var Te;return L(),V("li",{key:Le},[h(fe,{to:{name:"docs-source-tag-category-file",params:{source:(Te=d(P))==null?void 0:Te.id,tag:d(D),category:T,file:Le}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:x[5]||(x[5]=Dl=>_.value=!1)},{default:S(()=>[f("span",hl,K(typeof J=="object"?J.name:J),1)]),_:2},1032,["to"])])}),128))]),_:2},1024)]),_:2},1024)]))),128)),(G=d($))!=null&&G.length?(L(),X(d(pe),{key:0,as:"li","default-open":!0},{default:S(({open:R})=>[h(d(de),{class:"w-full focus:outline-none",tabindex:"-1"},{default:S(()=>[f("div",yl,[f("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":R},[f("span",_l,K(R?"Shrink":"Expand"),1),h(q,{class:F(["inline-block",{hidden:R}]),"aria-hidden":"true"},null,8,["class"]),h(se,{class:F(["inline-block",{hidden:!R}]),"aria-hidden":"true"},null,8,["class"])],8,xl),ae(" Functions ")])]),_:2},1024),h(d(ce),{as:"ul"},{default:S(()=>[(L(!0),V(Q,null,ie(d($),T=>{var B;return L(),V("li",{key:T.name},[h(fe,{exact:"",to:{name:"docs-source-tag-function-function",params:{source:(B=d(P))==null?void 0:B.id,tag:d(D),function:T.name}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:x[6]||(x[6]=J=>_.value=!1)},{default:S(()=>[f("span",kl,K(T.name),1)]),_:2},1032,["to"])])}),128))]),_:1})]),_:1})):le("",!0),(te=d(w))!=null&&te.length?(L(),X(d(pe),{key:1,as:"li","default-open":!0},{default:S(({open:R})=>[h(d(de),{class:"w-full focus:outline-none",tabindex:"-1"},{default:S(()=>[f("div",wl,[f("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":R},[f("span",Ol,K(R?"Shrink":"Expand"),1),h(q,{class:F(["inline-block",{hidden:R}]),"aria-hidden":"true"},null,8,["class"]),h(se,{class:F(["inline-block",{hidden:!R}]),"aria-hidden":"true"},null,8,["class"])],8,Sl),ae(" Classes ")])]),_:2},1024),h(d(ce),{as:"ul"},{default:S(()=>[(L(!0),V(Q,null,ie(d(w),T=>{var B;return L(),V("li",{key:T.name},[h(fe,{exact:"",to:{name:"docs-source-tag-class-class",params:{source:(B=d(P))==null?void 0:B.id,tag:d(D),class:T.name}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:x[7]||(x[7]=J=>_.value=!1)},{default:S(()=>[f("span",Ll,K(T.name),1)]),_:2},1032,["to"])])}),128))]),_:1})]),_:1})):le("",!0),(ue=d(z))!=null&&ue.length?(L(),X(d(pe),{key:2,as:"li","default-open":!0},{default:S(({open:R})=>[h(d(de),{class:"w-full focus:outline-none",tabindex:"-1"},{default:S(()=>[f("div",Tl,[f("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":R},[f("span",Pl,K(R?"Shrink":"Expand"),1),h(q,{class:F(["inline-block",{hidden:R}]),"aria-hidden":"true"},null,8,["class"]),h(se,{class:F(["inline-block",{hidden:!R}]),"aria-hidden":"true"},null,8,["class"])],8,El),ae(" Typedefs ")])]),_:2},1024),h(d(ce),{as:"ul"},{default:S(()=>[(L(!0),V(Q,null,ie(d(z),T=>{var B;return L(),V("li",{key:T.name},[h(fe,{exact:"",to:{name:"docs-source-tag-typedef-typedef",params:{source:(B=d(P))==null?void 0:B.id,tag:d(D),typedef:T.name}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:x[8]||(x[8]=J=>_.value=!1)},{default:S(()=>[f("span",Rl,K(T.name),1)]),_:2},1032,["to"])])}),128))]),_:1})]),_:1})):le("",!0)])])])],2)],64)}}}),Cl={class:"lg:flex mx-auto w-full max-w-screen-2xl"},Il={key:1,class:"mx-auto py-16 sm:px-8 lg:py-8 w-full text-center dark:text-gray-200"},Al=U({__name:"docs",setup(e){const a=je(),l=Ve(),o=Be(),{Ctrl_K:t,MetaLeft_K:n}=rt({passive:!1,onEventFired(m){(m.ctrlKey||m.metaKey)&&m.key==="k"&&m.type==="keydown"&&m.preventDefault()}}),s=st({[j.id]:j,main:j}),c=E(!1),v=y(()=>o.state.source),i=y(()=>o.state.tag),r=y(()=>o.state.docs);ee(()=>{const m=document.getElementById("container");it(m,"scroll",()=>{m&&m.scrollTop>300?c.value=!0:c.value=!1})}),_e(t,()=>{var m;(m=document.getElementById("search"))==null||m.focus()}),_e(n,()=>{var m;(m=document.getElementById("search"))==null||m.focus()});const _=async()=>{var m,C,P,D,u,k,p,b,g,w,$,z,O,x,A,G,te,ue,q;if(l.path!=="/"){if(l.params.source&&l.params.tag&&(((m=r.value)==null?void 0:m.id)!==s[l.params.source].id||((C=r.value)==null?void 0:C.tag)!==l.params.tag)&&await o.dispatch({type:"fetchDocs",inputSource:(P=s[l.params.source])!=null?P:j,inputTag:(D=l.params.tag)!=null?D:i.value}),l.params.source&&s[l.params.source])o.commit({type:"setSource",source:s[l.params.source]});else return a.replace({name:"docs-source-tag-category-file",params:{source:j.id,tag:j.defaultTag,category:j.defaultFile.category,file:j.defaultFile.id}});if(l.params.tag)o.commit({type:"setTag",tag:l.params.tag}),o.commit({type:"setSource",source:s[l.params.source]});else return a.replace({name:"docs-source-tag-category-file",params:{source:(k=(u=v.value)==null?void 0:u.id)!=null?k:j.id,tag:((p=v.value)==null?void 0:p.recentTag)||((b=v.value)==null?void 0:b.defaultTag),category:(w=(g=v.value)==null?void 0:g.defaultFile.category)!=null?w:j.defaultFile.category,file:(z=($=v.value)==null?void 0:$.defaultFile.id)!=null?z:j.defaultFile.id}});if(!l.params.file&&!l.params.class&&!l.params.function&&!l.params.typedef&&l.name!=="docs-source-tag-search")return a.replace({name:"docs-source-tag-category-file",params:{source:(x=(O=v.value)==null?void 0:O.id)!=null?x:j.id,tag:(A=i.value)!=null?A:j.defaultTag,category:(te=(G=v.value)==null?void 0:G.defaultFile.category)!=null?te:j.defaultFile.category,file:(q=(ue=v.value)==null?void 0:ue.defaultFile.id)!=null?q:j.defaultFile.id}})}};return ke(()=>void _()),(m,C)=>{const P=Me("router-view");return L(),V("div",null,[f("div",Cl,[h($l),d(r)?(L(),X(P,{key:m.$route.path})):d(Pe)?(L(),V("div",Il,[ae(" Couldn't load the documentation data. "),f("pre",null,K(d(Pe).toString()),1)])):(L(),X(ft,{key:2}))]),c.value?(L(),X(kt,{key:0})):le("",!0)])}}});export{Al as default};
