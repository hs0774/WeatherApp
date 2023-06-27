import { WeatherObj } from "./obj";
import { ForecastObj } from "./forecast";
import { format, parseISO } from 'date-fns';


//dom/event listeners will move to different page later
const search = document.getElementById('search');  //get search.value
const form = document.querySelector('.form'); // do something after val submitted
const content = document.querySelector('.content');


//finds weather of area will add more ex 7 day forecast
async function finder(area) {
    try{
     const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4eeb393e704d4c829ed160933232306&q=${area}&days=8&aqi=yes&alerts=yes`, {mode :'cors'});
     const data =  await response.json();
     createObj(data);
    } catch (error){
        console.error(error);
    }
}

//gets users current location defaults to manhattan if location not given 
async function getlocation() {
  try {  
    const pos = await new Promise((resolve,reject) => { 
        navigator.geolocation.getCurrentPosition(resolve,reject);
    }); 

    const userLocation = {
        lat: pos.coords.latitude,
        long: pos.coords.longitude
    };

    area=`${userLocation.lat},${userLocation.long}`;
    finder(area);
    content.classList.remove('hidden');
    
    } catch (err) {
        alert('Default location: New York will be shown');
        finder('10001');
        content.classList.remove('hidden');
    }
}

getlocation();
let area;


//listens for submit and calls finder function 
form.addEventListener('submit',function(e){
    e.preventDefault();
    finder(search.value);
    search.value='';
    search.textContent='';
});



//takes date from finder and makes an object holding todays forecast and an array of objects
// holding 7 day forecast

function createObj(data){

    const sentence = data.location.localtime;  // proper date formatting 
    const dateOnly = sentence.split(' '); //returns object with time just need date 
    const icon =`https:${data.current.condition.icon}`;  //get the picture data
    const todaysDay = daycreater(dateOnly[0]); 
    const newobj = new WeatherObj(data.current.temp_f,data.current.temp_c,data.current.condition.text,data.location.name,data.location.region,
        data.location.country,data.current.feelslike_c,data.current.feelslike_f,data.current.humidity,data.current.wind_mph,data.current.wind_kph,
        data.current.vis_miles,data.current.vis_km,dateOnly[0],icon,todaysDay);

    for(let i=1;i<data.forecast.forecastday.length;i++) {
       const properDate= daycreater(data.forecast.forecastday[i].date);
       const weekIcon = 'https:' + data.forecast.forecastday[i].day.condition.icon;
       const weekforecast = new ForecastObj(data.forecast.forecastday[i].day.maxtemp_f, data.forecast.forecastday[i].day.mintemp_f,
        data.forecast.forecastday[i].day.condition.text, properDate,weekIcon);
       newobj.pushSevenday(weekforecast);
    }

    domManip(newobj);
    forecastDomManip(newobj);
}

function domManip(newobj){
    const leftWeather = document.querySelector('.Weather');
    const leftLocation = document.querySelector('.Location');
    const leftDate = document.querySelector('.date');
    const leftTemp = document.querySelector('.temp');
    const leftTempWeather = document.querySelector('.tempWeather');
    leftTempWeather.replaceChildren();
    leftTempWeather.append(leftTemp);

    const rightFeels = document.querySelector('.feels');
    const rightHumidity = document.querySelector('.humidity');
    const rightvis = document.querySelector('.visibility');
    const rightWind = document.querySelector('.wind');
    const img = document.createElement('img');
    img.src = newobj.pic;
    leftTempWeather.append(img);

    leftWeather.textContent= newobj.CurrentCondition;
    leftLocation.textContent= `${newobj.LocationName}, ${newobj.LocationRegion}, ${newobj.LocationCountry}`;
    leftDate.textContent= `${newobj.date}, ${newobj.today}`;
    leftTemp.textContent= `${Math.round(newobj.Currenttemp_f)} \u00B0F `;
    rightFeels.textContent= `${Math.round(newobj.feelslike_f)} \u00B0F`; 
    rightHumidity.textContent= `${newobj.humidity}%`;
    rightvis.textContent= `${newobj.vis_miles} mi`;
    rightWind.textContent= `${newobj.wind_mph} mph`;
}

function forecastDomManip(newobj){
    
    const bottom = document.querySelector('.bottom');
    bottom.replaceChildren();

    newobj._sevenDay.forEach(element => {
        const container= document.createElement('div');
        container.classList.add('container');
        bottom.append(container);

        const date = document.createElement('div');
        date.classList.add('date2');
        date.textContent=element.date;
        const maxtempf = document.createElement('div');
        maxtempf.classList.add('maxtemp');
        maxtempf.textContent=`${Math.round(element.maxtemp_f)} \u00B0F `;
        const mintempf = document.createElement('div');
        mintempf.classList.add('mintemp');
      
        mintempf.textContent=`${Math.round(element.mintemp_f)} \u00B0F`;
        const weatherPicBottom = document.createElement('img');
        weatherPicBottom.src=element.pic;

       container.append(date);
       container.append(maxtempf);
       container.append(mintempf);
       container.append(weatherPicBottom);
    });
}

function daycreater(date){
    const datee = parseISO(date);
    const dayOfWeek = format(datee, 'EEEE'); // 'EEEE' represents the full name of the day of the week
    return dayOfWeek; 
}