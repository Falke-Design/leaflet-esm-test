// import L from 'leaflet';
import L from '../lib/leaflet';
require('@geoman-io/leaflet-geoman-free');

var map = L.map('map',{
  center: [0,0],
  zoom: 1
});

console.log(L, L.PM)
