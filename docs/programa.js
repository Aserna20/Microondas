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
    //obtener el arreglo de la llave features que es un conjunto de objetos tipo feature
    let listaFeatures = datos["features"];
    //obtener la geometria del primer elemento

     //leer el archivo
    for (let i = 0; i <= 6; i++) {
        let miscoordenadas = listaFeatures[i]["geometry"]["coordenates"];
        var mimarcador = L.marker(miscoordenadas);
        mimarcador.addTo(map);

        marker.bindPopup("<b>U.Distrital").openPopup();

var popup = L.popup()
    .setLatLng([4.642763501416774, -74.07479412840623])
    .setContent("Falabella")
    .openOn(map);

    let info = datos["properties"]


    

  console.log(i);
   
}
};
cargarpuntos();


