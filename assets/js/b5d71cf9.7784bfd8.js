"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[282],{1263:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(5893),r=t(1151);const i={title:"Installation Methods"},a=void 0,l={id:"install/methods",title:"Installation Methods",description:"Important: If your node has NetworkManager installed and enabled, ensure that it is configured to ignore CNI-managed interfaces.",source:"@site/docs/install/methods.md",sourceDirName:"install",slug:"/install/methods",permalink:"/install/methods",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/methods.md",tags:[],version:"current",lastUpdatedAt:1704751499,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{title:"Installation Methods"},sidebar:"mySidebar",previous:{title:"High Availability",permalink:"/install/ha"},next:{title:"Containerd Registry Configuration",permalink:"/install/containerd_registry_configuration"}},o={},c=[{value:"Tarball",id:"tarball",level:3},{value:"Installation",id:"installation",level:4},{value:"RPM",id:"rpm",level:3},{value:"Repositories",id:"repositories",level:4},{value:"Enterprise Linux 7",id:"enterprise-linux-7",level:4},{value:"Enterprise Linux 8",id:"enterprise-linux-8",level:4},{value:"Installation",id:"installation-1",level:4},{value:"Manual",id:"manual",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important:"})," If your node has NetworkManager installed and enabled, ",(0,s.jsx)(n.a,{href:"/known_issues#networkmanager",children:"ensure that it is configured to ignore CNI-managed interfaces."})]}),"\n",(0,s.jsx)(n.p,{children:"RKE2 can be installed to a system in a number of ways, two of which are the preferred and supported methods. Those methods are tarball and RPM. The install script referenced in the Quick Start is a wrapper around these two methods."}),"\n",(0,s.jsx)(n.p,{children:"This document explains these installation methods in greater detail."}),"\n",(0,s.jsx)(n.h3,{id:"tarball",children:"Tarball"}),"\n",(0,s.jsx)(n.p,{children:"To install RKE2 via install you first need to get the install script. This can be done in a number of ways."}),"\n",(0,s.jsx)(n.p,{children:"This gets the script and immediately starts the installation process."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# curl -sfL https://get.rke2.io | sudo sh -\ncurl -sfL https://get.rke2.io | sh -\n"})}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, you can download the install script and make it executable."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl -sfL https://get.rke2.io --output install.sh\nchmod +x install.sh\n"})}),"\n",(0,s.jsx)(n.h4,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["The installation process defaults to the latest RKE2 version and no other qualifiers are necessary. However, if you want to specify a version, you should set the ",(0,s.jsx)(n.code,{children:"INSTALL_RKE2_CHANNEL"})," environment variable. An example below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"INSTALL_RKE2_CHANNEL=latest ./install.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"When the install script is executed, it makes a determination of what type of system it is. If it's an OS that uses RPMs (such as CentOS or RHEL), it will perform an RPM based installation, otherwise the script defaults to tarball. RPM based installation is covered below."}),"\n",(0,s.jsxs)(n.p,{children:["Next, the installation script downloads the tarball, verifies it by comparing SHA256 hashes, and lastly, extracts the contents to ",(0,s.jsx)(n.code,{children:"/usr/local"}),". An operator is free to move the files after installation if desired. This operation simply extracts the tarball and no other system modifications are made."]}),"\n",(0,s.jsx)(n.p,{children:"Tarball structure / contents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["bin - contains the RKE2 executable as well as the ",(0,s.jsx)(n.code,{children:"rke2-killall.sh"})," and ",(0,s.jsx)(n.code,{children:"rke2-uninstall.sh"})," scripts"]}),"\n",(0,s.jsx)(n.li,{children:"lib - contains server and agent systemd unit files"}),"\n",(0,s.jsx)(n.li,{children:"share - contains the RKE2 license as well as a sysctl configuration file used for when RKE2 is ran in CIS mode"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To configure the system any further, you'll want to reference either the ",(0,s.jsx)(n.a,{href:"/reference/server_config",children:"server"})," or ",(0,s.jsx)(n.a,{href:"/reference/linux_agent_config",children:"agent"})," documentation."]}),"\n",(0,s.jsx)(n.h3,{id:"rpm",children:"RPM"}),"\n",(0,s.jsxs)(n.p,{children:["To start the RPM install process, you need to get the installation script which is covered above. The script will check your system for ",(0,s.jsx)(n.code,{children:"rpm"}),", ",(0,s.jsx)(n.code,{children:"yum"}),", or ",(0,s.jsx)(n.code,{children:"dnf"})," and if any of those exist, it determines that the system is Redhat based and starts the RPM install process."]}),"\n",(0,s.jsxs)(n.p,{children:["Files are installed with the prefix of ",(0,s.jsx)(n.code,{children:"/usr"})," rather than ",(0,s.jsx)(n.code,{children:"/usr/local"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"repositories",children:"Repositories"}),"\n",(0,s.jsxs)(n.p,{children:["Signed RPMs are published for RKE2 within the ",(0,s.jsx)(n.code,{children:"rpm-testing.rancher.io"})," and ",(0,s.jsx)(n.code,{children:"rpm.rancher.io"})," RPM repositories. If you run the ",(0,s.jsx)(n.a,{href:"https://get.rke2.io",children:"https://get.rke2.io"})," script on nodes supporting RPMs, it will use these RPM repos by default. But you can also install them yourself."]}),"\n",(0,s.jsxs)(n.p,{children:["The RPMs provide ",(0,s.jsx)(n.code,{children:"systemd"})," units for managing ",(0,s.jsx)(n.code,{children:"rke2"}),", but will need to be configured via configuration file before starting the services for the first time."]}),"\n",(0,s.jsx)(n.h4,{id:"enterprise-linux-7",children:"Enterprise Linux 7"}),"\n",(0,s.jsx)(n.p,{children:"In order to use the RPM repository, on a CentOS 7 or RHEL 7 system, run the following bash snippet:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export RKE2_MINOR=26\ncat << EOF > /etc/yum.repos.d/rancher-rke2-1-${RKE2_MINOR}-latest.repo\n[rancher-rke2-common-latest]\nname=Rancher RKE2 Common Latest\nbaseurl=https://rpm.rancher.io/rke2/latest/common/centos/7/noarch\nenabled=1\ngpgcheck=1\ngpgkey=https://rpm.rancher.io/public.key\n\n[rancher-rke2-1-${RKE2_MINOR}-latest]\nname=Rancher RKE2 1.${RKE2_MINOR} Latest\nbaseurl=https://rpm.rancher.io/rke2/latest/1.${RKE2_MINOR}/centos/7/x86_64\nenabled=1\ngpgcheck=1\ngpgkey=https://rpm.rancher.io/public.key\nEOF\n"})}),"\n",(0,s.jsx)(n.h4,{id:"enterprise-linux-8",children:"Enterprise Linux 8"}),"\n",(0,s.jsx)(n.p,{children:"In order to use the RPM repository, on a CentOS 8 or RHEL 8 system, run the following bash snippet:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export RKE2_MINOR=26\ncat << EOF > /etc/yum.repos.d/rancher-rke2-1-${RKE2_MINOR}-latest.repo\n[rancher-rke2-common-latest]\nname=Rancher RKE2 Common Latest\nbaseurl=https://rpm.rancher.io/rke2/latest/common/centos/8/noarch\nenabled=1\ngpgcheck=1\ngpgkey=https://rpm.rancher.io/public.key\n\n[rancher-rke2-1-${RKE2_MINOR}-latest]\nname=Rancher RKE2 1.${RKE2_MINOR} Latest\nbaseurl=https://rpm.rancher.io/rke2/latest/1.${RKE2_MINOR}/centos/8/x86_64\nenabled=1\ngpgcheck=1\ngpgkey=https://rpm.rancher.io/public.key\nEOF\n"})}),"\n",(0,s.jsx)(n.h4,{id:"installation-1",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"After the repository is configured, you can run either of the following commands:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yum -y install rke2-server\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yum -y install rke2-agent\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The RPM will install a corresponding ",(0,s.jsx)(n.code,{children:"rke2-server.service"})," or ",(0,s.jsx)(n.code,{children:"rke2-agent.service"})," systemd unit that can be invoked like: ",(0,s.jsx)(n.code,{children:"systemctl start rke2-server"}),". Make sure that you configure ",(0,s.jsx)(n.code,{children:"rke2"})," before you start it, by following the ",(0,s.jsx)(n.code,{children:"Configuration File"})," instructions below."]}),"\n",(0,s.jsx)(n.h3,{id:"manual",children:"Manual"}),"\n",(0,s.jsxs)(n.p,{children:["The RKE2 binary is statically compiled and linked which allows for the RKE2 binary to be portable across Linux distributions without the concern for dependency issues. The simplest installation is to download the binary, make sure it's executable, and copy it into the ",(0,s.jsx)(n.code,{children:"${PATH}"}),", generally ",(0,s.jsx)(n.code,{children:"/usr/local/bin"}),". After first execution, RKE2 will create all necessary directories and files. To configure the system any further, you'll want to reference the ",(0,s.jsx)(n.a,{href:"/install/configuration",children:"config file"})," documentation."]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var s=t(7294);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);