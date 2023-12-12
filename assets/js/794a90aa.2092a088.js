"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[7206],{9480:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(5893),t=n(1151);const s={title:"Air-Gap Install"},a=void 0,l={id:"install/airgap",title:"Air-Gap Install",description:"RKE2 can be installed in an air-gapped environment with two different methods. You can either deploy via the rke2-airgap-images tarball release artifact, or by using a private registry.",source:"@site/docs/install/airgap.md",sourceDirName:"install",slug:"/install/airgap",permalink:"/install/airgap",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/airgap.md",tags:[],version:"current",lastUpdatedAt:1702401902,formattedLastUpdatedAt:"Dec 12, 2023",frontMatter:{title:"Air-Gap Install"},sidebar:"mySidebar",previous:{title:"Containerd Registry Configuration",permalink:"/install/containerd_registry_configuration"},next:{title:"Windows Air-Gap Install",permalink:"/install/windows_airgap"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Tarball Method",id:"tarball-method",level:2},{value:"Private Registry Method",id:"private-registry-method",level:2},{value:"Install RKE2",id:"install-rke2",level:2},{value:"RKE2 Binary Install",id:"rke2-binary-install",level:3},{value:"RKE2 Install.sh Script Install",id:"rke2-installsh-script-install",level:3}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["RKE2 can be installed in an air-gapped environment with two different methods. You can either deploy via the ",(0,i.jsx)(r.code,{children:"rke2-airgap-images"})," tarball release artifact, or by using a private registry."]}),"\n",(0,i.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(r.admonition,{type:"warning",children:(0,i.jsxs)(r.p,{children:["If your node has NetworkManager installed and enabled, ",(0,i.jsx)(r.a,{href:"/known_issues#networkmanager",children:"ensure that it is configured to ignore CNI-managed interfaces."})]})}),"\n",(0,i.jsxs)(r.p,{children:["All files mentioned in the steps can be obtained from the assets of the desired released rke2 version ",(0,i.jsx)(r.a,{href:"https://github.com/rancher/rke2/releases",children:"here"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["If running on an air-gapped node with SELinux enabled, you must manually install the necessary SELinux policy RPM before performing these steps. See our ",(0,i.jsx)(r.a,{href:"/install/methods#rpm",children:"RPM Documentation"})," to determine what you need."]}),"\n",(0,i.jsxs)(r.p,{children:["If running on an air-gapped node with SELinux enabled, the following are required dependencies for SLES, CentOS, or RHEL 8 when doing an ",(0,i.jsx)(r.a,{href:"/install/methods#rpm",children:"RPM install"}),":"]}),"\n",(0,i.jsx)(r.p,{children:"Installing dependencies:\ncontainer-selinux\niptables\nlibnetfilter_conntrack\nlibnfnetlink\nlibnftnl\npolicycoreutils-python-utils\nrke2-common\nrke2-selinux"}),"\n",(0,i.jsxs)(r.p,{children:["All the steps listed on this document must be run as the root user or through ",(0,i.jsx)(r.code,{children:"sudo"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"If your nodes do not have an interface with a default route, a default route must be configured; even a black-hole route via a dummy interface will suffice. RKE2 requires a default route in order to auto-detect the node's primary IP, and for kube-proxy ClusterIP routing to function properly. To add a dummy route, do the following:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"ip link add dummy0 type dummy\nip link set dummy0 up\nip addr add 203.0.113.254/31 dev dummy0\nip route add default via 203.0.113.255 dev dummy0 metric 1000\n"})}),"\n",(0,i.jsx)(r.h2,{id:"tarball-method",children:"Tarball Method"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Download the airgap images tarballs from the RKE release artifacts list for the version and platform of RKE2 you are using.","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Use ",(0,i.jsx)(r.code,{children:"rke2-images.linux-amd64.tar.zst"}),", or ",(0,i.jsx)(r.code,{children:"rke2-images.linux-amd64.tar.gz"})," for releases prior to v1.20. Zstandard offers better compression ratios and faster decompression speeds compared to gzip."]}),"\n",(0,i.jsxs)(r.li,{children:["If using the default Canal CNI (",(0,i.jsx)(r.code,{children:"--cni=canal"}),"), you can use either the ",(0,i.jsx)(r.code,{children:"rke2-image"})," legacy archive as described above, or ",(0,i.jsx)(r.code,{children:"rke2-images-core"})," and ",(0,i.jsx)(r.code,{children:"rke2-images-canal"})," archives."]}),"\n",(0,i.jsxs)(r.li,{children:["If using the alternative Cilium CNI (",(0,i.jsx)(r.code,{children:"--cni=cilium"}),"), you must download the ",(0,i.jsx)(r.code,{children:"rke2-images-core"})," and ",(0,i.jsx)(r.code,{children:"rke2-images-cilium"})," archives instead."]}),"\n",(0,i.jsxs)(r.li,{children:["If using your own CNI (",(0,i.jsx)(r.code,{children:"--cni=none"}),"), you can download only the ",(0,i.jsx)(r.code,{children:"rke2-images-core"})," archive."]}),"\n",(0,i.jsxs)(r.li,{children:["If enabling the vSphere CPI/CSI charts (",(0,i.jsx)(r.code,{children:"--cloud-provider-name=rancher-vsphere"}),"), you must also download the ",(0,i.jsx)(r.code,{children:"rke2-images-vsphere"})," archive."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["Ensure that the ",(0,i.jsx)(r.code,{children:"/var/lib/rancher/rke2/agent/images/"})," directory exists on the node."]}),"\n",(0,i.jsxs)(r.li,{children:["Copy the compressed archive to ",(0,i.jsx)(r.code,{children:"/var/lib/rancher/rke2/agent/images/"})," on the node, ensuring that the file extension is retained."]}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"#install-rke2",children:"Install RKE2"})}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"private-registry-method",children:"Private Registry Method"}),"\n",(0,i.jsxs)(r.p,{children:["As of RKE2 v1.20, private registry support honors all settings from the ",(0,i.jsx)(r.a,{href:"/install/containerd_registry_configuration",children:"containerd registry configuration"}),". This includes endpoint override and transport protocol (HTTP/HTTPS), authentication, certificate verification, etc."]}),"\n",(0,i.jsxs)(r.p,{children:["Prior to RKE2 v1.20, private registries must use TLS, with a cert trusted by the host CA bundle. If the registry is using a self-signed cert, you can add the cert to the host CA bundle with ",(0,i.jsx)(r.code,{children:"update-ca-certificates"}),". The registry must also allow anonymous (unauthenticated) access."]}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Add all the required system images to your private registry. A list of images can be obtained from the ",(0,i.jsx)(r.code,{children:".txt"})," file corresponding to each tarball referenced above, or you may ",(0,i.jsx)(r.code,{children:"docker load"})," the airgap image tarballs, then tag and push the loaded images."]}),"\n",(0,i.jsx)(r.li,{children:"If using a private or self-signed certificate on the registry, add the registry's CA cert to the containerd registry configuration, or operating system's trusted certs for releases prior to v1.20."}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"#install-rke2",children:"Install RKE2"})," using the ",(0,i.jsx)(r.code,{children:"system-default-registry"})," parameter, or use the ",(0,i.jsx)(r.a,{href:"/install/containerd_registry_configuration",children:"containerd registry configuration"})," to use your registry as a mirror for docker.io."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"install-rke2",children:"Install RKE2"}),"\n",(0,i.jsxs)(r.p,{children:["The following options to install RKE2 should only be performed after completing one of either the ",(0,i.jsx)(r.a,{href:"#tarball-method",children:"Tarball Method"})," or ",(0,i.jsx)(r.a,{href:"#private-registry-method",children:"Private Registry Method"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["RKE2 can be installed either by running the ",(0,i.jsx)(r.a,{href:"#rke2-binary-install",children:"binary"})," directly or by using the ",(0,i.jsx)(r.a,{href:"#rke2-installsh-script-install",children:"install.sh script"}),"."]}),"\n",(0,i.jsx)(r.h3,{id:"rke2-binary-install",children:"RKE2 Binary Install"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Obtain the rke2 binary file ",(0,i.jsx)(r.code,{children:"rke2.linux-amd64"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["Ensure the binary is named ",(0,i.jsx)(r.code,{children:"rke2"})," and place it in ",(0,i.jsx)(r.code,{children:"/usr/local/bin"}),". Ensure it is executable."]}),"\n",(0,i.jsx)(r.li,{children:"Run the binary with the desired parameters. For example, if using the Private Registry Method, your config file would have the following:"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:'system-default-registry: "registry.example.com:5000"\n'})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Note:"})," The ",(0,i.jsx)(r.code,{children:"system-default-registry"})," parameter must specify only valid RFC 3986 URI authorities, i.e. a host and optional port."]}),"\n",(0,i.jsx)(r.h3,{id:"rke2-installsh-script-install",children:"RKE2 Install.sh Script Install"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"install.sh"})," may be used in an offline mode by setting the ",(0,i.jsx)(r.code,{children:"INSTALL_RKE2_ARTIFACT_PATH"})," variable to a path containing pre-downloaded artifacts. This will run though a normal install, including creating systemd units."]}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Download the install script, rke2, rke2-images, and sha256sum archives from the release into a directory, as in the example below:"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"mkdir /root/rke2-artifacts && cd /root/rke2-artifacts/\ncurl -OLs https://github.com/rancher/rke2/releases/download/v1.26.10%2Brke2r2/rke2-images.linux-amd64.tar.zst\ncurl -OLs https://github.com/rancher/rke2/releases/download/v1.26.10%2Brke2r2/rke2.linux-amd64.tar.gz\ncurl -OLs https://github.com/rancher/rke2/releases/download/v1.26.10%2Brke2r2/sha256sum-amd64.txt\ncurl -sfL https://get.rke2.io --output install.sh\n"})}),"\n",(0,i.jsxs)(r.ol,{start:"2",children:["\n",(0,i.jsx)(r.li,{children:"Next, run install.sh using the directory, as in the example below:"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"INSTALL_RKE2_ARTIFACT_PATH=/root/rke2-artifacts sh install.sh\n"})}),"\n",(0,i.jsxs)(r.ol,{start:"3",children:["\n",(0,i.jsxs)(r.li,{children:["Enable and run the service as outlined ",(0,i.jsx)(r.a,{href:"/install/quickstart#2-enable-the-rke2-server-service",children:"here."})]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>a});var i=n(7294);const t={},s=i.createContext(t);function a(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);