# Test ESM Leaflet with Geoman

## Modifications
1. In `js/index.js` you can switch the files for the import type `require` or `import`
2. In the files `index-import.js` or `index-require.js` you can switch between Leaflet-1.8 and the generated files from the ESM-PR (`libs`)

## Test
Open `index.html`, then an alert will open and shows `[Object object]` or `undefined` if `L.PM` from Geoman plugin is not available.
