"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[390],{3096:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var o=r(5893),i=r(3905);const t={},s="OpenFOAM Workload Profiles",l={id:"workloads/openfoam/openfoam-profiles",title:"OpenFOAM Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the OpenFOAM workload.",source:"@site/docs/workloads/openfoam/openfoam-profiles.md",sourceDirName:"workloads/openfoam",slug:"/workloads/openfoam/openfoam-profiles",permalink:"/VirtualClient/docs/workloads/openfoam/openfoam-profiles",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/openfoam/openfoam-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenFOAM",permalink:"/VirtualClient/docs/workloads/openfoam/"},next:{title:"OpenSSL",permalink:"/VirtualClient/docs/workloads/openssl/"}},a={},c=[{value:"PERF-OPENFOAM.json",id:"perf-openfoamjson",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.ah)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"openfoam-workload-profiles",children:"OpenFOAM Workload Profiles"}),"\n",(0,o.jsx)(n.p,{children:"The following profiles run customer-representative or benchmarking scenarios using the OpenFOAM workload."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/VirtualClient/docs/workloads/openfoam/",children:"Workload Details"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"perf-openfoamjson",children:"PERF-OPENFOAM.json"}),"\n",(0,o.jsx)(n.p,{children:"Runs the OpenFOAM workload which measures performance in terms of iterations per minute."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-OPENFOAM.json",children:"Workload Profile"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Supported Platform/Architectures"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"linux-x64"}),"\n",(0,o.jsx)(n.li,{children:"linux-arm64"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Dependencies"}),(0,o.jsx)(n.br,{}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Internet connection."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/",children:"Installing Dependencies"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Scenarios"}),(0,o.jsx)(n.br,{}),"\n","The following scenarios are covered by this workload profile."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"'airFoil2D' simulation using simpleFoam solver."}),"\n",(0,o.jsx)(n.li,{children:"'elbow' simulation using icoFoam solver."}),"\n",(0,o.jsx)(n.li,{children:"'lockExchange' simulation using twoLiquidMixingFoamSolver."}),"\n",(0,o.jsx)(n.li,{children:"'motorBike' simulation using simpleFoam solver (on linux-x64 systems only)."}),"\n",(0,o.jsx)(n.li,{children:"'pitzDaily' simulation using simpleFoam solver."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Profile Parameters"}),(0,o.jsx)(n.br,{}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload."]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Purpose"}),(0,o.jsx)(n.th,{children:"Default Value"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Iterations"}),(0,o.jsx)(n.td,{children:"Optional. Number of iterations for which particular simulation will be run."}),(0,o.jsx)(n.td,{children:"500"})]})})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Profile Runtimes"}),(0,o.jsx)(n.br,{}),"\n","See the 'Metadata' section of the profile for estimated runtimes. These timings represent the length of time required to run a single round of profile\nactions. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are often estimates based on the\nnumber of system cores."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Usage Examples"}),(0,o.jsx)(n.br,{}),"\n","The following section provides a few basic examples of how to use the workload profile."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'./VirtualClient --profile=PERF-OPENFOAM.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n./VirtualClient --profile=PERF-OPENFOAM.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --parameters=Iterations=10\n./VirtualClient --profile=PERF-OPENFOAM.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --scenarios=airFoil2D,elbow,motorBike\n\n'})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3905:(e,n,r)=>{r.d(n,{ah:()=>c});var o=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,o,i=function(e,n){if(null==e)return{};var r,o,i={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=o.createContext({}),c=function(e){var n=o.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var r=e.components,i=e.mdxType,t=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(r),u=i,f=h["".concat(a,".").concat(u)]||h[u]||d[u]||t;return r?o.createElement(f,s(s({ref:n},p),{},{components:r})):o.createElement(f,s({ref:n},p))}));p.displayName="MDXCreateElement"}}]);