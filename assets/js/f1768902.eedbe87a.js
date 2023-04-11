"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=o,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="Windows, Linux, Mac",l={unversionedId:"installation/linux-windows-mac",id:"installation/linux-windows-mac",title:"Windows, Linux, Mac",description:"Installation on common platforms is simple.  Just get python3, pip, and you're ready to go.",source:"@site/docs/installation/linux-windows-mac.md",sourceDirName:"installation",slug:"/installation/linux-windows-mac",permalink:"/python-sdk/docs/installation/linux-windows-mac",draft:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/docs/docs/docs/installation/linux-windows-mac.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Numpy, PIL, OpenCV - using common libraries",permalink:"/python-sdk/docs/installation/libraries-numpy-pil"},next:{title:"Raspberry Pi and NVIDIA Jetson",permalink:"/python-sdk/docs/installation/raspberry-pi-jetson"}},s={},p=[{value:"Python 3.7 or newer",id:"python-37-or-newer",level:2},{value:"Install the library",id:"install-the-library",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"windows-linux-mac"},"Windows, Linux, Mac"),(0,o.kt)("p",null,"Installation on common platforms is simple.  Just get ",(0,o.kt)("inlineCode",{parentName:"p"},"python3"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pip"),", and you're ready to go."),(0,o.kt)("h2",{id:"python-37-or-newer"},"Python 3.7 or newer"),(0,o.kt)("p",null,"Groundlight's SDK supports Python 3.7 - 3.11."),(0,o.kt)("h2",{id:"install-the-library"},"Install the library"),(0,o.kt)("p",null,"Make sure you have the latest version by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip3 install groundlight --upgrade\n")))}d.isMDXComponent=!0}}]);