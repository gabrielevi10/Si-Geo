
//Função que retorna uma cor baseado no valor dado no geojson
function getColor(d) {
    return d > 100 ? '#800026' :
             d > 60  ? '#BD0026' :
             d > 50  ? '#E31A1C' :
             d > 40  ? '#FC4E2A' :
             d > 30   ? '#FD8D3C' :
             d > 20   ? '#FEB24C' :
             d > 10   ? '#FED976' :
                        '#FFEDA0';
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
  
  //Função que seta o zoom  e mostra o pop up com as informações do mapa
  function zoomToFeature(e) {
    var  x = e.target.feature.properties.LONG_NAME
    if(typeof x == 'undefined'){
      x = e.target.feature.properties.NM_ESTADO
      x = "Brasil<br/>"+x
    }
    map.fitBounds(e.target.getBounds())
    popup
          .setLatLng(e.latlng)
          .setContent("<b> <div style='text-align: center'>"+x+" </div> </b><br/>"+"https://getbootstrap.com/docs/4.0/components/navs/")
          .openOn(map);
    // document.getElementById("texto").innerHTML = '<iframe src="pages.html#"'+x+' name="janela" id="framer" frameborder="0" scrolling="no"></iframe>'
  }
  
  //Função que chamas animações de quando o mouse está sobre o mapa e o zoom
  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature
    })
  }
  
  
  var map = L.map('map').setView([37.8, -96], 0)
  var countriesLayer = L.geoJson(statesData1).addTo(map)
  map.fitBounds(countriesLayer.getBounds())
  countriesLayer = L.geoJson(statesData).addTo(map)
  map.fitBounds(countriesLayer.getBounds())
  L.geoJson(statesData1, { style: style }).addTo(map)
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
    var x = false
    var y = false
    var i = 0
    while ( x == false){
      for(i =0 ; i< 27; i++){
          if(statesData.features[i].properties == props){
              this._div.innerHTML =
              "<h4> Mapa Sala de situação</h4>" +
              (props
              ? "<b>" +
              "Brasil" +
              "</b><br />" +
              props.NM_ESTADO +
              ""
              : "")
            x = true
            y = true
          }
      }
      if(y == false){
          this._div.innerHTML =
          "<h4> Mapa Sala de situação</h4>" +
          (props
          ? "<b>" +
          props.LONG_NAME  +
          "</b><br />" +
          ""
          : "")
          x = true
      }
    }
  
  };
  info.addTo(map)
  
  var geojson
  
  geojson = L.geoJson(statesData1, {
    style: style,
    onEachFeature: onEachFeature
  }).addTo(map)
  
  geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
  }).addTo(map)
  
  var legend = L.control({ position: "bottomright" })
  legend.onAdd = function (map) {
    var div = L.DomUtil.create("div", "info legend"),
      grades = [0, 10, 20, 30, 40, 50 ,60 ,100],
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
  
  var popup = L.popup();
  
  L.Control.ZoomMin = L.Control.Zoom.extend({
    options: {
      position: "topleft",
      zoomMinText: "Zoom min",
      zoomMinTitle: "Zoom min"
    },
  
    onAdd: function (map) {
      var zoomName = "leaflet-control-zoom"
        , container = L.DomUtil.create("div", zoomName + " leaflet-bar")
        , options = this.options
  
      this._map = map
      
      this._zoomMinButton = this._createButton(options.zoomMinText, options.zoomMinTitle,
       zoomName + '-min', container, this._zoomMin, this)
  
       this._updateDisabled()
       map.on('zoomend zoomlevelschange', this._updateDisabled, this)
       
      return container
    },
  
    _zoomMin: function () {
      if (this.options.minBounds) {
        return this._map.fitBounds(this.options.minBounds);
      }
      this._map.setZoom(3)
    },
  
    _updateDisabled: function () {
      var map = this._map
        , className = "leaflet-disabled"
  
      L.DomUtil.removeClass(this._zoomMinButton, className)
      if (map._zoom == 4) {
        L.DomUtil.addClass(this._zoomMinButton, className)
      }
    }
  })
  
  map.addControl(new L.Control.ZoomMin())
  
  