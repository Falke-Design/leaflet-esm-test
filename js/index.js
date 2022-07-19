import L, { Map } from 'leaflet';
import '@geoman-io/leaflet-geoman-free';

const map = new Map('map', {
  center: [0,0],
  zoom: 1
});

console.log('import L', L);
console.log('window.L', window.L);
console.log('import L == window.L', L === window.L);

console.log('import L.PM', L.PM);
console.log('window.L.PM', window.L.PM);
console.log('import L.PM === window.L.PM', L.PM === window.L.PM);