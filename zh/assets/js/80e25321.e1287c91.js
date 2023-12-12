"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[6890],{4978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(5893),r=n(1151);const i={},o="2. RPM support for RKE2",a={id:"adrs/rke2-rpm-support",title:"2. RPM support for RKE2",description:"Date: 2022-01-20",source:"@site/docs/adrs/002-rke2-rpm-support.md",sourceDirName:"adrs",slug:"/adrs/rke2-rpm-support",permalink:"/zh/adrs/rke2-rpm-support",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/adrs/002-rke2-rpm-support.md",tags:[],version:"current",lastUpdatedAt:1702401902,formattedLastUpdatedAt:"2023\u5e7412\u670812\u65e5",sidebarPosition:2,frontMatter:{}},c={},l=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"2-rpm-support-for-rke2",children:"2. RPM support for RKE2"}),"\n",(0,s.jsx)(t.p,{children:"Date: 2022-01-20"}),"\n",(0,s.jsx)(t.h2,{id:"status",children:"Status"}),"\n",(0,s.jsx)(t.p,{children:"Accepted"}),"\n",(0,s.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,s.jsxs)(t.p,{children:["RKE2 publishes RPMs for distribution of RKE2 through the ",(0,s.jsx)(t.a,{href:"https://github.com/rancher/rke2-packaging",children:"https://github.com/rancher/rke2-packaging"})," repository. These RPMs are built using automated calls to ",(0,s.jsx)(t.code,{children:"rpmbuild"})," and corresponding GPG signing/publishing plugins, and publish RPMs to the ",(0,s.jsx)(t.code,{children:"rpm.rancher.io"}),"/",(0,s.jsx)(t.code,{children:"rpm-testing.rancher.io"})," S3-backed buckets."]}),"\n",(0,s.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,s.jsx)(t.p,{children:"Until a more robust RPM building/mechanism is established for RKE2, we will not add any new platforms for RPM publishing beyond the existing CentOS/RHEL 7 and 8 RPMs that are published. We will publish selinux policy RPMs for new platforms as needed, and ensure the selinux RPMs are compatible with the tarball installation method for the platform in question."}),"\n",(0,s.jsx)(t.p,{children:"This decision can be re-evaluated in the future if a more robust RPM publishing technique/platform is developed/made available."}),"\n",(0,s.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,s.jsx)(t.p,{children:"The only supported installation method for all platforms except CentOS 7/8 with selinux support will be a combination of the use of a tarball install in conjunction with an selinux policy RPM."})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);