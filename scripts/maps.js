let map;
const oficina1 = { lat : -16.502169418447735, lng: -68.1327594094293 };
const oficina2 = { lat : -16.502222138824393, lng: -68.1328472517674 };
const oficina3 = { lat : -16.51075871238906, lng: -68.12218377327717 };
const oficina4 = { lat : -16.514089278133124, lng: -68.12140014323883 };
const oficina5 = { lat: -16.51102428639743, lng: -68.1222506347436 };
const oficina6 = { lat: -16.51101817004764, lng: -68.12206882174183 };
const oficina7 = { lat: -16.51070929413189, lng: -68.12192847486328 };
const oficina8 = { lat : -17.768354922187626, lng: -63.20688959980755 };
const oficina9 = { lat : -16.542387655899446, lng: -68.08630878426858 };
const coordenadas = [ oficina1 , oficina2 , oficina3 , oficina4 , oficina5 , oficina6 , oficina7 , oficina8 , oficina9];
var markers = new Array();
var infoWindows = new Array();
const textos = new Array("Banco Bisa","Grupo Financiero Bisa","Bisa Seguros","La Vitalicia","Bisa Leasing","Agencia De Bolsa","Bisa SAFI","Raisa","Sociedad De Titularización");
const descripciones = new Array("Oficina central: Av. 16 de Julio 1628, el prado, La Paz.","Oficina central: Av. 16 de Julio 1628, el prado, La Paz.","Edificio Multicine, Av. Arce 2631-2671, La Paz","Oficina Central. Av. 6 de Agosto 2860 La Paz.","Edificio Multicine, Av. Arce 2631, piso 16, La Paz","Edificio Multicine 2631, piso 15, La Paz","Edificio Multicine 2631, piso 15, La Paz","Oficina central, calle 5, Av. Busch nro 3, Urbanización Costa Blanca IV, Zona Oeste, Santa Cruz.","Calle 12 de Calacoto, esquina Patiño 8081, La Paz");
var contador = 0;

const image = "./assets/banco.png";
function cerrarInfoWindows(){
  infoWindows.forEach(element => {
    element.close();
  });
}
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: oficina1,
    zoom: 18,
    maxZoom: 19,
    minZoom: 17,
    streetViewControl: false
  });
  coordenadas.forEach(element => {
    var infoWindow = new google.maps.InfoWindow({
      content: "<h2>"+textos[contador]+"</h2>"+"<p>"+descripciones[contador]+"</p>",
      position: element,
    });

    var marker = new google.maps.Marker({
      position: element,
      map: map,
      icon: image,
    });
    
    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map,
      });
    });
    contador++;
    markers.push(marker);
    infoWindows.push(infoWindow);
  });
}

window.initMap = initMap;

const btns = document.querySelectorAll('button[id^="buttons"]');
btns.forEach((btn) => {
  btn.addEventListener('click', e => {
    switch(e.target.id){
      case 'buttons1': 
          map.panTo(oficina1);
          cerrarInfoWindows();
          infoWindows[0].open({
            anchor: markers[0],
            map
          });
          
        break;
      case 'buttons2':
          map.panTo(oficina2);
          cerrarInfoWindows();
          infoWindows[1].open({
            anchor: markers[1],
            map
          });
        break;
      case 'buttons3':
          map.panTo(oficina3);
          cerrarInfoWindows();
          infoWindows[2].open({
            anchor: markers[2],
            map
          });
        break;
      case 'buttons4':
          map.panTo(oficina4);
          cerrarInfoWindows();
          infoWindows[3].open({
            anchor: markers[3],
            map
          });
        break;
      case 'buttons5':
          map.panTo(oficina5);
          cerrarInfoWindows();
          infoWindows[4].open({
            anchor: markers[4],
            map
          });
        break;
      case 'buttons6':
          map.panTo(oficina6);
          cerrarInfoWindows();
          infoWindows[5].open({
            anchor: markers[5],
            map
          });
        break;
      case 'buttons7':
          map.panTo(oficina7);
          cerrarInfoWindows();
          infoWindows[6].open({
            anchor: markers[6],
            map
          });
        break;
      case 'buttons8':
          map.panTo(oficina8);
          cerrarInfoWindows();
          infoWindows[7].open({
            anchor: markers[7],
            map
          });
        break;
      case 'buttons9':
          map.panTo(oficina9);
          cerrarInfoWindows();
          infoWindows[8].open({
            anchor: markers[8],
            map
          });
      break;
      default:
          map.panTo(oficina1);
          cerrarInfoWindows();
          infoWindows[0].open({
            anchor: markers[0],
            map
          });
        break; 
    }
  });
});
