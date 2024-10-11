
function currentTime(){
let date=new Date();
let weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
let day=weekDays[date.getDay()];
let dayElement=document.querySelector(".weather-day");
dayElement.innerHTML=day;

let timeElement=document.querySelector(".weather-time");
let hour=date.getHours();
let minute=date.getMinutes();
if (minute<10){
minute="0"+ minute;
}
timeElement.innerHTML=hour+":"+minute;
}


function weatherforecast(response) {
let temp=Math.round(response.data.temperature.current);
let degree=document.querySelector(".weather-degree");
degree.innerHTML=temp;

let hum=response.data.temperature.humidity;
let humElement=document.querySelector(".weather-humidity");
humElement.innerHTML=hum;

let wind=response.data.wind.speed;
let windElement=document.querySelector(".weather-wind");
windElement.innerHTML=wind;

let condition=response.data.condition.description;
let conditionElement=document.querySelector(".weather-condition");
conditionElement.innerHTML=condition;
currentTime();

let icon=response.data.condition.icon_url;
let iconElement=document.querySelector(".weather-icon");
iconElement.innerHTML=`<img src="${icon}">`;

}

function displayCity(event){
event.preventDefault();
let inputCity=document.querySelector("#weather-city-input").value;
let heading=document.querySelector("h1");
heading.innerHTML=inputCity;

let apiKey="20468a8333bf53tb20f4666cf98f1o0b"
let apiURL=`https://api.shecodes.io/weather/v1/current?query=${inputCity}&key=${apiKey}&units=metric`;
axios.get(apiURL).then(weatherforecast);
}

let submitElement=document.querySelector("#weather-submit");
submitElement.addEventListener("click",displayCity);