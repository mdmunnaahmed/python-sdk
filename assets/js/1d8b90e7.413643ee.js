"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[29],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=n,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return r?i.createElement(m,o(o({ref:t},c),{},{components:r})):i.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},497:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=r(7462),n=(r(7294),r(3905));const a={sidebar_position:3},o="Working with Detectors",l={unversionedId:"building-applications/working-with-detectors",id:"building-applications/working-with-detectors",title:"Working with Detectors",description:"Explicitly create a new detector",source:"@site/docs/building-applications/working-with-detectors.md",sourceDirName:"building-applications",slug:"/building-applications/working-with-detectors",permalink:"/python-sdk/docs/building-applications/working-with-detectors",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/building-applications/working-with-detectors.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Building Applications",permalink:"/python-sdk/docs/category/building-applications"},next:{title:"Using Groundlight on the edge",permalink:"/python-sdk/docs/building-applications/edge"}},s={},u=[{value:"Explicitly create a new detector",id:"explicitly-create-a-new-detector",level:3},{value:"Retrieve an existing detector",id:"retrieve-an-existing-detector",level:3},{value:"List your detectors",id:"list-your-detectors",level:3},{value:"Retrieve an image query",id:"retrieve-an-image-query",level:3},{value:"List your previous image queries",id:"list-your-previous-image-queries",level:3},{value:"Adding labels to existing image queries",id:"adding-labels-to-existing-image-queries",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"working-with-detectors"},"Working with Detectors"),(0,n.kt)("h3",{id:"explicitly-create-a-new-detector"},"Explicitly create a new detector"),(0,n.kt)("p",null,"Typically you'll use the ",(0,n.kt)("inlineCode",{parentName:"p"},"get_or_create_detector(name: str, query: str)")," method to find an existing detector you've already created with the same name, or create a new one if it doesn't exists. But if you'd like to force creating a new detector you can also use the ",(0,n.kt)("inlineCode",{parentName:"p"},"create_detector(name: str, query: str)")," method"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from groundlight import Groundlight\n\ngl = Groundlight()\n# highlight-start\ndetector = gl.create_detector(name="your_detector_name", query="is this what we want to see?")\n# highlight-end\n')),(0,n.kt)("h3",{id:"retrieve-an-existing-detector"},"Retrieve an existing detector"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'detector = gl.get_detector(id="YOUR_DETECTOR_ID")\n')),(0,n.kt)("h3",{id:"list-your-detectors"},"List your detectors"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# Defaults to 10 results per page\ndetectors = gl.list_detectors()\n\n# Pagination: 3rd page of 25 results per page\ndetectors = gl.list_detectors(page=3, page_size=25)\n")),(0,n.kt)("h3",{id:"retrieve-an-image-query"},"Retrieve an image query"),(0,n.kt)("p",null,"In practice, you may want to check for a new result on your query. For example, after a cloud reviewer labels your query. For example, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"image_query.id")," after the above ",(0,n.kt)("inlineCode",{parentName:"p"},"submit_image_query()")," call."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'image_query = gl.get_image_query(id="YOUR_IMAGE_QUERY_ID")\n')),(0,n.kt)("h3",{id:"list-your-previous-image-queries"},"List your previous image queries"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# Defaults to 10 results per page\nimage_queries = gl.list_image_queries()\n\n# Pagination: 3rd page of 25 results per page\nimage_queries = gl.list_image_queries(page=3, page_size=25)\n")),(0,n.kt)("h3",{id:"adding-labels-to-existing-image-queries"},"Adding labels to existing image queries"),(0,n.kt)("p",null,"Groundlight lets you start using models by making queries against your very first image, but there are a few situations where you might either have an existing dataset, or you'd like to handle the escalation response programatically in your own code but still include the label to get better responses in the future. With your ",(0,n.kt)("inlineCode",{parentName:"p"},"image_query")," from either ",(0,n.kt)("inlineCode",{parentName:"p"},"submit_image_query()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"get_image_query()")," you can add the label directly. Note that if the query is already in the escalation queue due to low ML confidence or audit thresholds, it may also receive labels from another source."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"add_label(image_query, 'YES').   # or 'NO'\n")),(0,n.kt)("p",null,"The only valid labels at this time are ",(0,n.kt)("inlineCode",{parentName:"p"},"'YES'")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"'NO'")))}d.isMDXComponent=!0}}]);