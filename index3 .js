// Change content and image source for weather forecast
function updateWeatherHtml () {
    document.getElementById("iconimage").src = 'img/rain.png';
    document.getElementById("summary").innerHTML = 'Rain in the evening';
    document.getElementById("temperature").innerHTML = '8 °C';
    document.getElementById("winddisplay").innerHTML = '8km/h';
    document.getElementById("humiditydisplay").innerHTML = '68%';
    document.getElementById("datedisplay").innerHTML = 'Tomorrow';
    document.getElementById("buttonDateRight").style.visibility = 'hidden';
 }