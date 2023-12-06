"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[136],{5917:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=i(5893),n=i(1151);const o={sidebar_position:2},s="Working with Detectors",a={id:"building-applications/working-with-detectors",title:"Working with Detectors",description:"Explicitly create a new detector",source:"@site/docs/building-applications/3-working-with-detectors.md",sourceDirName:"building-applications",slug:"/building-applications/working-with-detectors",permalink:"/python-sdk/docs/building-applications/working-with-detectors",draft:!1,unlisted:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/docs/building-applications/3-working-with-detectors.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Grabbing Images",permalink:"/python-sdk/docs/building-applications/grabbing-images"},next:{title:"Confidence Levels",permalink:"/python-sdk/docs/building-applications/managing-confidence"}},l={},d=[{value:"Explicitly create a new detector",id:"explicitly-create-a-new-detector",level:3},{value:"Retrieve an existing detector",id:"retrieve-an-existing-detector",level:3},{value:"List your detectors",id:"list-your-detectors",level:3},{value:"Retrieve an image query",id:"retrieve-an-image-query",level:3},{value:"List your previous image queries",id:"list-your-previous-image-queries",level:3},{value:"Adding labels to existing image queries",id:"adding-labels-to-existing-image-queries",level:3}];function g(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"working-with-detectors",children:"Working with Detectors"}),"\n",(0,r.jsx)(t.h3,{id:"explicitly-create-a-new-detector",children:"Explicitly create a new detector"}),"\n",(0,r.jsxs)(t.p,{children:["Typically you'll use the ",(0,r.jsx)(t.code,{children:"get_or_create_detector(name: str, query: str)"})," method to find an existing detector you've already created with the same name, or create a new one if it doesn't exists. But if you'd like to force creating a new detector you can also use the ",(0,r.jsx)(t.code,{children:"create_detector(name: str, query: str)"})," method"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",metastring:"notest",children:'from groundlight import Groundlight\n\ngl = Groundlight()\n# highlight-start\ndetector = gl.create_detector(name="your_detector_name", query="is this what we want to see?")\n# highlight-end\n'})}),"\n",(0,r.jsx)(t.h3,{id:"retrieve-an-existing-detector",children:"Retrieve an existing detector"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",metastring:"notest",children:'from groundlight import Groundlight\n\ngl = Groundlight()\n# highlight-start\ndetector = gl.get_detector(id="YOUR_DETECTOR_ID")\n# highlight-end\n'})}),"\n",(0,r.jsx)(t.h3,{id:"list-your-detectors",children:"List your detectors"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from groundlight import Groundlight\n\ngl = Groundlight()\n# highlight-start\n# Defaults to 10 results per page\ndetectors = gl.list_detectors()\n\n# Pagination: 1st page of 5 results per page\ndetectors = gl.list_detectors(page=1, page_size=5)\n# highlight-end\n"})}),"\n",(0,r.jsx)(t.h3,{id:"retrieve-an-image-query",children:"Retrieve an image query"}),"\n",(0,r.jsxs)(t.p,{children:["In practice, you may want to check for a new result on your query. For example, after a cloud reviewer labels your query. For example, you can use the ",(0,r.jsx)(t.code,{children:"image_query.id"})," after the above ",(0,r.jsx)(t.code,{children:"submit_image_query()"})," call."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",metastring:"notest",children:'from groundlight import Groundlight\n\ngl = Groundlight()\n# highlight-start\nimage_query = gl.get_image_query(id="iq_YOUR_IMAGE_QUERY_ID")\n# highlight-end\n'})}),"\n",(0,r.jsx)(t.h3,{id:"list-your-previous-image-queries",children:"List your previous image queries"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from groundlight import Groundlight\n\ngl = Groundlight()\n# highlight-start\n# Defaults to 10 results per page\nimage_queries = gl.list_image_queries()\n\n# Pagination: 1st page of 5 results per page\nimage_queries = gl.list_image_queries(page=1, page_size=5)\n# highlight-end\n"})}),"\n",(0,r.jsx)(t.h3,{id:"adding-labels-to-existing-image-queries",children:"Adding labels to existing image queries"}),"\n",(0,r.jsxs)(t.p,{children:["Groundlight lets you start using models by making queries against your very first image, but there are a few situations where you might either have an existing dataset, or you'd like to handle the escalation response programatically in your own code but still include the label to get better responses in the future. With your ",(0,r.jsx)(t.code,{children:"image_query"})," from either ",(0,r.jsx)(t.code,{children:"submit_image_query()"})," or ",(0,r.jsx)(t.code,{children:"get_image_query()"})," you can add the label directly. Note that if the query is already in the escalation queue due to low ML confidence or audit thresholds, it may also receive labels from another source."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from groundlight import Groundlight\nfrom PIL import Image\nimport requests\n\ngl = Groundlight()\nd = gl.get_or_create_detector(name="doorway", query="Is the doorway open?")\nimage_url= "https://images.selfstorage.com/large-compress/2174925f24362c479b2.jpg"\nimage = Image.open(requests.get(image_url, stream=True).raw)\nimage_query = gl.submit_image_query(detector=d, image=image)\n# highlight-start\ngl.add_label(image_query, \'YES\') # or \'NO\'\n# highlight-end\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The only valid labels at this time are ",(0,r.jsx)(t.code,{children:"'YES'"})," and ",(0,r.jsx)(t.code,{children:"'NO'"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>s});var r=i(7294);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);