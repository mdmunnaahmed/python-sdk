"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[45],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=p(r),c=a,d=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return r?n.createElement(d,i(i({ref:t},g),{},{components:r})):n.createElement(d,i({ref:t},g))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="Getting Started",s={unversionedId:"getting-started/getting-started",id:"getting-started/getting-started",title:"Getting Started",description:"Computer Vision powered by Natural Language",source:"@site/docs/getting-started/getting-started.mdx",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/python-sdk/docs/getting-started/",draft:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/docs/getting-started/getting-started.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"API Tokens",permalink:"/python-sdk/docs/getting-started/api-tokens"}},l={},p=[{value:"Computer Vision powered by Natural Language",id:"computer-vision-powered-by-natural-language",level:2},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Getting Started",id:"getting-started-1",level:2}],g={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"computer-vision-powered-by-natural-language"},"Computer Vision powered by Natural Language"),(0,a.kt)("p",null,"Build a working computer vision system in just a few lines of python:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from groundlight import Groundlight\nfrom PIL import Image\nimport requests\n\ngl = Groundlight()\ndet = gl.get_or_create_detector(name="doorway", query="Is the doorway open?")\nimg = "./docs/static/img/doorway.jpg"  # Image can be a file or a Python object\nimage_query = gl.submit_image_query(detector=det, image=img)\nprint(f"The answer is {image_query.result}")\n')),(0,a.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,a.kt)("p",null,"Your images are first analyzed by machine learning (ML) models which are automatically trained on your data. If those models have high enough confidence, that's your answer. But if the models are unsure, then the images are progressively escalated to more resource-intensive analysis methods up to real-time human review. So what you get is a computer vision system that starts working right away without even needing to first gather and label a dataset. At first it will operate with high latency, because people need to review the image queries. But over time, the ML systems will learn and improve so queries come back faster with higher confidence."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'Note: The SDK is currently in "beta" phase. Interfaces are subject to change in future versions.')),(0,a.kt)("h2",{id:"getting-started-1"},"Getting Started"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"groundlight")," SDK. Requires python version 3.7 or higher. See ",(0,a.kt)("a",{parentName:"p",href:"#Prerequisites"},"prerequisites"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pip3 install groundlight\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Head over to the ",(0,a.kt)("a",{parentName:"p",href:"https://app.groundlight.ai/reef/my-account/api-tokens"},"groundlight web\napp")," to create an ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/api-tokens"},"API token"),". You will\nneed to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUNDLIGHT_API_TOKEN")," environment variable to access the API."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"export GROUNDLIGHT_API_TOKEN=api_2GdXMflhJi6L_example\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a python script."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="ask.py"',title:'"ask.py"'},'from groundlight import Groundlight\nfrom PIL import Image\nimport requests\n\ngl = Groundlight()\nd = gl.get_or_create_detector(name="doorway", query="Is the doorway open?")\nimage_url= "https://images.selfstorage.com/large-compress/2174925f24362c479b2.jpg"\nimage = Image.open(requests.get(image_url, stream=True).raw)\nimage_query = gl.submit_image_query(detector=d, image=image)\nprint(f"The answer is {image_query.result}")\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run it!"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ python ask.py\n")))))}m.isMDXComponent=!0}}]);