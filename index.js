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
//Pictures
let forePicOne = document.querySelector('.iconOne')
let forePicTwo = document.querySelector('.iconTwo')
let forePicThree = document.querySelector('.iconThree')
let forePicFour = document.querySelector('.iconFour')
let forePicFive = document.querySelector('.iconFive')
//Temperature
let foreTempOne = document.querySelector('.foreTempOne')
let foreTempTwo = document.querySelector('.foreTempTwo')
let foreTempThree = document.querySelector('.foreTempThree')
let foreTempFour = document.querySelector('.foreTempFour')
let foreTempFive = document.querySelector('.foreTempFive')
//Wind
let foreWindOne = document.querySelector('.foreWindOne')
let foreWindTwo = document.querySelector('.foreWindTwo')
let foreWindThree = document.querySelector('.foreWindThree')
let foreWindFour = document.querySelector('.foreWindFour')
let foreWindFive = document.querySelector('.foreWindFive')
//Humid
let foreHumidOne = document.querySelector('.humidOne')
let foreHumidTwo = document.querySelector('.humidTwo')
let foreHumidThree = document.querySelector('.humidThree')
let foreHumidFour = document.querySelector('.humidFour')
let foreHumidFive = document.querySelector('.humidFive')

let submitBtn = document.querySelector('.submitBtn')
let historyBtn = document.querySelector('.newBtn')
let inputBox = document.querySelector('#search')
let theNewBtn = document.querySelector(".blue")


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
        let convertedTemp = Math.floor(((((temp-273.15)*9)/5))+32)
        tempEl.innerHTML = "Temp: " + convertedTemp + "\u00B0F"
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
        let tempOne = data.list[0].main.temp
        let tempConverterOne = Math.floor(((((tempOne-273.15)*9)/5))+32)
        let iconUrlOne = "http://openweathermap.org/img/w/" + iconCodeOne + ".png";
        let windOne = data.list[0].wind.speed;
        let humidOne = data.list[0].main.humidity;
        forePicOne.setAttribute('src', iconUrlOne)
        foreTempOne.innerHTML = "Temp: " + tempConverterOne + "\u00B0F"
        foreWindOne.innerHTML = "Wind: "+windOne + " MPH"
        foreHumidOne.innerHTML = "Humidity: "+humidOne
        //TODO:
        //Complete the rest of the temperature values, then do the same for wind and humidity
        let iconCodeTwo = data.list[8].weather[0].icon;
        let tempTwo = data.list[8].main.temp;
        let tempConverterTwo = Math.floor(((((tempTwo-273.15)*9)/5))+32)
        let iconUrlTwo = "http://openweathermap.org/img/w/" + iconCodeTwo + ".png";
        let windTwo = data.list[8].wind.speed;
        let humidTwo = data.list[8].main.humidity;
        forePicTwo.setAttribute('src', iconUrlTwo)
        foreTempTwo.innerHTML = "Temp: " + tempConverterTwo + "\u00B0F"
        foreWindTwo.innerHTML = "Wind: "+windTwo + " MPH"
        foreHumidTwo.innerHTML = "Humidity: "+humidTwo

        let iconCodeThree = data.list[16].weather[0].icon;
        let tempThree = data.list[16].main.temp;
        let tempConverterThree = Math.floor(((((tempThree-273.15)*9)/5))+32)
        let iconUrlThree = "http://openweathermap.org/img/w/" + iconCodeThree + ".png";
        let windThree = data.list[16].wind.speed;
        let humidThree = data.list[16].main.humidity;
        forePicThree.setAttribute('src', iconUrlThree)
        foreTempThree.innerHTML = "Temp: " + tempConverterThree + "\u00B0F"
        foreWindThree.innerHTML = "Wind: "+windThree + " MPH"
        foreHumidThree.innerHTML = "Humidity: "+humidThree

        let iconCodeFour = data.list[24].weather[0].icon;
        let tempFour = data.list[24].main.temp;
        let tempConverterFour = Math.floor(((((tempFour-273.15)*9)/5))+32)
        let iconUrlFour = "http://openweathermap.org/img/w/" + iconCodeFour + ".png";
        let windFour = data.list[24].wind.speed;
        let humidFour = data.list[24].main.humidity;
        forePicFour.setAttribute('src', iconUrlFour)
        foreTempFour.innerHTML = "Temp: " + tempConverterFour + "\u00B0F"
        foreWindFour.innerHTML = "Wind: "+windFour + " MPH"
        foreHumidFour.innerHTML = "Humidity: "+humidFour

        let iconCodeFive = data.list[32].weather[0].icon;
        let tempFive = data.list[32].main.temp
        let tempConverterFive = Math.floor(((((tempFive-273.15)*9)/5))+32)
        let iconUrlFive = "http://openweathermap.org/img/w/" + iconCodeFive + ".png";
        let windFive = data.list[32].wind.speed;
        let humidFive = data.list[32].main.humidity;
        forePicFive.setAttribute('src', iconUrlFive)
        foreTempFive.innerHTML = "Temp: " + tempConverterFive + "\u00B0F"
        foreWindFive.innerHTML = "Wind: "+windFive + " MPH"
        foreHumidFive.innerHTML = "Humidity: "+humidFive
        

    })

}

