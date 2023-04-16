"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="A Serious Example: Retail Analytics",s={unversionedId:"getting-started/retail-analytics",id:"getting-started/retail-analytics",title:"A Serious Example: Retail Analytics",description:"Tracking utilization of a customer service counter",source:"@site/docs/getting-started/2-retail-analytics.md",sourceDirName:"getting-started",slug:"/getting-started/retail-analytics",permalink:"/python-sdk/docs/getting-started/retail-analytics",draft:!1,editUrl:"https://github.com/groundlight/python-sdk/tree/main/docs/docs/getting-started/2-retail-analytics.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API Tokens",permalink:"/python-sdk/docs/getting-started/api-tokens"},next:{title:"A Silly Example: Dog-on-Couch Detector",permalink:"/python-sdk/docs/getting-started/dog-on-couch"}},l={},c=[{value:"Tracking utilization of a customer service counter",id:"tracking-utilization-of-a-customer-service-counter",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Creating the Application",id:"creating-the-application",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"a-serious-example-retail-analytics"},"A Serious Example: Retail Analytics"),(0,a.kt)("h2",{id:"tracking-utilization-of-a-customer-service-counter"},"Tracking utilization of a customer service counter"),(0,a.kt)("p",null,"This example demonstrates the application of Groundlight to a retail analytics solution, which monitors the usage of a service counter by customers throughout the day. The application creates a detector to identify when the service desk is being utilized by a customer. It checks the detector every minute, and once an hour, it prints out a summary of the percentage of time that the service counter is in use. At the end of the day, it emails the daily log."),(0,a.kt)("p",null,"This retail analytics application can be beneficial in various ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Staff allocation and scheduling:")," By analyzing the usage patterns of the service counter, store managers can optimize staff allocation and scheduling, ensuring that enough employees are available during peak hours and reducing wait times for customers.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Identifying trends:")," The application can help identify trends in customer behavior, such as busier times of the day or specific days of the week with higher traffic. This information can be used to plan targeted marketing campaigns or promotions to increase sales and customer engagement.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Improving store layout:")," Understanding when and how often customers use the service counter can provide insights into the effectiveness of the store's layout. Retailers can use this information to make data-driven decisions about rearranging the store layout to encourage customers to visit the service counter or explore other areas of the store.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Customer satisfaction:")," By monitoring the usage of the service counter and proactively addressing long wait times or crowded areas, retailers can improve customer satisfaction and loyalty. A positive customer experience can lead to increased sales and return visits."))),(0,a.kt)("p",null,"To implement this retail analytics solution, a store would need to install a supported camera near the service counter, ensuring a clear view of the area. The camera would then be connected to a computer running the Groundlight-based application. Store managers would receive hourly summaries of the service counter usage and a daily log via email, enabling them to make informed decisions to improve store operations and customer experience."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/installation/"},"Groundlight SDK")," with Python 3.7 or higher"),(0,a.kt)("li",{parentName:"ul"},"A supported USB or network-connected camera"),(0,a.kt)("li",{parentName:"ul"},"An email account with SMTP access to send the daily log")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Ensure you have Python 3.7 or higher installed, and then install the Groundlight SDK, OpenCV library, and other required libraries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install groundlight opencv-python pillow\n")),(0,a.kt)("h2",{id:"creating-the-application"},"Creating the Application"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First, log in to the ",(0,a.kt)("a",{parentName:"p",href:"https://app.groundlight.ai"},"Groundlight application")," and get an ",(0,a.kt)("a",{parentName:"p",href:"api-tokens"},"API Token"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, we'll write the Python script for the application. Import the required libraries:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"notest",notest:!0},"import time\nimport cv2\nimport smtplib\nfrom groundlight import Groundlight\nfrom PIL import Image\nfrom datetime import datetime, timedelta\nfrom email.mime.multipart import MIMEMultipart\nfrom email.mime.text import MIMEText\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Define a function to capture an image from the camera using OpenCV:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def capture_image():\n    cap = cv2.VideoCapture(0)\n\n    ret, frame = cap.read()\n    cap.release()\n\n    if ret:\n        # Convert to PIL image\n        return Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))\n    else:\n        return None\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Define a function to send the daily log via email.  You will need to customize this for your particular network environment.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def send_email(sender, receiver, subject, body):\n    msg = MIMEMultipart()\n    msg['From'] = sender\n    msg['To'] = receiver\n    msg['Subject'] = subject\n    msg.attach(MIMEText(body, 'plain'))\n\n    server = smtplib.SMTP('smtp.example.com', 587)\n    server.starttls()\n    server.login(sender, \"your-password\")\n    text = msg.as_string()\n    server.sendmail(sender, receiver, text)\n    server.quit()\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Define when your business's operating hours are:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"notest",notest:!0},"START_OF_BUSINESS = 9  # e.g. 9am\nEND_OF_BUSINESS = 17  # e.g. 5pm\n\ndef is_within_business_hours():\n    current_hour = datetime.now().hour\n    return START_OF_BUSINESS <= current_hour < END_OF_BUSINESS\n\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Write the main application loop:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"notest",notest:!0},'gl = Groundlight()\n\ndetector = gl.get_or_create_detector(\n                name="counter-in-use",\n                query="Is there a customer at the service counter?",\n                # We can get away with relatively low confidence since we\'re aggregating\n                confidence_threshold=0.8)\n\nDELAY = 60\n\nlog = []\ndaily_log = []\nnext_hourly_start = datetime.now().replace(minute=0, second=0, microsecond=0) + timedelta(hours=1)\n\nwhile True:\n    if not is_within_business_hours():\n        time.sleep(DELAY)\n        continue\n\n    image = capture_image()\n    if not image:\n        print("Failed to capture image")\n        time.sleep(DELAY)\n        continue\n\n    try:\n        iq = gl.submit_image_query(image=image, detector=detector, wait=60)\n    except Exception as e:\n        print(f"Error submitting image query: {e}")\n        time.sleep(DELAY)\n        continue\n\n    result = iq.result\n    log.append(result)\n\n    if datetime.now() >= next_hourly_start:\n        next_hourly_start += timedelta(hours=1)\n\n        percent_in_use = (log.count("YES") / len(log)) * 100\n        current_time = datetime.now().replace(hour=START_OF_BUSINESS, minute=0, second=0)\n        formatted_time = current_time.strftime("%I%p")  # like 3pm\n        msg = f"Hourly summary for {formatted_time}: {percent_in_use:.0f}% counter in use"\n        print(msg)\n        daily_log.append(msg)\n        log = []\n\n    current_hour = datetime.now().hour\n    if current_hour == END_OF_BUSINESS and not daily_log == []:\n        daily_summary = "Daily summary:\\n"\n        for msg in daily_log:\n            daily_summary += f"{msg}\\n"\n\n        print(daily_summary)\n        send_email(sender="counterbot@example.com",\n           receiver="manager@example.com",\n           subject="Daily Service Counter Usage Log",\n           body=daily_summary)\n        daily_log = []\n\n    time.sleep(DELAY)\n')),(0,a.kt)("p",null,"This application captures an image using the ",(0,a.kt)("inlineCode",{parentName:"p"},"capture_image")," function, then submits it to the Groundlight API for analysis. If a customer is detected at the counter, it logs the event. Every hour, it prints a summary of the counter's usage percentage, and at the end of the day, it emails the daily log using the ",(0,a.kt)("inlineCode",{parentName:"p"},"send_email")," function."),(0,a.kt)("p",null,"Save the script as ",(0,a.kt)("inlineCode",{parentName:"p"},"service_counter_monitor.py")," and run it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python service_counter_monitor.py\n")))}m.isMDXComponent=!0}}]);