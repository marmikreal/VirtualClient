"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[9615],{4376:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var d=n(5893),t=n(3905);const s={},i="MLPerf",l={id:"workloads/mlperf/mlperf",title:"MLPerf",description:"MLPerf is a consortium of AI leaders from academia, research labs, and industry whose mission is to \u201cbuild fair and useful benchmarks\u201d that provide unbiased evaluations of training and inference performance for hardware, software, and services\u2014all conducted under prescribed conditions. To stay on the cutting edge of industry trends, MLPerf continues to evolve, holding new tests at regular intervals and adding new workloads that represent the state of the art in AI.",source:"@site/docs/workloads/mlperf/mlperf.md",sourceDirName:"workloads/mlperf",slug:"/workloads/mlperf/",permalink:"/VirtualClient/docs/workloads/mlperf/",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/mlperf/mlperf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Memcached Workload Profiles",permalink:"/VirtualClient/docs/workloads/memcached/memcached-profiles"},next:{title:"MLPerf Workload Profiles",permalink:"/VirtualClient/docs/workloads/mlperf/mlperf-profiles"}},c={},h=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Supported Hardware Systems",id:"supported-hardware-systems",level:2},{value:"What is Being Measured?",id:"what-is-being-measured",level:2},{value:"Workload Metrics MLPerf Inference",id:"workload-metrics-mlperf-inference",level:2},{value:"Workload Metrics MLPerf Training",id:"workload-metrics-mlperf-training",level:2}];function x(e){const r={a:"a",del:"del",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.ah)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.h1,{id:"mlperf",children:"MLPerf"}),"\n",(0,d.jsx)(r.p,{children:"MLPerf is a consortium of AI leaders from academia, research labs, and industry whose mission is to \u201cbuild fair and useful benchmarks\u201d that provide unbiased evaluations of training and inference performance for hardware, software, and services\u2014all conducted under prescribed conditions. To stay on the cutting edge of industry trends, MLPerf continues to evolve, holding new tests at regular intervals and adding new workloads that represent the state of the art in AI."}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.a,{href:"https://github.com/mlcommons/training_results_v2.1/blob/main/MLPerf%E2%84%A2%20Training%20v2.0%20Results%20Discussion.pdf",children:"MLPerf Training Documentation"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.a,{href:"https://github.com/mlcommons/inference_results_v2.0",children:"MLPerf Inference Documentation"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.a,{href:"https://github.com/mlcommons/training_results_v2.1/tree/main/NVIDIA/benchmarks",children:"MLPerf Training Benchmarks"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.a,{href:"https://github.com/mlcommons/inference_results_v2.0/tree/master/closed/NVIDIA",children:"MLPerf Inference Benchmarks"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.a,{href:"/VirtualClient/docs/workloads/mlperf/mlperf-trainining-bert-preprocessing-data",children:"MLPerf Training Bert Preprocessing Data"})}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,d.jsx)(r.p,{children:"This is a GPU-specific workload and requires high-performance graphic cards to run. It is recommended that the system-under-test have a high-performing Nvidia (e.g. M60 or higher) or AMD (e.g. MI25 or higher)\ngraphics card."}),"\n",(0,d.jsx)(r.h2,{id:"supported-hardware-systems",children:"Supported Hardware Systems"}),"\n",(0,d.jsx)(r.p,{children:"The following section defines the hardware systems/SKUs on which the MLPerf workload will run effectively in cloud environments. These hardware systems contain\nGPU components for which the MLPerf workload is designed to test."}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Datacenter systems MLPerf Inference"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"A100-SXM-80GBx8 (NVIDIA DGX A100, 80GB variant)"}),"\n",(0,d.jsx)(r.li,{children:'A100-SXM-80GBx4 (NVIDIA DGX Station A100, "Red SEPTober", 80GB variant)'}),"\n",(0,d.jsx)(r.li,{children:"A100-PCIex8 (80GB variant)"}),"\n",(0,d.jsx)(r.li,{children:"A2x2"}),"\n",(0,d.jsx)(r.li,{children:"A30x8"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.li,{children:["\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Edge Systems MLPerf Inference"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"A100-SXM-80GBx1"}),"\n",(0,d.jsx)(r.li,{children:"A100-PCIex1 (80 GB variant)"}),"\n",(0,d.jsx)(r.li,{children:"A30x1"}),"\n",(0,d.jsx)(r.li,{children:"A2x1"}),"\n",(0,d.jsx)(r.li,{children:"Orin"}),"\n",(0,d.jsx)(r.li,{children:"Xavier NX"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.li,{children:["\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Supported Config Files for MlPerf Bert Training (config_{nodes}x{gpus per node}x{local batch size}x{gradien accumulation}.sh)"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"config_A30_1x2x224x14.sh"}),"\n",(0,d.jsx)(r.li,{children:"config_DGXA100_1x4x56x2.sh"}),"\n",(0,d.jsx)(r.li,{children:"config_DGXA100_1x8x56x1.sh"}),"\n",(0,d.jsx)(r.li,{children:"config_DGXA100_4gpu_common.sh"}),"\n",(0,d.jsx)(r.li,{children:"config_DGXA100_512x8x2x1_pack.sh"}),"\n",(0,d.jsx)(r.li,{children:"config_DGXA100_8x8x48x1.sh"}),"\n",(0,d.jsx)(r.li,{children:"config_DGXA100_common.sh"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Source: ",(0,d.jsx)(r.a,{href:"https://github.com/mlcommons/training_results_v2.1/tree/main/NVIDIA/benchmarks/bert/implementations/pytorch-22.09",children:"link"})]}),"\n",(0,d.jsxs)(r.p,{children:["Additional details on whether a system is supported or not can be found in the documetation here,\nfor each benchmark check it's respective implementation folder :\n",(0,d.jsx)(r.a,{href:"https://github.com/mlcommons/training_results_v2.1/tree/main/NVIDIA/benchmarks",children:"https://github.com/mlcommons/training_results_v2.1/tree/main/NVIDIA/benchmarks"}),"\n",(0,d.jsx)(r.a,{href:"https://github.com/mlcommons/inference_results_v2.0/tree/master/closed/NVIDIA",children:"https://github.com/mlcommons/inference_results_v2.0/tree/master/closed/NVIDIA"})]}),"\n",(0,d.jsx)(r.h2,{id:"what-is-being-measured",children:"What is Being Measured?"}),"\n",(0,d.jsx)(r.p,{children:"GPU performance across a wide range of inference models. Work is planned for integrating support for training models as well."}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Training Benchmarks"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"bert"}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.del,{children:"dlrm (not supported yet)"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.del,{children:"maskrcnn (not supported yet)"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.del,{children:"minigo (not supported yet)"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.del,{children:"resnet (not supported yet)"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.del,{children:"rnnt (not supported yet)"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.del,{children:"ssd (not supported yet)"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.del,{children:"unet3 (not supported yet)"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.li,{children:["\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Inference Benchmarks"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"bert"}),"\n",(0,d.jsx)(r.li,{children:"rnnt"}),"\n",(0,d.jsx)(r.li,{children:"ssd-mobilenet"}),"\n",(0,d.jsx)(r.li,{children:"ssd-resnet34"}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.del,{children:"resnet50 (not supported yet)"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.del,{children:"DLRM (not supported yet)"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.del,{children:"3D UNET (not supported yet)"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"workload-metrics-mlperf-inference",children:"Workload Metrics MLPerf Inference"}),"\n",(0,d.jsx)(r.p,{children:"The following metrics are examples of those captured by the Virtual Client when running the MLPerf Inference workload."}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Scenario"}),(0,d.jsx)(r.th,{children:"Metric Name"}),(0,d.jsx)(r.th,{children:"Example Value (min)"}),(0,d.jsx)(r.th,{children:"Example Value (max)"}),(0,d.jsx)(r.th,{children:"Example Value (avg)"}),(0,d.jsx)(r.th,{children:"Unit"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-custom_k_99_9_MaxP-Offline-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-custom_k_99_9_MaxP-Offline-PerformanceMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-custom_k_99_9_MaxP-Server-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-custom_k_99_9_MaxP-Server-PerformanceMode"}),(0,d.jsx)(r.td,{children:"0.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"0.5333333333333333"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-custom_k_99_MaxP-Offline-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-custom_k_99_MaxP-Offline-PerformanceMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-custom_k_99_MaxP-Server-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-custom_k_99_MaxP-Server-PerformanceMode"}),(0,d.jsx)(r.td,{children:"0.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"0.8333333333333334"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-lwis_k_99_MaxP-Offline-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-lwis_k_99_MaxP-Offline-PerformanceMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-lwis_k_99_MaxP-Server-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-lwis_k_99_MaxP-Server-PerformanceMode"}),(0,d.jsx)(r.td,{children:"0.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"0.7954545454545454"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT_Triton-triton_k_99_9_MaxP-Offline-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT_Triton-triton_k_99_9_MaxP-Offline-PerformanceMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT_Triton-triton_k_99_9_MaxP-Server-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT_Triton-triton_k_99_9_MaxP-Server-PerformanceMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT_Triton-triton_k_99_MaxP-Offline-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT_Triton-triton_k_99_MaxP-Offline-PerformanceMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT_Triton-triton_k_99_MaxP-Server-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bert"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT_Triton-triton_k_99_MaxP-Server-PerformanceMode"}),(0,d.jsx)(r.td,{children:"0.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"0.9680851063829787"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rnnt"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-custom_k_99_MaxP-Offline-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rnnt"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-custom_k_99_MaxP-Offline-PerformanceMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rnnt"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-custom_k_99_MaxP-Server-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"rnnt"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-custom_k_99_MaxP-Server-PerformanceMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssd-mobilenet"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-lwis_k_99_MaxP-Offline-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssd-mobilenet"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-lwis_k_99_MaxP-Offline-PerformanceMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssd-mobilenet"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT_Triton-triton_k_99_MaxP-Offline-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssd-mobilenet"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT_Triton-triton_k_99_MaxP-Offline-PerformanceMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssd-resnet34"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-lwis_k_99_MaxP-Offline-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssd-resnet34"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-lwis_k_99_MaxP-Offline-PerformanceMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssd-resnet34"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-lwis_k_99_MaxP-Server-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssd-resnet34"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT-lwis_k_99_MaxP-Server-PerformanceMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssd-resnet34"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT_Triton-triton_k_99_MaxP-Offline-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssd-resnet34"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT_Triton-triton_k_99_MaxP-Offline-PerformanceMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssd-resnet34"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT_Triton-triton_k_99_MaxP-Server-AccuracyMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"PASS/FAIL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"ssd-resnet34"}),(0,d.jsx)(r.td,{children:"DGX-A100_A100-SXM4-40GBx8_TRT_Triton-triton_k_99_MaxP-Server-PerformanceMode"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"1.0"}),(0,d.jsx)(r.td,{children:"VALID/INVALID"})]})]})]}),"\n",(0,d.jsx)(r.h2,{id:"workload-metrics-mlperf-training",children:"Workload Metrics MLPerf Training"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Scenario"}),(0,d.jsx)(r.th,{children:"Metric Name"}),(0,d.jsx)(r.th,{children:"Example Value (min)"}),(0,d.jsx)(r.th,{children:"Example Value (max)"}),(0,d.jsx)(r.th,{children:"Example Value (avg)"}),(0,d.jsx)(r.th,{children:"Unit"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"training-mlperf-bert-batchsize-45-gpu-8"}),(0,d.jsx)(r.td,{children:"eval_mlm_accuracy"}),(0,d.jsx)(r.td,{children:"0.650552854"}),(0,d.jsx)(r.td,{children:"0.672552854"}),(0,d.jsx)(r.td,{children:"0.662552854"}),(0,d.jsx)(r.td,{children:"%"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"training-mlperf-bert-batchsize-45-gpu-8"}),(0,d.jsx)(r.td,{children:"e2e_time"}),(0,d.jsx)(r.td,{children:"1071.040571"}),(0,d.jsx)(r.td,{children:"1078.040571"}),(0,d.jsx)(r.td,{children:"1074.040571"}),(0,d.jsx)(r.td,{children:"s"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"training-mlperf-bert-batchsize-45-gpu-8"}),(0,d.jsx)(r.td,{children:"training_sequences_per_second"}),(0,d.jsx)(r.td,{children:"2288.463615"}),(0,d.jsx)(r.td,{children:"2300.463615"}),(0,d.jsx)(r.td,{children:"2295.463615"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"training-mlperf-bert-batchsize-45-gpu-8"}),(0,d.jsx)(r.td,{children:"final_loss"}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"training-mlperf-bert-batchsize-45-gpu-8"}),(0,d.jsx)(r.td,{children:"raw_train_time"}),(0,d.jsx)(r.td,{children:"1053.982237"}),(0,d.jsx)(r.td,{children:"1070.982237"}),(0,d.jsx)(r.td,{children:"1063.982237"}),(0,d.jsx)(r.td,{children:"s"})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,t.ah)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},3905:(e,r,n)=>{n.d(r,{ah:()=>h});var d=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);r&&(d=d.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,d)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,d,t=function(e,r){if(null==e)return{};var n,d,t={},s=Object.keys(e);for(d=0;d<s.length;d++)n=s[d],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(d=0;d<s.length;d++)n=s[d],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=d.createContext({}),h=function(e){var r=d.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},x={inlineCode:"code",wrapper:function(e){var r=e.children;return d.createElement(d.Fragment,{},r)}},o=d.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),j=h(n),a=t,_=j["".concat(c,".").concat(a)]||j[a]||x[a]||s;return n?d.createElement(_,i(i({ref:r},o),{},{components:n})):d.createElement(_,i({ref:r},o))}));o.displayName="MDXCreateElement"}}]);