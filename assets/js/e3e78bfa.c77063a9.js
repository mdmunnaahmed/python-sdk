"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},l="Numpy, PIL, OpenCV - using common libraries",o={unversionedId:"installation/libraries-numpy-pil",id:"installation/libraries-numpy-pil",title:"Numpy, PIL, OpenCV - using common libraries",description:"Smaller is better!",source:"@site/docs/installation/libraries-numpy-pil.md",sourceDirName:"installation",slug:"/installation/libraries-numpy-pil",permalink:"/python-sdk/docs/installation/libraries-numpy-pil",draft:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/docs/installation/libraries-numpy-pil.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/python-sdk/docs/installation/"},next:{title:"Installing on Windows, Linux, or MacOS",permalink:"/python-sdk/docs/installation/linux-windows-mac"}},s={},p=[{value:"Smaller is better!",id:"smaller-is-better",level:2},{value:"Numpy",id:"numpy",level:2},{value:"PIL",id:"pil",level:2},{value:"OpenCV",id:"opencv",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"numpy-pil-opencv---using-common-libraries"},"Numpy, PIL, OpenCV - using common libraries"),(0,i.kt)("h2",{id:"smaller-is-better"},"Smaller is better!"),(0,i.kt)("p",null,"Groundlight is optimized to run on small edge devices. As such, you can use the Groundlight SDK without\ninstalling large libraries like ",(0,i.kt)("inlineCode",{parentName:"p"},"numpy")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenCV"),"."),(0,i.kt)("p",null,"But if you're already installing them, we'll use them. Our SDK detects if these libraries are installed\nand will make use of them if they're present. If not, we'll gracefully degrade, and tell you what's\nwrong if you try to use these features."),(0,i.kt)("h2",{id:"numpy"},"Numpy"),(0,i.kt)("p",null,"The Groundlight SDK can accept images as ",(0,i.kt)("inlineCode",{parentName:"p"},"numpy")," arrays. They should be in the standard HWN format in BGR color order, matching OpenCV standards.\nPixel values should be from 0-255 (not 0.0-1.0 as floats). SO ",(0,i.kt)("inlineCode",{parentName:"p"},"uint8")," data type is preferable since it saves memory."),(0,i.kt)("p",null,"Here's sample code to create an 800x600 random image in numpy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"notest",notest:!0},"import numpy as np\n\nimg = np_img = np.random.uniform(0, 255, (600, 800, 3))\n")),(0,i.kt)("p",null,"If you have an RGB array, you must reverse the channel order before sending it to Groundlight, like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"notest",notest:!0},"bgr_img = rgb_img[:, :, ::-1]\n")),(0,i.kt)("h2",{id:"pil"},"PIL"),(0,i.kt)("p",null,"The Groundlight SDK can accept PIL images directly in ",(0,i.kt)("inlineCode",{parentName:"p"},"submit_image_query"),"."),(0,i.kt)("h2",{id:"opencv"},"OpenCV"),(0,i.kt)("p",null,"OpenCV creates images that are stored as numpy arrays. So can send them to ",(0,i.kt)("inlineCode",{parentName:"p"},"submit_image_query")," directly."))}c.isMDXComponent=!0}}]);