let weatherApiKey = "0f272bc818897878df309b4b56d1f500"
let cityName = "Atlanta"
let link = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&appid=' + weatherApiKey
let searchForm = document.querySelector('.searchBar');
let iconDisplay = document.querySelector('#icon');
let locationIcon = document.querySelector('weatherIcon')
let cityNameEl = document.querySelector('.cityName')
let dayOfWeek = document.querySelector('.dayOfWeek')
let tempEl = document.querySelector('.temp')
let windEl = document.querySelector('.wind')
let humidEl = document.querySelector('.humid')
let uvEl = document.querySelector('.uv')
let temp;
const date = new Date();
const tomorrow = new Date();
const dayOne = new Date();
const dayTwo = new Date();
const dayThree = new Date();
const dayFour = new Date();
const dayFive = new Date();
dayOne.setDate(date.getDate()+1)
dayTwo.setDate(date.getDate()+2)
dayThree.setDate(date.getDate()+3)
dayFour.setDate(date.getDate()+4)
dayFive.setDate(date.getDate()+5)
// function searchFunction(event){
//     event.preventDefault();
//     let cityName = "Atlanta"
//     let weatherApiKey = "0f272bc818897878df309b4b56d1f500"
//     let link = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&appid=' + weatherApiKey

// }

// searchForm.addEventListener('submit', searchFunction);

function getElement(id){
    return document.getElementById(id);
}

function getApi(link){
    fetch(link)
    .then(function(response){
        console.log(response.status)
        if(response.status !== 200){
            console.log(response.status)
        }
        return response.json();
    })
    .then(function (data){
        console.log(data)
        console.log(data.name)
        console.log(data.weather[0])
        console.log(data.weather[0].description)
        // getElement('icon').attr = data.weather[0].icon;
        let iconCode = data.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        iconDisplay.setAttribute('src', iconUrl)
        cityNameEl.innerHTML = data.name
        dayOfWeek.innerHTML = moment(date).format('MM/DD/YYYY')
        tomorrow.setDate(date.getDate()+1)
        console.log(tomorrow)
        console.log(moment(tomorrow).format('MM/DD/YYYY'))
        //Adding five day forecast for later
        console.log(moment(dayOne).format('MM/DD/YYYY'))
        console.log(moment(dayTwo).format('MM/DD/YYYY'))
        console.log(moment(dayThree).format('MM/DD/YYYY'))
        console.log(moment(dayFour).format('MM/DD/YYYY'))
        console.log(moment(dayFive).format('MM/DD/YYYY'))
        temp = data.main.temp;
        console.log(((((temp-273.15)*9)/5))+32)
        console.log(Math.floor(((((temp-273.15)*9)/5))+32))
    });
}

getApi(link)
