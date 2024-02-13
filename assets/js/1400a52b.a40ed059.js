"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[9134],{3817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(5893),i=n(3905);const s={},o="Mount Disks",l={id:"dependencies/0071-mount-disks",title:"Mount Disks",description:"Virtual Client has a dependency component that can be added to a workload or monitor profile to mount disks before execution. The following section illustrates the details for integrating this into the profile.",source:"@site/docs/dependencies/0071-mount-disks.md",sourceDirName:"dependencies",slug:"/dependencies/0071-mount-disks",permalink:"/VirtualClient/docs/dependencies/0071-mount-disks",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/dependencies/0071-mount-disks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Format Disks",permalink:"/VirtualClient/docs/dependencies/0070-format-disks"},next:{title:"Install AMD GPU Drivers",permalink:"/VirtualClient/docs/dependencies/0080-install-amd-drivers"}},a={},d=[{value:"Supported Platform/Architectures",id:"supported-platformarchitectures",level:2},{value:"Profile Component Parameters",id:"profile-component-parameters",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"mount-disks",children:"Mount Disks"}),"\n",(0,r.jsx)(t.p,{children:"Virtual Client has a dependency component that can be added to a workload or monitor profile to mount disks before execution. The following section illustrates the details for integrating this into the profile."}),"\n",(0,r.jsx)(t.p,{children:"NOTE: It is going to mount the disk volumes which does not have any mount points and are already formatted.\nIt is going to name using the mount point prefix like following example: mountpointprefix0,mountpointprefix1,etc."}),"\n",(0,r.jsx)(t.h2,{id:"supported-platformarchitectures",children:"Supported Platform/Architectures"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"linux-x64"}),"\n",(0,r.jsx)(t.li,{children:"linux-arm64"}),"\n",(0,r.jsx)(t.li,{children:"win-x64"}),"\n",(0,r.jsx)(t.li,{children:"win-arm64"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"profile-component-parameters",children:"Profile Component Parameters"}),"\n",(0,r.jsx)(t.p,{children:"The following section describes the parameters used by the individual component in the profile."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Parameter"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Required"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Default Value"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DiskFilter"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"The diskfilter will select the disks to be mounted."}),(0,r.jsxs)(t.td,{children:["OSDisk",":false"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MountPointPrefix"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"This gives the prefix name for mount point names for volumes."}),(0,r.jsx)(t.td,{children:"mountPoint"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"In this example, VC partitions unformatted disks on the system. Disks that have existing partitions/volumes are left alone, and the OS disk is never formatted."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n    "Type": "FormatDisks",\n    "Parameters": {\n        "Scenario": "InitializeDisks"\n    }\n},\n{\n    "Type": "MountDisks",\n    "Parameters": {\n        "Scenario": "MountDataDisk",\n        "MountPointPrefix": "/mlperftraining",\n        "DiskFilter":  "BiggestSize"\n    }\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),d=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,m=u["".concat(a,".").concat(h)]||u[h]||c[h]||s;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));p.displayName="MDXCreateElement"}}]);