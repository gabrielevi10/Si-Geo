$(document).ready(function(){
  var tour = new Tour({
    steps: [
    {
      element: "#inicio",
      title: "Bem Vindo ao GeoMap",
      content: "Ao clicar em Inicio, você será redirecionado para a página inicial do site, com uma visualização ampla do Mapa.",
      placement: "bottom"
    },
    {
      title: "Sobre",
      element: "#sobre",
      content: "Em Sobre, contem informações sobre a sala de situação, na qual trabalhos diariamente.",
      placement: "bottom"
    },
    {
      element: "#sala",
      title: "Produtos da sala de Situação",
      content: "Produtos da sala de situação",
      placement: "bottom"
    },
    {
      element: " .leaflet-control-zoom-min",
      title: "Visualização do Mapa",
      content: "Clicando no Botão de + você da Zoom no mapa, e clicando em - você diminui o Zoom. Clicando no símbolo do globo, expande o mapa, para uma visualização mais ampla."
    }
  ]});

  // Initialize the tour
  tour.init();

  // Start the tour
  tour.start();
});
