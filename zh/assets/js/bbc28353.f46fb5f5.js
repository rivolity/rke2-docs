"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[6573],{7599:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var i=r(5893),s=r(1151);const l={title:"FIPS 140-2 \u542f\u7528"},c=void 0,t={id:"security/fips_support",title:"FIPS 140-2 \u542f\u7528",description:"FIPS 140-2 \u662f\u7f8e\u56fd\u8054\u90a6\u653f\u5e9c\u7684\u5b89\u5168\u6807\u51c6\uff0c\u7528\u4e8e\u6279\u51c6\u52a0\u5bc6\u6a21\u5757\u3002\u672c\u6587\u89e3\u91ca\u4e86\u5982\u4f55\u4f7f\u7528 FIPS \u9a8c\u8bc1\u7684\u52a0\u5bc6\u5e93\u6784\u5efa RKE2\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/security/fips_support.md",sourceDirName:"security",slug:"/security/fips_support",permalink:"/zh/security/fips_support",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/fips_support.md",tags:[],version:"current",lastUpdatedAt:1702401902,formattedLastUpdatedAt:"2023\u5e7412\u670812\u65e5",frontMatter:{title:"FIPS 140-2 \u542f\u7528"},sidebar:"mySidebar",previous:{title:"CIS 1.23 Self-Assessment Guide",permalink:"/zh/security/cis_self_assessment123"},next:{title:"\u9ed8\u8ba4 Pod \u5b89\u5168\u7b56\u7565",permalink:"/zh/security/pod_security_policies"}},o={},d=[{value:"\u4f7f\u7528 FIPS \u517c\u5bb9\u7684 Go \u7f16\u8bd1\u5668",id:"\u4f7f\u7528-fips-\u517c\u5bb9\u7684-go-\u7f16\u8bd1\u5668",level:2},{value:"\u96c6\u7fa4\u7ec4\u4ef6\u4e2d\u7684 FIPS \u652f\u6301",id:"\u96c6\u7fa4\u7ec4\u4ef6\u4e2d\u7684-fips-\u652f\u6301",level:3},{value:"\u8fd0\u884c\u65f6",id:"\u8fd0\u884c\u65f6",level:2},{value:"CNI",id:"cni",level:2},{value:"Ingress",id:"ingress",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"FIPS 140-2 \u662f\u7f8e\u56fd\u8054\u90a6\u653f\u5e9c\u7684\u5b89\u5168\u6807\u51c6\uff0c\u7528\u4e8e\u6279\u51c6\u52a0\u5bc6\u6a21\u5757\u3002\u672c\u6587\u89e3\u91ca\u4e86\u5982\u4f55\u4f7f\u7528 FIPS \u9a8c\u8bc1\u7684\u52a0\u5bc6\u5e93\u6784\u5efa RKE2\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528-fips-\u517c\u5bb9\u7684-go-\u7f16\u8bd1\u5668",children:"\u4f7f\u7528 FIPS \u517c\u5bb9\u7684 Go \u7f16\u8bd1\u5668"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728",(0,i.jsx)(n.a,{href:"https://go.googlesource.com/go/+/dev.boringcrypto",children:"\u6b64\u5904"}),"\u627e\u5230\u6240\u4f7f\u7528\u7684 Go \u7f16\u8bd1\u5668\u3002\u7cfb\u7edf\u7684\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u662f\u7528\u8fd9\u4e2a\u7f16\u8bd1\u5668\u7684\u7248\u672c\u6765\u6784\u5efa\u7684\uff0c\u4e0e\u5176\u4ed6\u60c5\u51b5\u4e0b\u4f7f\u7528\u7684\u6807\u51c6 Go \u7f16\u8bd1\u5668\u7248\u672c\u4e00\u81f4\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u4e2a\u7248\u672c\u7684 Go \u7528\u7ecf\u8fc7 FIPS \u9a8c\u8bc1\u7684 BoringCrypto \u6a21\u5757\u53d6\u4ee3\u4e86\u6807\u51c6 Go \u52a0\u5bc6\u5e93\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 GoBoring \u7684 ",(0,i.jsx)(n.a,{href:"https://github.com/golang/go/blob/dev.boringcrypto/README.boringcrypto.md",children:"readme"}),"\u3002\u8be5\u6a21\u5757\u6700\u521d\u7531 NIST \u9a8c\u8bc1\u4e3a ",(0,i.jsx)(n.a,{href:"https://csrc.nist.gov/projects/cryptographic-module-validation-program/certificate/3836",children:"Rancher Kubernetes \u52a0\u5bc6\u5e93"}),"\uff0c\u7528\u4e8e\u652f\u6301\u66f4\u5e7f\u6cdb\u7684\u7cfb\u7edf\u3002\u4f46\u662f\uff0c\u7531\u4e8e SP 800-56A Rev3 \u5f15\u5165\u7684\u66f4\u6539\uff0c\u6b64\u9a8c\u8bc1\u73b0\u5728\u5df2\u6210\u4e3a\u5386\u53f2\u3002\u76ee\u524d\u6b63\u5728\u8fdb\u884c\u6b64\u6a21\u5757\u7684\u91cd\u65b0\u9a8c\u8bc1\uff0c\u4ee5\u4f7f\u8be5\u6a21\u5757\u6062\u590d\u5230\u6d3b\u52a8\u7684 FIPS 140-2 \u72b6\u6001\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u96c6\u7fa4\u7ec4\u4ef6\u4e2d\u7684-fips-\u652f\u6301",children:"\u96c6\u7fa4\u7ec4\u4ef6\u4e2d\u7684 FIPS \u652f\u6301"}),"\n",(0,i.jsx)(n.p,{children:"RKE2 \u7cfb\u7edf\u7684\u5927\u90e8\u5206\u7ec4\u4ef6\u90fd\u662f\u4f7f\u7528 GoBoring Go \u7f16\u8bd1\u5668\u5b9e\u73b0\u9759\u6001\u7f16\u8bd1\u7684\u3002\u4ece\u7ec4\u4ef6\u7684\u89d2\u5ea6\u6765\u770b\uff0cRKE2 \u88ab\u5206\u6210\u4e86\u82e5\u5e72\u90e8\u5206\u3002\u4e0b\u9762\u7684\u5217\u8868\u5305\u542b\u4e86\u8fd9\u4e9b\u90e8\u5206\u548c\u76f8\u5173\u7684\u7ec4\u4ef6\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Kubernetes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"API Server"}),"\n",(0,i.jsx)(n.li,{children:"Controller Manager"}),"\n",(0,i.jsx)(n.li,{children:"Scheduler"}),"\n",(0,i.jsx)(n.li,{children:"Kubelet"}),"\n",(0,i.jsx)(n.li,{children:"Kube Proxy"}),"\n",(0,i.jsx)(n.li,{children:"Metric Server"}),"\n",(0,i.jsx)(n.li,{children:"Kubectl"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Helm Chart"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Flannel"}),"\n",(0,i.jsx)(n.li,{children:"Calico"}),"\n",(0,i.jsx)(n.li,{children:"CoreDNS"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd0\u884c\u65f6",children:"\u8fd0\u884c\u65f6"}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u4e86\u786e\u4fdd\u7cfb\u7edf\u67b6\u6784\u7684\u5404\u65b9\u9762\u90fd\u4f7f\u7528\u7b26\u5408 FIPS 140-2 \u6807\u51c6\u7684\u7b97\u6cd5\u5b9e\u73b0\uff0cRKE2 \u8fd0\u884c\u65f6\u5305\u542b\u4e86\u7528\u7b26\u5408 FIPS \u6807\u51c6\u7684 Go \u7f16\u8bd1\u5668\u9759\u6001\u7f16\u8bd1\u7684\u5b9e\u7528\u7a0b\u5e8f\u3002\u8fd9\u786e\u4fdd\u4e86\u4ece Kubernetes \u5b88\u62a4\u7a0b\u5e8f\u5230\u5bb9\u5668\u534f\u8c03\u673a\u5236\u7684\u6240\u6709\u5c42\u9762\u90fd\u662f\u5408\u89c4\u7684\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"etcd"}),"\n",(0,i.jsxs)(n.li,{children:["containerd","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"containerd-shim"}),"\n",(0,i.jsx)(n.li,{children:"containerd-shim-runc-v1"}),"\n",(0,i.jsx)(n.li,{children:"containerd-shim-runc-v2"}),"\n",(0,i.jsx)(n.li,{children:"ctr"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"crictl"}),"\n",(0,i.jsx)(n.li,{children:"runc"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cni",children:"CNI"}),"\n",(0,i.jsxs)(n.p,{children:["\u4ece v1.21.2 \u5f00\u59cb\uff0cRKE2 \u652f\u6301\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"--cni"})," \u6807\u5fd7\u9009\u62e9\u4e0d\u540c\u7684 CNI\uff0c\u5e76\u7ed1\u5b9a\u4e86\u591a\u4e2a CNI\uff0c\u5305\u62ec Canal\uff08\u9ed8\u8ba4\uff09\u3001Calico\u3001Cilium \u548c Multus\u3002\u5176\u4e2d\uff0c\u53ea\u6709 Canal\uff08\u9ed8\u8ba4\uff09\u662f\u4e3a\u7b26\u5408 FIPS \u6807\u51c6\u800c\u91cd\u5efa\u7684\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"ingress",children:"Ingress"}),"\n",(0,i.jsx)(n.p,{children:"RKE2 \u9644\u5e26\u4e86 NGINX \u4f5c\u4e3a\u5176\u9ed8\u8ba4\u7684 ingress provider\u3002\u4ece v1.21+ \u5f00\u59cb\uff0c\u6b64\u7ec4\u4ef6\u7b26\u5408 FIPS \u6807\u51c6\u3002NGINX ingress \u6709\u4e24\u4e2a\u4e3b\u8981\u7684\u5b50\u7ec4\u4ef6\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"controller - \u8d1f\u8d23\u76d1\u63a7/\u66f4\u65b0 Kubernetes \u8d44\u6e90\u5e76\u76f8\u5e94\u5730\u914d\u7f6e server"}),"\n",(0,i.jsx)(n.li,{children:"server - \u8d1f\u8d23\u63a5\u6536\u548c\u8def\u7531\u6d41\u91cf"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Controller \u662f\u7528 Go \u7f16\u5199\u7684\uff0c\u56e0\u6b64\u4f7f\u7528\u6211\u4eec ",(0,i.jsx)(n.a,{href:"/zh/security/fips_support#%E4%BD%BF%E7%94%A8-fips-%E5%85%BC%E5%AE%B9%E7%9A%84-go-%E7%BC%96%E8%AF%91%E5%99%A8",children:"FIPS \u517c\u5bb9\u7684 Go \u7f16\u8bd1\u5668"}),"\u8fdb\u884c\u7f16\u8bd1\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"server \u662f\u7528 C \u7f16\u5199\u7684\uff0c\u8fd8\u9700\u8981 OpenSSL \u624d\u80fd\u6b63\u5e38\u8fd0\u884c\u3002\u56e0\u6b64\uff0c\u5b83\u5229\u7528 FIPS \u9a8c\u8bc1\u7684 OpenSSL \u7248\u672c\u6765\u5b9e\u73b0 FIPS \u5408\u89c4\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>c});var i=r(7294);const s={},l=i.createContext(s);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);