
document.getElementById('city').addEventListener('submit', function(event){
    event.preventDefault(); 
    
    const cityInput = document.getElementById('city-input').value; 
    const apiKey = '0de86c07d73b386b77248d3f7e9e1b34';  
    
    const geoApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;  

   
    fetch(geoApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
          
            const cityName = data.name;
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;

            
            document.getElementById('city-name').innerText = `City: ${cityName}`;
            document.getElementById('temperature').innerText = `Temperature: ${temp} °C`;
            document.getElementById('description').innerText = `Description: ${description}`;
            document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
        })
        .catch(error => {
            
            alert(error.message);
        });
});