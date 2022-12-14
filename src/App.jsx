function App() {
  Geolocalizacion();
}

function Geolocalizacion (){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        browserGeolocationSuccess,  //Se ejecuta si todo sale bien
        browserGeolocationFail,     //Se ejecuta si no se logra obtener la geolocalización
        {maximumAge: 50000, timeout: 10000, enableHighAccuracy: true});
  }else
  {
      console.log("navigator.geolocation no esta soportada");
  }
}

var browserGeolocationSuccess = function(position) {
  console.log("Si obtuvo la geolocalizacion del navegador.");
};

//Geolocalización no exitosa
var browserGeolocationFail = function(error) {
  console.log("NO obtuvo la geolocalizacion del navegador.");
};

export default App
