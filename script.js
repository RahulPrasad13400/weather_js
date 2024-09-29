const apiKey = "535a8fd6e5041c6439e82ebb26e7ea48";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector('.inputSearch input')
        const searchBtn = document.querySelector('.inputSearch button')
        const rainIcon = document.querySelector('.rain-icon')
        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data = await response.json();

            console.log(data )
            
            
            document.querySelector('.city').innerHTML = data.name
            document.querySelector('.temp').innerHTML = data.main.temp + " °c"
            document.querySelector('.humidity').innerHTML = data.main.humidity + " %"
            document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr"

            if(data.weather[0].main == "Clouds"){
                rainIcon.src = "./images/clouds.png"
            }else if(data.weather[0].main == "clear"){
                rainIcon.src = "./images/clear.png"
            }else if(data.weather[0].main == "Rain"){
                rainIcon.src = "./images/rain.png"
            }else if(data.weather[0].main == "Drizzle"){
                rainIcon.src = "./images/drizzle.png"
            }else if(data.weather[0].main = "Mist"){
                rainIcon.src = "./images/mist.png"
            }

        }

        searchBtn.addEventListener('click',function(){
            console.log(searchBox.value)
            checkWeather(searchBox.value) 
    
        })
