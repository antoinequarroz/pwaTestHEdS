if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const c=e=>n(e,o),l={module:{uri:o},exports:r,require:c};s[o]=Promise.all(i.map((e=>l[e]||c(e)))).then((e=>(t(...e),r)))}}define(["./workbox-74f2ef77"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BgHZbBCn.css",revision:null},{url:"assets/index-CZ2j04DL.js",revision:null},{url:"index.html",revision:"02737e1c0350b3b37d255cb846c83235"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"da6ac289b496fecc13d4ac97d0d34f35"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3})]}),"GET")}));
