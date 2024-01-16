const OFFLINE_VERSION = 1;
const CACHE_NAME ='offline';
const OFFLINE_URL = 'offlinePage';

//Instalar o serviceWoker e adicionar ao cache todos os arquivos estátios que são gerados no build final
self.addEventListener('install', (event) => {
    event.waitUntil((async()=>{
        const cache = await caches.open(CACHE_NAME);
        await cache.add(new Request(OFFLINE_URL,{cache: 'reload'}));
    })());
});
//Ativação do serviceWoker
self.addEventListener('activate',(event)=>{
    event.waitUntil((async ()=> {
        if('navigationPreload' in self.registration){
            await self.registration.navigationPreload.enable();
        }
    })());
    self.clients.claim();
})
//SW para interceptar requisições
self.addEventListener('fetch',(event)=>{
    if(event.request.mode === 'navigate'){
        event.respondWith((async()=>{
            try{
                const preloadResponse = await event.preloadResponse;
                if(preloadResponse){
                    return preloadResponse;
                }
                const networkResponse = await fetch(event.request);
                return networkResponse;
            }catch(error){
                console.log('Fetch failed; returning offline page instead.',error);
                
                const cache = await caches.open(CACHE_NAME);
                const cachedResponse = await cache.match(OFFLINE_URL);
                return cachedResponse;
            }
        })());
    }
})