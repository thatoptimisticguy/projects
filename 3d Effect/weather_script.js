window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperature = document.querySelector('.temperature-degree');
    let temperaturespan = document.querySelector('.temperature span');
    let degreeSection = document.querySelector('.degree-section');
    let locationTimezone = document.querySelector('.location-timezone');
    let visibility = document.querySelector('.visibility'); 

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=2000754b284c9f426c07d9bf018421c4&units=metric&${lat},${long}`;
            fetch(api)
                .then(Response => {
                    return Response.json();
                })
                .then(data=>{
                    console.log(data);
                    const {temp, feels_like} = data.main;
                    console.log(data.main.temp + ' ' + data.main.feels_like);
                    temperature.textContent = temp; 
                    temperatureDescription.textContent = 'There seems to be some '+ data.weather[0].description; 
                    locationTimezone.textContent=data.name;  
                    visibility.textContent = 'The visibility seems to be ' + data.visibility + ' meters';
                //Formula for fahrenheit
                    let fahrenheit = [(temp * 9)/5 +32];

                //change temperature from celsius to fahrenheit
                    degreeSection.addEventListener("click", ()=>{
                            if(temperaturespan.textContent === 'C'){
                                temperaturespan.textContent ='F';
                                temperature.textContent = Math.floor(fahrenheit); 
                            } else {
                                temperaturespan.textContent = 'C';
                                temperature.textContent = temp; 
                                console.log('temperature is now '+ temp);
                            }
                    });
                })

                const api_aqi = `https://api.waqi.info/feed/delhi/?token=02db0ca7edd40f8638d3adb8274d4cdcb73335c0`;
                fetch(api_aqi)
                    .then(Response => {
                        return Response.json(); 
                    })
                    .then(a => {
                        console.log(a);
                        console.log(a.data.city.name);
                        console.log(a.data.aqi);
                        document.querySelector('.aqi').textContent = 'The AQI levels in ' + a.data.city.name + ' at the moment is ' + a.data.aqi; 
                    })

        });



    }
});