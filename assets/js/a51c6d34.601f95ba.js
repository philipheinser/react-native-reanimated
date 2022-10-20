"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[4886],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const i={id:"installation",title:"Installation",sidebar_label:"Installation"},o=void 0,l={unversionedId:"fundamentals/installation",id:"version-2.5.x/fundamentals/installation",title:"Installation",description:"Installing Reanimated requires a couple of additional steps compared to installing most of the popular react-native packages.",source:"@site/versioned_docs/version-2.5.x/fundamentals/installation.md",sourceDirName:"fundamentals",slug:"/fundamentals/installation",permalink:"/react-native-reanimated/docs/fundamentals/installation",draft:!1,tags:[],version:"2.5.x",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation"},sidebar:"version-2.5.x/docs",previous:{title:"About",permalink:"/react-native-reanimated/docs/"},next:{title:"Worklets",permalink:"/react-native-reanimated/docs/fundamentals/worklets"}},s={},p=[{value:"Installing the package",id:"installing-the-package",level:2},{value:"Babel plugin",id:"babel-plugin",level:2},{value:"Android",id:"android",level:2},{value:"Proguard",id:"proguard",level:3},{value:"iOS",id:"ios",level:2},{value:"Sample React-Native project configured with Reanimated",id:"sample-react-native-project-configured-with-reanimated",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Installing Reanimated requires a couple of additional steps compared to installing most of the popular react-native packages.\nSpecifically on Android the setup consist of adding additional code to the main application class.\nThe steps needed to get reanimated properly configured are listed in the below paragraphs."),(0,r.kt)("h2",{id:"installing-the-package"},"Installing the package"),(0,r.kt)("p",null,"First step is to install ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," as a dependency in your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-reanimated\n")),(0,r.kt)("h2",{id:"babel-plugin"},"Babel plugin"),(0,r.kt)("p",null,"Add Reanimated's Babel plugin to your ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{7}","{7}":!0},"  module.exports = {\n    presets: [\n      ...\n    ],\n    plugins: [\n      ...\n      'react-native-reanimated/plugin',\n    ],\n  };\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Reanimated plugin has to be listed last.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"After adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated/plugin"),' to your project you may encounter a false-positive "Reanimated 2 failed to create a worklet" error. In most cases, this can be fixed by cleaning the application\'s cache. Depending on your workflow or favourite package manager that could be done by:'),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn start --reset-cache")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm start -- --reset-cache")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expo start -c"))),(0,r.kt)("p",{parentName:"admonition"},"or other.")),(0,r.kt)("h2",{id:"android"},"Android"),(0,r.kt)("p",null,"No additional steps are necessary."),(0,r.kt)("h3",{id:"proguard"},"Proguard"),(0,r.kt)("p",null,"If you're using Proguard, make sure to add rule preventing it from optimizing Turbomodule classes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-keep class com.swmansion.reanimated.** { *; }\n-keep class com.facebook.react.turbomodule.** { *; }\n")),(0,r.kt)("h2",{id:"ios"},"iOS"),(0,r.kt)("p",null,"As reanimated is setup to configure and install automatically, the only thing you have to do is to run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ios/")," directory. Note that the auto-installation setup works for the standard React Native apps, if you have problems setting it up with a custom setup (e.g. brownfield) please start a new issue where we can find a way to guide you through that process."),(0,r.kt)("h2",{id:"sample-react-native-project-configured-with-reanimated"},"Sample React-Native project configured with Reanimated"),(0,r.kt)("p",null,"If you have troubles configuring Reanimated in your project, or just want to try the library without the need of setting it up ion a fresh project we recommend checking our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion-labs/reanimated-2-playground"},"Reanimated Playground")," repo, which is essentially a fresh React-Native app with Reanimated library installed and configured properly.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion-labs/reanimated-2-playground"},"Visit the Playground repo here")," or copy the command below to do a git clone:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/software-mansion-labs/reanimated-2-playground.git\n")))}d.isMDXComponent=!0}}]);