// function saveCity(){
//     let inputSpace = document.querySelector('#search')
//     console.log(inputSpace)
//     console.log("Hello")
// }

// submitBtn.onclick = saveCity;

// function saveCity(event){
//     event.preventDefault()
//     let inputSpace = document.querySelector('#search').value
//     // submitBtn.setAttribute('class', "blue")
//     // console.log(inputSpace)
//     let newBtn = document.createElement("button")
//     newBtn.value = "My City"
//     searchForm.appendChild(newBtn)
//     console.log("Hello")
// }


getForecast(forecast)

getApi(link)

// saveCity()

submitBtn.addEventListener('click', saveCity)
function saveCity(event){
    event.preventDefault()
    let inputSpace = document.querySelector('#search').value
    // inputSpace = " "
    console.log(inputSpace)
    console.log(inputBox.value)
    let = newCity = {
        city: inputSpace
    }

    let allCities = JSON.parse(window.localStorage.getItem("city")) || [];
    allCities.push(newCity);
    window.localStorage.setItem("city", JSON.stringify(allCities))
    // let btnCarrier = document.querySelector('.btnCarrier')
    // submitBtn.setAttribute('class', "blue")
    // console.log(inputSpace)
    let newBtn = document.createElement("button")
    newBtn.setAttribute('class', "blue")
    if(!inputSpace){
        console.log("There is no city")
    }else{
        newBtn.innerHTML = inputSpace
        newBtn.setAttribute('value', inputSpace)
    }
    // searchForm.appendChild(newBtn)
    //I will need to create a new function in order to prevent the button from clearing when clicked
    historyBtn.appendChild(newBtn)
    // historyBtn.addEventListener('click', searchCity)
    console.log("Hello")
    // document.addEventListener('DOMContentLoaded', function(){
    //     theNewBtn.addEventListener('click', searchCity)
    // })
    //TODO: 
    //Better off making if statements if the button is clicked and if it has matching values 
    //Search that city
    // historyBtn.addEventListener('click', (event) => searchCity(event, inputSpace))
    // historyBtn.onclick = function(event){
    //     event.preventDefault()
    //     console.log("Hello World")
    //     console.log("Is this working")
    //     console.log(historyBtn.innerHTML)
    // }
    newBtn.onclick = function(event){
        event.preventDefault()
        console.log(newBtn.innerText)
    }
}

// historyBtn.addEventListener('click', searchCity)

function searchCity(event, inputSpace){
    event.preventDefault()
    let cityName = inputSpace
    let theEvent = event.view.let.city
    console.log("This is my city name: " + cityName)
    console.log("This is the current event: "+theEvent)
    // inputBox.value = " "
    // theNewBtn = document.querySelector(".blue")
    // theNewBtn = document.querySelector(".blue").value
    //TODO:
    //Problem is right now it is only submitting whatever is in the input field,
    //but I have to click "search" in order to get the new city,
    //And if I don't then it is going to keep the last input that was entered
    // weatherApiKey = "0f272bc818897878df309b4b56d1f500"
    // console.log("Good")
    console.log("This is the buttons value: "+theNewBtn)
    console.log(localStorage.length)
    let allCities = JSON.parse(window.localStorage.getItem("city")) || [];
    //TODO:
    //Create a for loop to able to loop through localstorage data and have it try to match the value of the button
    console.log(allCities[4].city)
    console.log(allCities.length)
    // for(let i = 0; i < allCities.length; i++){
    //     if()
    // }
    // if(theNewBtn.innerHTML === "Lawrenceville"){
    //     console.log("This is my city")
    // }
    // console.log(historyBtn)
    // theEvent = theNewBtn.innerHTML
    // console.log(theEvent + "This should be the new city")
    // cityName = theNewBtn.innerHTML
    // console.log(cityName)
    // console.log(weatherApiKey)
    // cityName = theNewBtn.innerHTML
    // console.log("Is there an error")
    // // weatherApiKey = "0f272bc818897878df309b4b56d1f500"
    // link = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&appid=' + weatherApiKey
    // // getApi(link)
    // console.log("Is this working")
    // forecast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + weatherApiKey
    // console.log("THIS IS THE LAST CHECK")
    // getApi(link)
    // getForecast(forecast)
}
//TODO:
//The problem is that it is saving the event for the whole div, and the for each individual button
//I need to create a log to handle the each smaller buttons grab its value 
    // historyBtn.addEventListener('click', searchCity)
    // document.addEventListener('DOMContentLoaded', function(){
    //     theNewBtn.addEventListener('click', searchCity)
    // })
// let cityBtn = document.querySelector('.blue')

// cityBtn.addEventListener('click', searchCity)

// function searchCity(event){
//     event.preventDefault()
//    console.log("Good")
// }

// console.log(myName)



function getCityName(city){
    return city
}