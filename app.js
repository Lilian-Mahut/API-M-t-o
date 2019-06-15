// définitions & traitements des variables
let callBackGetSuccess = function(data) {
  let loc = document.getElementById("location");
  loc.innerHTML = data.name + " (" + data.sys.country + ")";
  let tem = document.getElementById("degres");
  tem.innerHTML = data.main.temp.toFixed(1) +" °C";
  let temps = document.getElementById("temps");
  temps.innerHTML = data.weather[0].description;
  let humi = document.getElementById("humidite");
  humi.innerHTML = data.main.humidity + "% d'humidité";
  let vent = document.getElementById("vent");
  vent.innerHTML = "Vent : " + data.wind.speed * 3.6 + " km/h";

  // définition du jour de la semaine + heure
  var d = new Date();
  var weekday = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  var n = weekday[d.getDay()];
  var heure =new Date();
  document.getElementById("jour").innerHTML = n + ", " + heure.getHours()+":"+ heure.getMinutes();

// définitions & traitement de l'image !!!!A FAIRE!!!!
}

// appel API et retour GET
function buttonClickGET() {
  let lieu = document.getElementById("lieu").value;
  let url = 'http://api.openweathermap.org/data/2.5/weather?q='+lieu+'&lang=fr&units=metric&appid=1a26bbcdb69f79db31fabe4553194a5e';
  
  $.get(url, callBackGetSuccess).done(function()  {
  })

  .fail(function()  {
    alert("error");
  })
  .always(function()  {
  });
}
