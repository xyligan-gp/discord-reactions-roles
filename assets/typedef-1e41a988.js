import{c as E,d as X,t as $,_ as A,b as M,a as Y}from"./See-7d0390c9.js";import{o as s,c as o,a as l,d as q,e as k,r as Z,B as u,y as C,b as _,z as L,C as w,u as e,F as r,v as K,x as i,E as J,G as O,H as U,Q as ee,f as ne}from"./index-532487fa.js";import{m as R,_ as se}from"./SourceButton-7688aaa5.js";import{V as te,X as oe,Q as le}from"./disclosure-b5edaaa0.js";import{u as ae}from"./ReducedMotion-22abd2ab.js";const re={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ie=l("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"},null,-1),ue=[ie];function de(d,m){return s(),o("svg",re,ue)}const ce={name:"heroicons-outline-minus",render:de},_e={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},me=l("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"},null,-1),pe=[me];function ve(d,m){return s(),o("svg",_e,pe)}const he={name:"heroicons-outline-plus",render:ve},ye={class:"flex gap-1 items-center -ml-1"},fe={class:"font-semibold"},ke=["aria-expanded"],be={class:"sr-only"},xe=["innerHTML"],ge=q({__name:"ExpandableTypes",props:["names","variable","nullable"],setup(d){var m;const T=d,b=J(),B=O(),y=U(),n=k(()=>y.state.docs),f=Z((m=n.value)==null?void 0:m.typedefs.find(t=>t.name===T.names[0][0])),x=k(()=>{var t,p;return R((p=E((t=f.value)==null?void 0:t.description,n.value,b,B))!=null?p:"")});return(t,p)=>{const v=he,H=ce;return f.value?(s(),u(e(le),{key:0,as:"div"},{default:C(({open:h})=>[_(e(te),{as:"div",class:"focus:outline-none"},{default:C(()=>[l("div",ye,[l("span",fe,L(d.nullable?"?":"")+L(d.variable?"...":""),1),(s(!0),o(r,null,w(d.names,c=>(s(),u(X,{key:e($)(c),type:c},null,8,["type"]))),128)),l("button",{class:"leading-3 focus:outline-none","aria-expanded":h},[l("span",be,L(h?"Shrink":"Expand"),1),_(v,{class:K(["inline-block",{hidden:h}]),"aria-hidden":"true"},null,8,["class"]),_(H,{class:K(["inline-block",{hidden:!h}]),"aria-hidden":"true"},null,8,["class"])],8,ke)])]),_:2},1024),_(e(oe),null,{default:C(()=>{var c,g;return[e(x)?(s(),o("div",{key:0,innerHTML:e(x)},null,8,xe)):i("",!0),(c=f.value)!=null&&c.props?(s(),u(A,{key:1,parameters:(g=f.value)==null?void 0:g.props},null,8,["parameters"])):i("",!0)]}),_:1})]),_:1})):(s(),u(M,{key:1,names:d.names},null,8,["names"]))}}}),$e={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},we={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},Te=["id"],He=["innerHTML"],Me=l("h2",null,"Types",-1),Le={id:"typedef-types"},Be=l("h2",null,"Properties",-1),Ce=l("h2",null,"Parameters",-1),Ee=l("h2",null,"Returns",-1),Ae={key:0},Re={class:"mt-3"},Ve=["innerHTML"],De=q({__name:"[typedef]",setup(d){var m;const T=J(),b=O(),B=U(),y=k(()=>B.state.docs),n=(m=y.value)==null?void 0:m.typedefs.find(t=>t.name===b.params.typedef),f=k(()=>R(E(n==null?void 0:n.description,y.value,T,b))),x=k(()=>{var t,p,v;return R((v=E((p=(t=n.returns)==null?void 0:t[0])==null?void 0:p.description,y.value,T,b))!=null?v:"")});return ee({title:k(()=>{var t;return`discord-reactions-roles | ${(t=n==null?void 0:n.name)!=null?t:""}`})}),ne(()=>{const t=document.getElementById("container");t&&t.scrollTop>200&&t.scrollTo({top:0,behavior:ae.value?void 0:"smooth"})}),(t,p)=>{var v,H,h,c,g,V,j,N,P,S,z,D,F,Q,G;const W=X;return s(),o("div",$e,[_(se,{class:"float-right mt-2",meta:(v=e(n))==null?void 0:v.meta},null,8,["meta"]),l("div",we,[l("h1",{id:`doc-for-${(H=e(n))==null?void 0:H.name}`},L((h=e(n))==null?void 0:h.name),9,Te),(c=e(n))!=null&&c.description?(s(),o("p",{key:0,innerHTML:e(f)},null,8,He)):i("",!0),(V=(g=e(n))==null?void 0:g.see)!=null&&V.length?(s(),u(Y,{key:1,see:(j=e(n))==null?void 0:j.see},null,8,["see"])):i("",!0),(N=e(n))!=null&&N.type?(s(),o(r,{key:2},[Me,l("ul",Le,[(s(!0),o(r,null,w((P=e(n))==null?void 0:P.type,a=>(s(),o("li",{key:e($)(a)},[_(ge,{class:"!m-0",names:a},null,8,["names"])]))),128))])],64)):i("",!0),(S=e(n))!=null&&S.props&&((z=e(n))!=null&&z.props.length)?(s(),o(r,{key:3},[Be,_(A,{parameters:e(n).props},null,8,["parameters"])],64)):i("",!0),(D=e(n))!=null&&D.params&&((F=e(n))!=null&&F.params.length)?(s(),o(r,{key:4},[Ce,_(A,{parameters:e(n).params},null,8,["parameters"])],64)):i("",!0),(Q=e(n))!=null&&Q.returns?(s(),o(r,{key:5},[Ee,e(n).returns&&Array.isArray(e(n).returns)?(s(),o("span",Ae,[e(y).meta.format>=30?(s(),o(r,{key:0},[Array.isArray((G=e(n).returns)==null?void 0:G[0])?(s(!0),o(r,{key:0},w(e(n).returns.flat(),a=>(s(),u(M,{key:e($)(a),names:a},null,8,["names"]))),128)):(s(!0),o(r,{key:1},w(e(n).returns.flat(),a=>{var I;return s(),u(M,{key:e($)(a),names:(I=a.types)==null?void 0:I.flat(),variable:a.variable,nullable:a.nullable},null,8,["names","variable","nullable"])}),128))],64)):(s(!0),o(r,{key:1},w(e(n).returns,a=>(s(),u(M,{key:e($)(a),names:a},null,8,["names"]))),128))])):(s(),u(W,{key:1,type:["void"]})),l("div",Re,[e(x)?(s(),o("p",{key:0,class:"noprose",innerHTML:e(x)},null,8,Ve)):i("",!0)])],64)):i("",!0)])])}}});export{De as default};