"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[5927],{2589:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=r(5893),i=r(1151);const s={title:"Anatomy of a Next Generation Kubernetes Distribution",sidebar_label:"Architecture",weight:204},c=void 0,l={id:"architecture",title:"Anatomy of a Next Generation Kubernetes Distribution",description:"Architecture Overview",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/architecture.md",tags:[],version:"current",lastUpdatedAt:1706293946,formattedLastUpdatedAt:"Jan 26, 2024",frontMatter:{title:"Anatomy of a Next Generation Kubernetes Distribution",sidebar_label:"Architecture",weight:204},sidebar:"mySidebar",previous:{title:"Certificate Management",permalink:"/security/certificates"},next:{title:"Cluster Access",permalink:"/cluster_access"}},o={},d=[{value:"Architecture Overview",id:"architecture-overview",level:3},{value:"Process Lifecycle",id:"process-lifecycle",level:3},{value:"Content Bootstrap",id:"content-bootstrap",level:4},{value:"Initialize Server",id:"initialize-server",level:4},{value:"Prepare Components",id:"prepare-components",level:5},{value:"<code>kube-apiserver</code>",id:"kube-apiserver",level:6},{value:"<code>kube-controller-manager</code>",id:"kube-controller-manager",level:6},{value:"<code>kube-scheduler</code>",id:"kube-scheduler",level:6},{value:"Start Cluster",id:"start-cluster",level:5},{value:"<code>etcd</code>",id:"etcd",level:6},{value:"<code>helm-controller</code>",id:"helm-controller",level:6},{value:"Initialize Agent",id:"initialize-agent",level:4},{value:"Container Runtime",id:"container-runtime",level:5},{value:"<code>containerd</code>",id:"containerd",level:6},{value:"Node Agent",id:"node-agent",level:5},{value:"<code>kubelet</code>",id:"kubelet",level:6},{value:"Server Charts",id:"server-charts",level:5},{value:"Daemon Process",id:"daemon-process",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",h6:"h6",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"architecture-overview",children:"Architecture Overview"}),"\n",(0,t.jsxs)(n.p,{children:["With RKE2 we take lessons learned from developing and maintaining our lightweight ",(0,t.jsx)(n.a,{href:"https://kubernetes.io",title:"Production-Grade Container Orchestration",children:"Kubernetes"}),"\ndistribution, ",(0,t.jsx)(n.a,{href:"https://k3s.io",title:"K3s - Lightweight Kubernetes",children:"K3s"}),", and apply them to build an enterprise-ready distribution with ",(0,t.jsx)(n.a,{href:"https://k3s.io",title:"K3s - Lightweight Kubernetes",children:"K3s"})," ease-of-use.\nWhat this means is that RKE2 is, at its simplest, a single binary to be installed and configured on all nodes expected\nto participate in the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io",title:"Production-Grade Container Orchestration",children:"Kubernetes"})," cluster. Once started, RKE2 is then able to bootstrap and supervise\nrole-appropriate agents per node while sourcing needed content from the network."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Architecture Overview",src:r(4980).Z+"",title:"RKE2 Architecture Overview",width:"1016",height:"371"})}),"\n",(0,t.jsx)(n.p,{children:"RKE2 brings together a number of Open Source technologies to make this all work:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://k3s.io",title:"K3s - Lightweight Kubernetes",children:"K3s"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/k3s-io/helm-controller",title:"Helm Chart CRD",children:"Helm Controller"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://kubernetes.io",title:"Production-Grade Container Orchestration",children:"K8s"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-apiserver",title:"Kube API Server",children:"API Server"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-controller-manager",title:"Kube Controller Manager",children:"Controller Manager"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/cmd/kubelet",title:"Kubelet",children:"Kubelet"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-scheduler",title:"Kube Scheduler",children:"Scheduler"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-proxy",title:"Kube Proxy",children:"Proxy"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://etcd.io",title:"A distributed, reliable key-value store for the most critical data of a distributed system",children:"etcd"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/opencontainers/runc",title:"CLI tool for spawning and running containers according to the OCI specification",children:"runc"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://containerd.io",title:"An open and reliable container runtime",children:"containerd"}),"/",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes/cri-api",title:"Container Runtime Interface",children:"cri"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/containernetworking/cni",title:"Container Network Interface",children:"CNI"}),": Canal (",(0,t.jsx)(n.a,{href:"https://docs.tigera.io/calico/latest/about",title:"Project Calico",children:"Calico"})," & ",(0,t.jsx)(n.a,{href:"https://github.com/coreos/flannel",title:"A network fabric for containers, designed for Kubernetes",children:"Flannel"}),"), ",(0,t.jsx)(n.a,{href:"https://cilium.io",title:"eBPF-based Networking, Observability, and Security",children:"Cilium"})," or ",(0,t.jsx)(n.a,{href:"https://docs.tigera.io/calico/latest/about",title:"Project Calico",children:"Calico"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://coredns.io",title:"DNS and Service Discovery",children:"CoreDNS"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://kubernetes.github.io/ingress-nginx",title:"NGINX Ingress Controller for Kubernetes",children:"Ingress NGINX Controller"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/metrics-server",title:"Cluster-wide aggregator of resource usage data",children:"Metrics Server"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://helm.sh",title:"The Kubernetes Package Manager",children:"Helm"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["All of these, except the NGINX Ingress Controller, are compiled and statically linked with ",(0,t.jsx)(n.a,{href:"https://github.com/golang/go/tree/dev.boringcrypto/misc/boring",title:"Go+BoringCrypto",children:"Go+BoringCrypto"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"process-lifecycle",children:"Process Lifecycle"}),"\n",(0,t.jsx)(n.h4,{id:"content-bootstrap",children:"Content Bootstrap"}),"\n",(0,t.jsxs)(n.p,{children:["RKE2 sources binaries and manifests to run both ",(0,t.jsx)(n.em,{children:"server"})," and ",(0,t.jsx)(n.em,{children:"agent"})," nodes from the RKE2 Runtime image.\nThis means RKE2 scans ",(0,t.jsx)(n.code,{children:"/var/lib/rancher/rke2/agent/images/*.tar"})," for the ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/rancher/rke2-runtime/tags",children:(0,t.jsx)(n.code,{children:"rancher/rke2-runtime"})}),"\nimage (with a tag correlating to the output of ",(0,t.jsx)(n.code,{children:"rke2 --version"}),") by default and if it cannot be found, attempts to pull\nit from the network (a.k.a. Docker Hub). RKE2 then extracts ",(0,t.jsx)(n.code,{children:"/bin/"})," from the image, flattening it into\n",(0,t.jsx)(n.code,{children:"/var/lib/rancher/rke2/data/${RKE2_DATA_KEY}/bin"})," where ",(0,t.jsx)(n.code,{children:"${RKE2_DATA_KEY}"})," represents a unique string identifying the\nimage."]}),"\n",(0,t.jsx)(n.p,{children:"For RKE2 to work as expected the runtime image must minimally provide:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"containerd"})})," (the ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes/cri-api",title:"Container Runtime Interface",children:"CRI"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"containerd-shim"})})," (shims wrap ",(0,t.jsx)(n.code,{children:"runc"})," tasks and do not stop when ",(0,t.jsx)(n.code,{children:"containerd"})," does)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"containerd-shim-runc-v1"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"containerd-shim-runc-v2"})})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"kubelet"})})," (the Kubernetes node agent)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"runc"})})," (the OCI runtime)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following ops tooling is also provided by the runtime image:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ctr"})})," (low level ",(0,t.jsx)(n.code,{children:"containerd"})," maintenance and inspection)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"crictl"})})," (low level CRI maintenance and inspection)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"kubectl"})})," (kubernetes cluster maintenance and inspection)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"socat"})})," (needed by ",(0,t.jsx)(n.code,{children:"containerd"})," for port-forwarding)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["After the binaries have been extracted RKE2 will then extract charts from the image\ninto the ",(0,t.jsx)(n.code,{children:"/var/lib/rancher/rke2/server/manifests"})," directory."]}),"\n",(0,t.jsx)(n.h4,{id:"initialize-server",children:"Initialize Server"}),"\n",(0,t.jsx)(n.p,{children:"In the embedded K3s engine servers are specialized agent processes which means that the following startup will be\ndeferred until the node container runtime has started."}),"\n",(0,t.jsx)(n.h5,{id:"prepare-components",children:"Prepare Components"}),"\n",(0,t.jsx)(n.h6,{id:"kube-apiserver",children:(0,t.jsx)(n.code,{children:"kube-apiserver"})}),"\n",(0,t.jsxs)(n.p,{children:["Pull the ",(0,t.jsx)(n.code,{children:"kube-apiserver"})," image, if not present already, and spin up a goroutine to wait for ",(0,t.jsx)(n.code,{children:"etcd"}),"\nand then write the static pod definition in ",(0,t.jsx)(n.code,{children:"/var/lib/rancher/rke2/agent/pod-manifests/"}),"."]}),"\n",(0,t.jsx)(n.h6,{id:"kube-controller-manager",children:(0,t.jsx)(n.code,{children:"kube-controller-manager"})}),"\n",(0,t.jsxs)(n.p,{children:["Pull the ",(0,t.jsx)(n.code,{children:"kube-controller-manager"})," image, if not present already, and spin up a goroutine to wait for ",(0,t.jsx)(n.code,{children:"kube-apiserver"}),"\nand then write the static pod definition in ",(0,t.jsx)(n.code,{children:"/var/lib/rancher/rke2/agent/pod-manifests/"}),"."]}),"\n",(0,t.jsx)(n.h6,{id:"kube-scheduler",children:(0,t.jsx)(n.code,{children:"kube-scheduler"})}),"\n",(0,t.jsxs)(n.p,{children:["Pull the ",(0,t.jsx)(n.code,{children:"kube-scheduler"})," image, if not present already, and spin up a goroutine to wait for ",(0,t.jsx)(n.code,{children:"kube-apiserver"}),"\nand then write the static pod definition in ",(0,t.jsx)(n.code,{children:"/var/lib/rancher/rke2/agent/pod-manifests/"}),"."]}),"\n",(0,t.jsx)(n.h5,{id:"start-cluster",children:"Start Cluster"}),"\n",(0,t.jsx)(n.p,{children:"Spin up an HTTP server in a goroutine to listen for other cluster servers/agents then initialize/join the cluster."}),"\n",(0,t.jsx)(n.h6,{id:"etcd",children:(0,t.jsx)(n.code,{children:"etcd"})}),"\n",(0,t.jsxs)(n.p,{children:["Pull the ",(0,t.jsx)(n.code,{children:"etcd"})," image, if not present already, and spin up a goroutine to wait for the ",(0,t.jsx)(n.code,{children:"kubelet"}),"\nand then write the static pod definition in ",(0,t.jsx)(n.code,{children:"/var/lib/rancher/rke2/agent/pod-manifests/"}),"."]}),"\n",(0,t.jsx)(n.h6,{id:"helm-controller",children:(0,t.jsx)(n.code,{children:"helm-controller"})}),"\n",(0,t.jsxs)(n.p,{children:["Spin up the goroutine to start the embedded ",(0,t.jsx)(n.code,{children:"helm-controller"})," after waiting for ",(0,t.jsx)(n.code,{children:"kube-apiserver"})," to be ready."]}),"\n",(0,t.jsx)(n.h4,{id:"initialize-agent",children:"Initialize Agent"}),"\n",(0,t.jsx)(n.p,{children:"The agent process entry point. For server processes the embedded K3s engine invokes this directly."}),"\n",(0,t.jsx)(n.h5,{id:"container-runtime",children:"Container Runtime"}),"\n",(0,t.jsx)(n.h6,{id:"containerd",children:(0,t.jsx)(n.code,{children:"containerd"})}),"\n",(0,t.jsxs)(n.p,{children:["Spawn the ",(0,t.jsx)(n.code,{children:"containerd"})," process and listen for termination. If ",(0,t.jsx)(n.code,{children:"containerd"})," exits then the ",(0,t.jsx)(n.code,{children:"rke2"})," process will also exit."]}),"\n",(0,t.jsx)(n.h5,{id:"node-agent",children:"Node Agent"}),"\n",(0,t.jsx)(n.h6,{id:"kubelet",children:(0,t.jsx)(n.code,{children:"kubelet"})}),"\n",(0,t.jsxs)(n.p,{children:["Spawn and supervise the ",(0,t.jsx)(n.code,{children:"kubelet"})," process. If ",(0,t.jsx)(n.code,{children:"kubelet"})," exits then ",(0,t.jsx)(n.code,{children:"rke2"})," will attempt to restart it.\nOnce the ",(0,t.jsx)(n.code,{children:"kubelet"})," is running it will start any available static pods. For servers this means that ",(0,t.jsx)(n.code,{children:"etcd"}),"\nand ",(0,t.jsx)(n.code,{children:"kube-apiserver"})," will start, in succession, allowing the remaining components started via static pod\nto connect to the ",(0,t.jsx)(n.code,{children:"kube-apiserver"})," and begin their processing."]}),"\n",(0,t.jsx)(n.h5,{id:"server-charts",children:"Server Charts"}),"\n",(0,t.jsxs)(n.p,{children:["On server nodes, the ",(0,t.jsx)(n.code,{children:"helm-controller"})," can now apply to the cluster any charts found in ",(0,t.jsx)(n.code,{children:"/var/lib/rancher/rke2/server/manifests"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"rke2-canal.yaml or rke2-cilium.yaml (daemonset, bootstrap)"}),"\n",(0,t.jsx)(n.li,{children:"rke2-coredns.yaml (deployment, bootstrap)"}),"\n",(0,t.jsx)(n.li,{children:"rke2-ingress-nginx.yaml (deployment)"}),"\n",(0,t.jsx)(n.li,{children:"rke2-kube-proxy.yaml (daemonset, bootstrap)"}),"\n",(0,t.jsx)(n.li,{children:"rke2-metrics-server.yaml (deployment)"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"daemon-process",children:"Daemon Process"}),"\n",(0,t.jsxs)(n.p,{children:["The RKE2 process will now run indefinitely until it receives a SIGTERM or SIGKILL or if the ",(0,t.jsx)(n.code,{children:"containerd"})," process exits."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},4980:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/overview-06f8a098e271952bfe5db78b3a0e9b25.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var t=r(7294);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);