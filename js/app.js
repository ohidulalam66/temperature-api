/* The ID was brought from UI  */
const searchBtn = document.getElementById('search-btn');
const inputField = document.getElementById('input-field');
const weatherCountainer =document.getElementById('weather-container');
const searchError = document.getElementById('search-error');
/* Weather api key */
const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;

/* add event handler click */
searchBtn.addEventListener('click', function(){

    /* bring input field value */
    const inputValue = inputField.value;

    /* search clear */
    inputField.value = '';

    /* The data was extracted by fatch */
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data));
});

/* The data is displayed on the display by the function */
const displayWeather = temperature => {

    /* Search Error handler */
    if(temperature.cod === '404'){
        searchError.innerHTML = `<h3 class= "text-center font-weight-bold text-danger">City not found</h3>`;
    }
    else{
        searchError.innerHTML = '';
    }
    
    /* set Weather icon, locaton, temperature, weather inner html */
    weatherCountainer.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png" alt="">
    <h1 class="font-weight-bold">${temperature.name}</h1>
    <h3> Feels like: ${temperature.main.feels_like}&deg;C / Temperature: ${temperature.main.temp}&deg;C</h3>
    <h1 class="lead">${temperature.weather[0].main}</h1>
    `;
};