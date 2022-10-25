"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[268],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"High Availability"},l=void 0,d={unversionedId:"install/ha",id:"install/ha",title:"High Availability",description:"This section describes how to install a high availability (HA) RKE2 cluster. An HA RKE2 cluster consists of:",source:"@site/docs/install/ha.md",sourceDirName:"install",slug:"/install/ha",permalink:"/rke2-docs/install/ha",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/ha.md",tags:[],version:"current",lastUpdatedAt:1666731726,formattedLastUpdatedAt:"10/25/2022",frontMatter:{title:"High Availability"},sidebar:"mySidebar",previous:{title:"Network Options",permalink:"/rke2-docs/install/network_options"},next:{title:"Installation Methods",permalink:"/rke2-docs/install/methods"}},u={},c=[{value:"1. Configure the Fixed Registration Address",id:"1-configure-the-fixed-registration-address",level:3},{value:"2. Launch the first server node",id:"2-launch-the-first-server-node",level:3},{value:"2a. Optional: Consider server node taints",id:"2a-optional-consider-server-node-taints",level:4},{value:"3. Launch additional server nodes",id:"3-launch-additional-server-nodes",level:3},{value:"4. Confirm cluster is functional",id:"4-confirm-cluster-is-functional",level:3},{value:"5. Optional: Join Agent Nodes",id:"5-optional-join-agent-nodes",level:3}],p={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes how to install a high availability (HA) RKE2 cluster. An HA RKE2 cluster consists of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"fixed registration address")," that is placed in front of server nodes to allow other nodes to register with the cluster"),(0,o.kt)("li",{parentName:"ul"},"An odd number (three recommended) of ",(0,o.kt)("strong",{parentName:"li"},"server nodes")," that will run etcd, the Kubernetes API, and other control plane services"),(0,o.kt)("li",{parentName:"ul"},"Zero or more ",(0,o.kt)("strong",{parentName:"li"},"agent nodes")," that are designated to run your apps and services")),(0,o.kt)("p",null,"Agents register through the fixed registration address. However, when RKE2 launches the kubelet and it must connect to the Kubernetes api-server, it does so through the ",(0,o.kt)("inlineCode",{parentName:"p"},"rke2 agent")," process, which acts as a client-side load balancer."),(0,o.kt)("p",null,"Setting up an HA cluster requires the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure a fixed registration address"),(0,o.kt)("li",{parentName:"ol"},"Launch the first server node"),(0,o.kt)("li",{parentName:"ol"},"Join additional server nodes"),(0,o.kt)("li",{parentName:"ol"},"Join agent nodes")),(0,o.kt)("h3",{id:"1-configure-the-fixed-registration-address"},"1. Configure the Fixed Registration Address"),(0,o.kt)("p",null,"Server nodes beyond the first one and all agent nodes need a URL to register against. This can be the IP or hostname of any of the server nodes, but in many cases those may change over time as nodes are created and destroyed. Therefore, you should have a stable endpoint in front of the server nodes."),(0,o.kt)("p",null,"This endpoint can be set up using any number approaches, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A layer 4 (TCP) load balancer"),(0,o.kt)("li",{parentName:"ul"},"Round-robin DNS"),(0,o.kt)("li",{parentName:"ul"},"Virtual or elastic IP addresses")),(0,o.kt)("p",null,"This endpoint can also be used for accessing the Kubernetes API. So you can, for example, modify your ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"kubeconfig")," file to point to it instead of a specific node."),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"rke2 server")," process listens on port ",(0,o.kt)("inlineCode",{parentName:"p"},"9345")," for new nodes to register. The Kubernetes API is served on port ",(0,o.kt)("inlineCode",{parentName:"p"},"6443"),", as normal. Configure your load balancer accordingly."),(0,o.kt)("h3",{id:"2-launch-the-first-server-node"},"2. Launch the first server node"),(0,o.kt)("p",null,"The first server node establishes the secret token that other server or agent nodes will register with when connecting to the cluster."),(0,o.kt)("p",null,"To specify your own pre-shared secret as the token, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," argument on startup."),(0,o.kt)("p",null,"If you do not specify a pre-shared secret, RKE2 will generate one and place it at ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/node-token"),"."),(0,o.kt)("p",null,"To avoid certificate errors with the fixed registration address, you should launch the server with the ",(0,o.kt)("inlineCode",{parentName:"p"},"tls-san")," parameter set. This option adds an additional hostname or IP as a Subject Alternative Name in the server's TLS cert, and it can be specified as a list if you would like to access via both the IP and the hostname."),(0,o.kt)("p",null,"Here is an example of what the RKE2 config file (at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/config.yaml"),") would look like if you are following this guide."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," The RKE2 config file needs to be created manually. You can do that by running ",(0,o.kt)("inlineCode",{parentName:"p"},"touch /etc/rancher/rke2/config.yaml")," as a privileged user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"token: my-shared-secret\ntls-san:\n  - my-kubernetes-domain.com\n  - another-kubernetes-domain.com\n")),(0,o.kt)("h4",{id:"2a-optional-consider-server-node-taints"},"2a. Optional: Consider server node taints"),(0,o.kt)("p",null,"By default, server nodes will be schedulable and thus your workloads can get launched on them. If you wish to have a dedicated control plane where no user workloads will run, you can use taints. The ",(0,o.kt)("inlineCode",{parentName:"p"},"node-taint")," parameter will allow you to configure nodes with taints. Here is an example of adding a node taint to the configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'node-taint:\n  - "CriticalAddonsOnly=true:NoExecute"\n')),(0,o.kt)("p",null,"Note: The NGINX Ingress and Metrics Server addons will ",(0,o.kt)("strong",{parentName:"p"},"not")," be deployed when all nodes are tainted with ",(0,o.kt)("inlineCode",{parentName:"p"},"CriticalAddonsOnly"),". If your server nodes are so tainted, these addons will remain pending until untainted agent nodes are added to the cluster."),(0,o.kt)("h3",{id:"3-launch-additional-server-nodes"},"3. Launch additional server nodes"),(0,o.kt)("p",null,"Additional server nodes are launched much like the first, except that you must specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," parameters so that they can successfully connect to the initial server node."),(0,o.kt)("p",null,"Here is an example of what the RKE2 config file would look like for additional server nodes if you are following this guide:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"server: https://my-kubernetes-domain.com:9345\ntoken: my-shared-secret\ntls-san:\n  - my-kubernetes-domain.com\n  - another-kubernetes-domain.com\n\n")),(0,o.kt)("p",null,"As mentioned previously, you must have an odd number of server nodes in total."),(0,o.kt)("h3",{id:"4-confirm-cluster-is-functional"},"4. Confirm cluster is functional"),(0,o.kt)("p",null,"Once you've launched the ",(0,o.kt)("inlineCode",{parentName:"p"},"rke2 server")," process on all server nodes, ensure that the cluster has come up properly with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/var/lib/rancher/rke2/bin/kubectl \\\n        --kubeconfig /etc/rancher/rke2/rke2.yaml get nodes\n")),(0,o.kt)("p",null,"You should see your server nodes in the Ready state."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": By default, any ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," command will require root user access, unless ",(0,o.kt)("inlineCode",{parentName:"p"},"RKE2_KUBECONFIG_MODE")," override is provided. Read more about it in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/cluster_access"},"cluster access page"),"."),(0,o.kt)("h3",{id:"5-optional-join-agent-nodes"},"5. Optional: Join Agent Nodes"),(0,o.kt)("p",null,"Because RKE2 server nodes are schedulable by default, the minimum number of nodes for an HA RKE2 server cluster is three server nodes and zero agent nodes. To add nodes designated to run your apps and services, join agent nodes to your cluster."),(0,o.kt)("p",null,"Joining agent nodes in an HA cluster is the same as ",(0,o.kt)("a",{parentName:"p",href:"/rke2-docs/install/quickstart#agent-worker-node-installation"},"joining agent nodes in a single server cluster"),". You just need to specify the URL the agent should register to and the token it should use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"server: https://my-kubernetes-domain.com:9345\ntoken: my-shared-secret\n")))}h.isMDXComponent=!0}}]);