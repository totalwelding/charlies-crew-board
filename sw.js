importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js","https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");
firebase.initializeApp({apiKey:"AIzaSyAhwpD274QsIxuR5-7AGbXWcsKGIgQHkIM",authDomain:"charlies-crew-board.firebaseapp.com",projectId:"charlies-crew-board",storageBucket:"charlies-crew-board.firebasestorage.app",messagingSenderId:"424591665915",appId:"1:424591665915:web:0db1e8e5a84a8fd8091e5e"});
firebase.messaging();
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",()=>{});
self.addEventListener("notificationclick",e=>{e.notification.close();e.waitUntil(clients.matchAll({type:"window",includeUncontrolled:true}).then(ws=>{for(const w of ws){if("focus" in w)return w.focus()}return clients.openWindow("./")}))});
