let weatherApiKey = "0f272bc818897878df309b4b56d1f500"
let uviKey = "1af9a040b41dacae67d64eaabcbafeec"
let cityName = "Atlanta"
let link = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&appid=' + weatherApiKey
let forecast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + weatherApiKey
let searchForm = document.querySelector('.searchBar');
let iconDisplay = document.querySelector('#icon');
let locationIcon = document.querySelector('weatherIcon')
let cityNameEl = document.querySelector('.cityName')
let dayOfWeek = document.querySelector('.dayOfWeek')
let tempEl = document.querySelector('.temp')
let windEl = document.querySelector('.wind')
let humidEl = document.querySelector('.humid')
let uvEl = document.querySelector('.uv')
let dayOneEl = document.querySelector('.dayOne')
let dayTwoEl = document.querySelector('.dayTwo')
let dayThreeEl = document.querySelector('.dayThree')
let dayFourEl = document.querySelector('.dayFour')
let dayFiveEl = document.querySelector('.dayFive')
let temp;
let forePicOne = document.querySelector('.iconOne')
let forePicTwo = document.querySelector('.iconTwo')
let forePicThree = document.querySelector('.iconThree')
let forePicFour = document.querySelector('.iconFour')
let forePicFive = document.querySelector('.iconFive')
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
console.log(forecast)
//Taking a break right here
//TODO: I need to get the coordinates for lat and lon put in the api link so then i am able to grab the uvi from data
//The api has to be local in order to have access to it
//set global variables for now in order to grab the data then plug it in and continue the rest later
let lat = 33.749;
let lon = -84.388;
// let uviLink = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon=" + lon +"&exclude=hourly,daily&appid=" + weatherApiKey;
let uviLink = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid="+ uviKey;
getUV(uviLink)
// console.log(latitude)

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
        console.log(data.coord.lon)
        console.log(data.coord.lat)
        let lon = data.coord.lon
        let lat = data.coord.lat
        // let uviLink = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon=" + lon +"&exclude=hourly,daily&appid=" + weatherApiKey;
        // getUV(uviLink)
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

function getUV(link){
    fetch(link)
    .then(function(response){
        console.log(response.status)
        if(response.status !== 200){
            console.log(response.status)
        }
        return response.json()
    })
    .then(function(data){
        // console.log(data.city.coord.lat)
        // return data.city.coord.lat
        // console.log(data.coord.lat)
        //  latitude = data.coord.lat
        // getLat(lat);
        console.log(data)
    })
}

function getLat(lat){
    return lat;
}

// function getLon(lon){
//     return lon
// }


function getForecast (forecast){
    fetch(forecast)
    .then(function(response){
        console.log(response.status)
        if(response.status !== 200){
            console.log(response.status)
        }
        return response.json();
    })
    .then(function(data){
        console.log(data)
        //multiples of 8
        console.log(data.list)
        console.log(data.list[1].main.temp)
        dayOneEl.innerHTML = moment(dayOne).format('MM/DD/YYYY')
        dayTwoEl.innerHTML = moment(dayTwo).format('MM/DD/YYYY')
        dayThreeEl.innerHTML = moment(dayThree).format('MM/DD/YYYY')
        dayFourEl.innerHTML = moment(dayFour).format('MM/DD/YYYY')
        dayFiveEl.innerHTML = moment(dayFive).format('MM/DD/YYYY')
        let iconCodeOne = data.list[0].weather[0].icon;
        let iconUrlOne = "http://openweathermap.org/img/w/" + iconCodeOne + ".png";
        forePicOne.setAttribute('src', iconUrlOne)

        let iconCodeTwo = data.list[8].weather[0].icon;
        let iconUrlTwo = "http://openweathermap.org/img/w/" + iconCodeTwo + ".png";
        forePicTwo.setAttribute('src', iconUrlTwo)

        let iconCodeThree = data.list[16].weather[0].icon;
        let iconUrlThree = "http://openweathermap.org/img/w/" + iconCodeThree + ".png";
        forePicThree.setAttribute('src', iconUrlThree)

        let iconCodeFour = data.list[24].weather[0].icon;
        let iconUrlFour = "http://openweathermap.org/img/w/" + iconCodeFour + ".png";
        forePicFour.setAttribute('src', iconUrlFour)

        let iconCodeFive = data.list[32].weather[0].icon;
        let iconUrlFive = "http://openweathermap.org/img/w/" + iconCodeFive + ".png";
        forePicFive.setAttribute('src', iconUrlFive)
        

    })

}

getForecast(forecast)

getApi(link)
