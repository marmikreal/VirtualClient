"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[1704],{7434:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var t=r(5893),d=r(3905);const n={},i="Apache Hadoop - TeraSort",l={id:"workloads/hadoop/hadoop",title:"Apache Hadoop - TeraSort",description:"Overview",source:"@site/docs/workloads/hadoop/hadoop.md",sourceDirName:"workloads/hadoop",slug:"/workloads/hadoop/",permalink:"/VirtualClient/docs/workloads/hadoop/",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/hadoop/hadoop.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Graph500 Workload Profiles",permalink:"/VirtualClient/docs/workloads/graph500/graph500-profiles"},next:{title:"Hadoop Terasort Workload Profiles",permalink:"/VirtualClient/docs/workloads/hadoop/hadoop-profiles"}},o={},c=[{value:"Overview",id:"overview",level:2},{value:"Why TeraSort?",id:"why-terasort",level:2},{value:"Key Objectives of TeraSort",id:"key-objectives-of-terasort",level:3},{value:"How TeraSort Works",id:"how-terasort-works",level:2},{value:"Support for Java versions",id:"support-for-java-versions",level:2},{value:"What is Being Measured?",id:"what-is-being-measured",level:2},{value:"TeraGen Counters",id:"teragen-counters",level:4},{value:"TeraSort Counters",id:"terasort-counters",level:4}];function a(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"apache-hadoop---terasort",children:"Apache Hadoop - TeraSort"}),"\n",(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(s.p,{children:"TeraSort is a benchmark used to evaluate the efficiency of distributed computing frameworks in sorting large datasets. The benchmark was introduced by the Apache Hadoop project, which is a popular open-source framework for distributed storage and processing of big data. TeraSort is designed to test the scalability and performance of distributed systems when sorting massive amounts of data."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://hadoop.apache.org/docs/r3.3.5/hadoop-project-dist/hadoop-common/SingleCluster.html",children:"Official Documentation"})}),"\n",(0,t.jsx)(s.h2,{id:"why-terasort",children:"Why TeraSort?"}),"\n",(0,t.jsx)(s.p,{children:"Sorting is a fundamental operation in data processing, and it becomes especially challenging when dealing with enormous datasets that cannot fit into the memory of a single machine. TeraSort addresses the need for efficient sorting in distributed environments and helps assess the performance of big data processing frameworks."}),"\n",(0,t.jsx)(s.h3,{id:"key-objectives-of-terasort",children:"Key Objectives of TeraSort"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Scalability:"})," TeraSort aims to evaluate how well a distributed computing framework scales when sorting data across a large number of nodes or machines."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Efficiency:"})," The benchmark assesses the efficiency of the sorting algorithm and the overall data processing framework in terms of time and resource utilization."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Fault Tolerance:"})," TeraSort provides insights into how well a system can handle failures or node outages during the sorting process, crucial for robustness in large-scale distributed systems."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Optimization:"})," It encourages developers to optimize sorting algorithms and data processing techniques to achieve better performance on distributed platforms."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"how-terasort-works",children:"How TeraSort Works"}),"\n",(0,t.jsx)(s.p,{children:"TeraSort uses a specific dataset generated with a total size of one terabyte, hence the name. The dataset consists of key-value pairs, where the key is a 10-byte long random string, and the value is a 90-byte payload. The sorting task involves ordering the key-value pairs based on the keys."}),"\n",(0,t.jsx)(s.p,{children:"The sorting process is divided into map and reduce phases:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Map Phase:"})," Each node in the distributed system processes a portion of the input dataset and produces a set of key-value pairs with the keys as the sorting criterion."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Shuffle and Sort Phase:"})," The framework shuffles the intermediate key-value pairs, ensuring that all values associated with the same key are sent to the same reducer."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Reduce Phase:"})," Each reducer processes a subset of the sorted key-value pairs, producing the final globally sorted output."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"support-for-java-versions",children:"Support for Java versions"}),"\n",(0,t.jsx)(s.p,{children:"The Hadoop 3.3.x versions support Java 8 and Java 11."}),"\n",(0,t.jsxs)(s.p,{children:["Adding the reference of the documentation here: ",(0,t.jsx)(s.a,{href:"https://cwiki.apache.org/confluence/display/HADOOP/Hadoop+Java+Versions",children:"Supported Java Versions for Hadoop"})]}),"\n",(0,t.jsx)(s.h2,{id:"what-is-being-measured",children:"What is Being Measured?"}),"\n",(0,t.jsx)(s.p,{children:"In TeraSort, the primary metric being measured is the efficiency and performance of a distributed computing framework when sorting a massive dataset."}),"\n",(0,t.jsx)(s.h4,{id:"teragen-counters",children:"TeraGen Counters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Group"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Counter Name"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Description"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"File System Counters"})}),(0,t.jsx)(s.td,{children:"Number of bytes read"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Number of bytes written"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Number of read operations"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Number of large read operations"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Number of write operations"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Number of bytes read"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Number of bytes written"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Number of read operations"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Number of large read operations"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Number of write operations"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Number of bytes read read erasure-coded"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Job Counters"})}),(0,t.jsx)(s.td,{children:"Launched Map Tasks"}),(0,t.jsx)(s.td,{children:"Total number of map tasks launched for TeraGen."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Other local map tasks"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Total time spent by all maps in occupied slots (ms)"}),(0,t.jsx)(s.td,{children:"7863"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Total time spent by all reduces in occupied slots (ms)"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Total time spent by all map tasks (ms)"}),(0,t.jsx)(s.td,{children:"7863"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Total vcore-milliseconds taken by all map tasks"}),(0,t.jsx)(s.td,{children:"7863"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Total megabyte-milliseconds taken by all map tasks"}),(0,t.jsx)(s.td,{children:"8051712"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Map-Reduce Framework"})}),(0,t.jsx)(s.td,{children:"Map Input Records"}),(0,t.jsx)(s.td,{children:"Total number of input records generated by TeraGen."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Map Output Records"}),(0,t.jsx)(s.td,{children:"Total number of key-value pairs emitted by TeraGen."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Input split bytes"}),(0,t.jsx)(s.td,{children:"158"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Spilled Records"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Failed Shuffles"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Merged Map outputs"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"GC time elapsed (ms)"}),(0,t.jsx)(s.td,{children:"45"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"CPU time spent (ms)"}),(0,t.jsx)(s.td,{children:"1210"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Physical memory (bytes) snapshot"}),(0,t.jsx)(s.td,{children:"439705600"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Virtual memory (bytes) snapshot"}),(0,t.jsx)(s.td,{children:"5462753280"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Total committed heap usage (bytes)"}),(0,t.jsx)(s.td,{children:"524288000"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Peak Map Physical memory (bytes)"}),(0,t.jsx)(s.td,{children:"224296960"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Peak Map Virtual memory (bytes)"}),(0,t.jsx)(s.td,{children:"2732146688"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"These counters provide insights into the generation of the input dataset by TeraGen, including the number of records, bytes processed, and the efficiency of map tasks."}),"\n",(0,t.jsx)(s.h4,{id:"terasort-counters",children:"TeraSort Counters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Group"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Counter Name"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Description"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"File System Counters"})}),(0,t.jsx)(s.td,{children:"FILE: Number of bytes read"}),(0,t.jsx)(s.td,{children:"10406"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"FILE: Number of bytes written"}),(0,t.jsx)(s.td,{children:"851997"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"FILE: Number of read operations"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"FILE: Number of large read operations"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"FILE: Number of write operations"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"HDFS: Number of bytes read"}),(0,t.jsx)(s.td,{children:"10222"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"HDFS: Number of bytes written"}),(0,t.jsx)(s.td,{children:"10000"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"HDFS: Number of read operations"}),(0,t.jsx)(s.td,{children:"11"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"HDFS: Number of large read operations"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"HDFS: Number of write operations"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"HDFS: Number of bytes read erasure-coded"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Job Counters"})}),(0,t.jsx)(s.td,{children:"Launched map tasks"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Launched reduce tasks"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Data-local map tasks"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Total time spent by all maps in occupied slots (ms)"}),(0,t.jsx)(s.td,{children:"9130"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Total time spent by all reduces in occupied slots (ms)"}),(0,t.jsx)(s.td,{children:"2844"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Total time spent by all map tasks (ms)"}),(0,t.jsx)(s.td,{children:"9130"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Total time spent by all reduce tasks (ms)"}),(0,t.jsx)(s.td,{children:"2844"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Total vcore-milliseconds taken by all map tasks"}),(0,t.jsx)(s.td,{children:"9130"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Total vcore-milliseconds taken by all reduce tasks"}),(0,t.jsx)(s.td,{children:"2844"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Total megabyte-milliseconds taken by all map tasks"}),(0,t.jsx)(s.td,{children:"9349120"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Total megabyte-milliseconds taken by all reduce tasks"}),(0,t.jsx)(s.td,{children:"2912256"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Map-Reduce Framework"})}),(0,t.jsx)(s.td,{children:"Map input records"}),(0,t.jsx)(s.td,{children:"100"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Map output records"}),(0,t.jsx)(s.td,{children:"100"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Map output bytes"}),(0,t.jsx)(s.td,{children:"10200"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Map output materialized bytes"}),(0,t.jsx)(s.td,{children:"10412"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Input split bytes"}),(0,t.jsx)(s.td,{children:"222"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Combine input records"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Combine output records"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Reduce input groups"}),(0,t.jsx)(s.td,{children:"100"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Reduce shuffle bytes"}),(0,t.jsx)(s.td,{children:"10412"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Reduce input records"}),(0,t.jsx)(s.td,{children:"100"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Reduce output records"}),(0,t.jsx)(s.td,{children:"100"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Spilled Records"}),(0,t.jsx)(s.td,{children:"200"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Shuffled Maps"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Failed Shuffles"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Merged Map outputs"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"GC time elapsed (ms)"}),(0,t.jsx)(s.td,{children:"71"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"CPU time spent (ms)"}),(0,t.jsx)(s.td,{children:"1890"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Physical memory (bytes) snapshot"}),(0,t.jsx)(s.td,{children:"875524096"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Virtual memory (bytes) snapshot"}),(0,t.jsx)(s.td,{children:"8197414912"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Total committed heap usage (bytes)"}),(0,t.jsx)(s.td,{children:"786432000"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Peak Map Physical memory (bytes)"}),(0,t.jsx)(s.td,{children:"324009984"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Peak Map Virtual memory (bytes)"}),(0,t.jsx)(s.td,{children:"2730729472"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Peak Reduce Physical memory (bytes)"}),(0,t.jsx)(s.td,{children:"229695488"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Peak Reduce Virtual memory (bytes)"}),(0,t.jsx)(s.td,{children:"2741366784"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"These counters provide detailed insights into the sorting process performed by TeraSort, including the number of records, bytes processed, and resource utilization metrics."})]})}function h(e={}){const{wrapper:s}={...(0,d.ah)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},3905:(e,s,r)=>{r.d(s,{ah:()=>c});var t=r(7294);function d(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}function n(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?n(Object(r),!0).forEach((function(s){d(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}function l(e,s){if(null==e)return{};var r,t,d=function(e,s){if(null==e)return{};var r,t,d={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],s.indexOf(r)>=0||(d[r]=e[r]);return d}(e,s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],s.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(d[r]=e[r])}return d}var o=t.createContext({}),c=function(e){var s=t.useContext(o),r=s;return e&&(r="function"==typeof e?e(s):i(i({},s),e)),r},a={inlineCode:"code",wrapper:function(e){var s=e.children;return t.createElement(t.Fragment,{},s)}},h=t.forwardRef((function(e,s){var r=e.components,d=e.mdxType,n=e.originalType,o=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),j=c(r),x=d,p=j["".concat(o,".").concat(x)]||j[x]||a[x]||n;return r?t.createElement(p,i(i({ref:s},h),{},{components:r})):t.createElement(p,i({ref:s},h))}));h.displayName="MDXCreateElement"}}]);