"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[3949],{1985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=n(5893),s=n(1151);const l={},r="3. RPM SLE support for RKE2",a={id:"adrs/rke2-rpm-sle-support",title:"3. RPM SLE support for RKE2",description:"Date: 2022-01-27",source:"@site/docs/adrs/003-rke2-rpm-sle-support.md",sourceDirName:"adrs",slug:"/adrs/rke2-rpm-sle-support",permalink:"/adrs/rke2-rpm-sle-support",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/adrs/003-rke2-rpm-sle-support.md",tags:[],version:"current",lastUpdatedAt:1703098103,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:3,frontMatter:{}},o={},c=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"3-rpm-sle-support-for-rke2",children:"3. RPM SLE support for RKE2"}),"\n",(0,i.jsx)(t.p,{children:"Date: 2022-01-27"}),"\n",(0,i.jsx)(t.h2,{id:"status",children:"Status"}),"\n",(0,i.jsx)(t.p,{children:"Accepted"}),"\n",(0,i.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,i.jsxs)(t.p,{children:["RKE2 publishes RPMs for SUSE OS distributions, the rpms will be installed via transactional updates if exists, this will enable two things, the installation of rke2-selinux and the extraction of the binaries in the right ",(0,i.jsx)(t.code,{children:"/usr"})," paths instead of the alternative tarball installation which will extract the binaries in ",(0,i.jsx)(t.code,{children:"/opt"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,i.jsxs)(t.p,{children:["We will add support for RPM publishing for SUSE OS distributions in rke2-packaging repo, the ",(0,i.jsx)(t.code,{children:"rke2-server"})," and ",(0,i.jsx)(t.code,{children:"rke2-agent"})," packages will require installing ",(0,i.jsx)(t.code,{children:"rke2-common"})," which will in turn install the ",(0,i.jsx)(t.code,{children:"rke2-selinux"})," RPM package which is already supported for microos."]}),"\n",(0,i.jsxs)(t.p,{children:["The decision will involve defaulting to the tarball installation for SUSE OS distribution in the installation script to prevent breaking current compatibility with users who currently installed via tarball installation, the RPM installation will be allowed via passing the environment variable ",(0,i.jsx)(t.code,{children:"RKE2_INSTALL_METHOD=rpm"})," to the install script."]}),"\n",(0,i.jsx)(t.p,{children:"The installation script will also have measures to prevent installation switching from RPM to tarball installation and vice versa, and finally the installation via the tarball method will not allow SELINUX to be enabled unless manually."}),"\n",(0,i.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,i.jsx)(t.p,{children:"The decision will result in some drawbacks:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The decision will not enable RPM installation by default."}),"\n",(0,i.jsx)(t.li,{children:"The tarball installation will not enable SELINUX by default."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(7294);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);