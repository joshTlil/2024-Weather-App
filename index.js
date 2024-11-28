let weatherApiKey = "0f272bc818897878df309b4b56d1f500"
let cityName = "Atlanta"
let link = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&appid=' + weatherApiKey
let searchForm = document.querySelector('.searchBar');
let iconDisplay = document.querySelector('#icon');
let locationIcon = document.querySelector('weatherIcon')
let number = 23

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
        console.log(data.weather[0])
        console.log(data.weather[0].description)
        // getElement('icon').attr = data.weather[0].icon;
        let iconCode = data.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        console.log(number)
        iconDisplay.setAttribute('src', iconUrl)
       
    });
}

getApi(link)
