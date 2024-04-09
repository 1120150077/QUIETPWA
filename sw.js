const CACHE_NAME = 'v1_cache_RSA_PWA';

var urlsToCache= [
    './',
    './css/bootstrap.min.css',
    './css/slick.css',
    './css/templatemo-style.css',
    './img/favicon-16.jpg',
    './img/favicon-32.jpg',
    './img/favicon-64.jpg',
    './img/favicon-96.jpg',
    './img/favicon-128.jpg',
    './img/favicon-192.jpg',
    './img/favicon-256.jpg',
    './img/favicon-384.jpg',
    './img/favicon-512.jpg',
    './img/gallery-img-01.jpeg',
    './img/gallery-img-02.jpeg',
    './img/gallery-img-03.jpeg',
    './img/gallery-img-04.jpeg',
    './img/gallery-img-05.jpeg',
    './img/gallery-img-06.jpeg',
    './img/gallery-img-07.jpeg',
    './img/gallery-img-08.jpeg',
    './img/gallery-img-09.jpeg',
    './img/home-img-1.jpeg',
    './img/home-img-2.jpeg',
    './img/tm-astro-bg.jpeg',
    './js/bootstrap.min.js',
    './js/jquery-3.5.1.min.js',
    './js/slick.js',
    './js/templatemo-script.js',
    './video/gfp-astro-timelapse.mp4',
    './favicon-.jpg',
    './index.html',
    './main.js',
    './manifest.json',
    './sw.js',
]

self.addEventListener('install', e=>{

    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache =>{

            return cache.addAll(urlsToCache)
            .then(()=>{
                self.skipWaiting();
            })
        })
        .catch(err=>console.log('No se ha registrado el cache', err))
    );
});
