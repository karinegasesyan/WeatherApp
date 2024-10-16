const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();


const updateUI = (data) =>{
    console.log(data);
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    // Destructuring properties

    const{ cityDets, weather } = data;

    //upd details template 
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    //remove d-none class if has
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
    //upd night & day icon images
    //let timeSrc = null;

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // if (weather.IsDayTime){
    //     timeSrc = 'img/day.svg'; 
    // }else{
    //     timeSrc = 'img/night.svg';
    // }

    // Ternary Operator
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);

};

const updateCity = async (city) => {
    //console.log(city);
    // const cityDets = await getCity(city);
    // const weather = await getWeather(cityDets.Key);
    // return{
    //     // cityDets: cityDets,
    //     // weather: weather

    //     //Object Shorthand Notation
    //     cityDets, weather
    // };
};

cityForm.addEventListener('submit', e =>{
    //prevent default action
    e.preventDefault();

    //get city val
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //upd the ui with new city
    forecast.updateCity(city)
    // updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error));

    //set local storage 
    localStorage.setItem('cityName', city);
    if(localStorage.getItem('cityName')){
        // updateCity(localStorage.getItem('cityName'))
        forecast.updateCity(localStorage.getItem('cityName'))
        .then(data => updateUI(data))
        .catch(error => console.log(error));
    }
});