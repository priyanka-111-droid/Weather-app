async function getUserData(location){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d7f5a31bd3cbce09e5b461018d750bcc`, {mode: 'cors'});
    const weatherData = await response.json();
    const Userweather={
        temperature:weatherData.main.temp,
        condition:weatherData.weather[0].main,
        location: weatherData.name,
    };
    return Userweather;
}
async function updateUI() {
    const loc = prompt('enter location');
    const weatherData = await getUserData(loc);
    const temperature = document.querySelector("#temperature");
    const condition = document.querySelector("#condition");
    const location = document.querySelector("#location");
  
    temperature.textContent = `Temperature : ${weatherData.temperature}°C`;
    condition.textContent = `Weather : ${weatherData.condition}`;
    location.textContent = `Location : ${weatherData.location}`;
}


updateUI();

