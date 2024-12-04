document.getElementById('weather-form').addEventListener('submit',
    function(event){
        event.preventDefault();
        const city=document.getElementById('city').value;
        const apikey='0de86c07d73b386b77248d3f7e9e1b34';

        // step1:Get latitude and longitude using  OpenWeatherMap Geocoding API
        const geoApiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(geoApiUrl)
        .then(response=>{
            if(!response.ok){
                throw new Error('city not found')
            }
            return response.json();
        })
        .than(data=>{
            const lat=data.coord.lat;
            const lon=data.coord.lon;

            const weatherApiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            return fetch(weatherApiUrl);
        })
        .then(response=>response.json())
        .then(data => {
          
            const cityName = data.name;
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;

            
            document.getElementById('city-name').textContent = `Weather in: ${cityName}`;
            document.getElementById('temperature').textContent = `Temperature: ${temp} °C`;
            document.getElementById('description').textContent = 
            `Description: ${description}`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
        })
        .catch(error => {
            console.log('Error',error)
            alert('City not found or invalid API call');
        });

    })