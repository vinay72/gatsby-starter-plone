/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-fae9ba35af3078db4ae1.js"
  },
  {
    "url": "app-f1c8b47113f0d09f798a.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d18b0be2d41c5bb12b3b.js"
  },
  {
    "url": "index.html",
    "revision": "0c5d408436ba169f636c138cfbb6c787"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4b40539b1e1bf9a3da39f1bf53d27e9f"
  },
  {
    "url": "component---src-pages-index-js.5a7f83aea16005e95786.css"
  },
  {
    "url": "component---src-pages-index-js-271535ce8d612c69a9f2.js"
  },
  {
    "url": "1-9060fdc986d51c825a1b.js"
  },
  {
    "url": "0-a4426f916e7ab2227ca5.js"
  },
  {
    "url": "static/d/198/path---index-6a9-7ciVmHKcnRVQby3OxTZ2829JGbw.json",
    "revision": "603551e5ea4e5f5e86a9eeb54f2f1dca"
  },
  {
    "url": "component---src-pages-404-js.0321e06e53a6e05904e3.css"
  },
  {
    "url": "component---src-pages-404-js-a5ed73af969893300fd9.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "106b0564a267947433395e7294ce5397"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/gatsby-starter-plone/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});