//step 1 :define all your html static selectors
var cityEl = document.querySelector("#city")
var cityFormEl = document.querySelector("#city-form")
var cityHeaderEl = document.querySelector("#city-header")
var TempEl = document.querySelector("#temp")
var uviEl = document.querySelector("#uvi")
var cityHeaderCard1El = document.querySelector("#city-header-card-1")
var api = "43307f36c133c1b4d80feb3644b2ab3e"
//step2: make an addEventListener on Submit and create displayDashboard - it shows current weather and last five day

function displayWeather(event) {
    event.preventDefault()
    var cityName = cityEl.value
    var urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=imperial`


    fetch(urlCurrent)
        .then(function (response) {
            return response.json()
        })
        .then(function (currentData) {

            console.log(currentData)
            var fiveDayUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=${api}&units=imperial
            `
            fetch(fiveDayUrl)
            .then(function(response){
                return response.json()
            })
            .then(function(fiveData){
                console.log(fiveData)
                var currentDate= moment.unix(currentData.dt).format("MM/DD/YYYY")
                var iconImage=document.createElement("img")
                iconImage.setAttribute("src",`http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`)
                cityHeaderEl.innerHTML=  currentData.name + " "+ currentDate
                cityHeaderEl.appendChild(iconImage)
                var date1 = moment.unix(fiveData.daily[0].dt).format("MM/DD/YYYY")
                var date1Card= document.getElementById("dayDate1")
                var date2 = moment.unix(fiveData.daily[1].dt).format("MM/DD/YYYY")
                var date2Card= document.getElementById("dayDate2")
                var date3 = moment.unix(fiveData.daily[2].dt).format("MM/DD/YYYY")
                var date3Card= document.getElementById("dayDate3")
                var date4 = moment.unix(fiveData.daily[3].dt).format("MM/DD/YYYY")
                var date4Card= document.getElementById("dayDate4")
                var date5 = moment.unix(fiveData.daily[4].dt).format("MM/DD/YYYY")
                var date5Card= document.getElementById("dayDate5")
                date1Card.innerHTML = date1
                date2Card.innerHTML = date2
                date3Card.innerHTML = date3
                date4Card.innerHTML = date4
                date5Card.innerHTML = date5
                var text1 = "Temp: " + fiveData.daily[0].temp.day +" Wind: "+ fiveData.daily[0].wind_speed +" Humidity: "+ fiveData.daily[0].humidity +" UVI: "+ fiveData.daily[0].uvi
                var date1text = document.getElementById("day1text")
                var text2 = "Temp: " + fiveData.daily[1].temp.day +" Wind: "+ fiveData.daily[1].wind_speed +" Humidity: "+ fiveData.daily[1].humidity +" UVI: "+ fiveData.daily[1].uvi
                var date2text = document.getElementById("day2text")
                var text3 = "Temp: " + fiveData.daily[2].temp.day +" Wind: "+ fiveData.daily[2].wind_speed +" Humidity: "+ fiveData.daily[2].humidity +" UVI: "+ fiveData.daily[2].uvi
                var date3text = document.getElementById("day3text")
                var text4 = "Temp: " + fiveData.daily[3].temp.day +" Wind: "+ fiveData.daily[3].wind_speed +" Humidity: "+ fiveData.daily[3].humidity +" UVI: "+ fiveData.daily[3].uvi
                var date4text = document.getElementById("day4text")
                var text5 = "Temp: " + fiveData.daily[4].temp.day +" Wind: "+ fiveData.daily[4].wind_speed +" Humidity: "+ fiveData.daily[4].humidity +" UVI: "+ fiveData.daily[4].uvi
                var date5text = document.getElementById("day5text")
                date1text.innerHTML = text1
                date2text.innerHTML = text2
                date3text.innerHTML = text3
                date4text.innerHTML = text4
                date5text.innerHTML = text5

                
                TempEl.textContent=currentData.main.temp 
                 

            })
        })


}



cityFormEl.addEventListener("submit", displayWeather)






