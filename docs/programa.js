var map = L.map('map').setView([4.62805556, -74.06527778], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([4.62805556, -74.06527778]).addTo(map);

// Abrir el archivo GeoJSON
// JavaScript se ejecuta de tal manera que si una linea de codigo se demora, se pasa a la siguiente sin esperar.
//Esto puede generar probelmas cuando se requiere secuencialidad 

async function cargarpuntos(){
    var miArchivo = await fetch("Microondas.geojson");
    //convertir el contenido como un geojson: objeto de javascript
    var datos= await miArchivo.json();

    //leer el archivo
    console.log(datos["features"][for (let i = 0; i <= 5; i++) {
  console.log(i);
}]);
};
cargarpuntos();

