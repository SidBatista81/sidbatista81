// Change this to your repository name
var GHPATH = '/sidbatista81/wap';
 
// Choose a different app prefix name
var APP_PREFIX = 'wpasb81_';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
VERSION = 'version_02';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/js/main.js`
]
caches.open("SidBatista81").then(cache=> cache.addAll(URLs))
onmessage = function(e){
	postMessage(`Versão atual: ${VERSION}`);
}

