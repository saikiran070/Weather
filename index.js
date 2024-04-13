var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "15ad338ef3b1abf9f798452ff96768d3"

function conversion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', funtion() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputvalue)
    .then(res => res.json())

    .then(data =>
        {
            var nameval = data['name']
            var descripVal = data['weather']['0']['description']
            var temperature = data['main']['temp']
            var wndspeed = data['wind']['speed']


            city.innerHTML = 'Weather of <span>${nameval}<span>';
            temp.innerHTML = 'Temperature: <span>${ conversion(temperature)} c</span';
            description.innerHTML = 'sky Conditions: <span>${descripVal}<span>';
            wind.innerHTML = 'wind Speed: <span>${wndspeed} km/h<span>';

        })
        
        
        .catch(err => alert('you entered Wrong city name'));
});