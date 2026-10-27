const V='pnl-ledger-v4';
const A=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','vendor/xlsx.full.min.js','vendor/fa/css/all.min.css','vendor/fa/webfonts/fa-solid-900.woff2','vendor/outfit-400.woff2','vendor/outfit-600.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(A.map(u=>fetch(new Request(u,{cache:'reload'})).then(r=>{if(!r.ok)throw 0;return c.put(u,r)})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok){const c=r.clone();caches.open(V).then(x=>x.put(e.request,c))}return r}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('index.html'))));
});
