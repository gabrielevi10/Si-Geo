$(document).ready(function(){
  var tour = new Tour({
    steps: [
    {
      title: "Bem Vindo ao GeoMap",
      element: "#inicio",
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
      title: "Produtos da sala de Situação",
      element: "#sala",
      content: "Aqui você encontra links para os outros produtos da sala de situação",
      placement: "bottom"
    },
    {
      title: "Visualização do Mapa",
      element: ".leaflet-control-zoom-min",
      content: "Clicando no Botão de + você pode aproximar o mapa. clicando em - você diminui o Zoom. Clicando no símbolo do globo, expande o mapa, para uma visualização mais ampla."
    }
  ]});

  // Initialize the tour
  tour.init();

  // Start the tour
  tour.start();
});
