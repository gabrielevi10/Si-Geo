//Função que retorna uma cor baseado no valor dado no geojson
function getColor(d) {
  return d > 40 ? "#800026"
    : d > 35
      ? "#BD0026"
      : d > 30
        ? "#E31A1C"
        : d > 25
          ? "#FC4E2A"
          : d > 20
            ? "#FD8D3C"
            : d > 15 ? "#FEB24C" : d > 10 ? "#FED976" : "#FFEDA0"
}

//Função que imprime o mapa em si
function style(feature) {
  return {
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
    fillColor: getColor(feature.properties.CD_GEOCUF)
  }
}

//Função que dá interativadade no mapa
function highlightFeature(e) {
  var layer = e.target
  layer.setStyle({
    weight: 5,
    color: "#666",
    dashArray: "",
    fillOpacity: 0.7
  })
  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront()
  }
  info.update(layer.feature.properties)
}
 
//Função que reseta o mapa
function resetHighlight(e) {
  geojson.resetStyle(e.target)
  info.update()
}

function zoomToFeature(e) {
  var x = e.target.feature.properties.NM_ESTADO
  console.log(x)
  map.fitBounds(e.target.getBounds())
  document.getElementById("texto").innerHTML = '<iframe src="pages.html#"'+x+' name="janela" id="framer" frameborder="0" scrolling="no"></iframe>'
}
    
function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature
  })
}

var map = L.map('map').setView([37.8, -96], 4)
var countriesLayer = L.geoJson(statesData).addTo(map)
map.fitBounds(countriesLayer.getBounds())
L.geoJson(statesData, { style: style }).addTo(map)
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: "mapbox.light"
  }
).addTo(map)
// control that shows state info on hover
var info = L.control()
info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info")
  this.update()
  return this._div
};

info.update = function (props) {
  this._div.innerHTML =
    "<h4>Brasil</h4>" +
    (props
      ? "<b>" +
      props.NM_ESTADO +
      "</b><br />" +
      props.NM_REGIAO +
      ""
      : "Estados")
};
info.addTo(map)

var geojson

geojson = L.geoJson(statesData, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(map)
var legend = L.control({ position: "bottomright" })
legend.onAdd = function (map) {
  var div = L.DomUtil.create("div", "info legend"),
    grades = [0, 10, 20, 50],
    labels = [],
    from,
    to
  for (var i = 0; i < grades.length; i++) {
    from = grades[i]
    to = grades[i + 1]
    labels.push(
      '<i style="background:' +
      getColor(from + 1) +
      '"></i> ' +
      from +
      (to ? "&ndash;" + to : "+")
    )
  }
  div.innerHTML = labels.join("<br>")
  return div
}
legend.addTo(map)
