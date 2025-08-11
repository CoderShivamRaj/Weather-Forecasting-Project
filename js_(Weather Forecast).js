
button = document.querySelector("button");

button.addEventListener("click",async ()=>{

   
    
    let weatherData = await getWeather();
    console.log(weatherData);

    //if city entered is not right...
    if(weatherData.cod === "404"){
        console.log("Wrong City Entered");
        alert("City not found!! Please enter a valid city name");
        
    }



    // Extract Info......
    let h2 = document.querySelector("h2");
    h2.innerText = city;

    let temp = document.querySelector("#temp");
    temp.textContent= weatherData.main.temp;

    let humidity = document.querySelector("#humidity");
    humidity.textContent = weatherData.main.humidity;

    let wind = document.querySelector("#wind-speed");
    wind.textContent = weatherData.wind.speed;

    description = document.querySelector("#description");
    description.innerText = weatherData.weather[0].description;

    icon = weatherData.weather[0].icon;

    img = document.querySelector("img");
    img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    press = document.querySelector("#pressure");
    press.textContent = weatherData.main.pressure;

    country = document.querySelector("#country");
    country.textContent = weatherData.sys.country;

    feels = document.querySelector("#feels-like");
    feels.textContent = weatherData.main.feels_like;


    // Adding Animation to background when weather changes..

    let weatherMain = weatherData.weather[0].main;
    console.log(weatherMain);

    //Remove all the weather classes first
     
    let body = document.querySelector("body");
   body.classList.remove("clear","clouds","rain","snow");

    // Adding class According to the weather

    if(weatherMain.includes("Clouds")){
        body.classList.add("clouds");
    }
    else if (weatherMain.includes("Rain")) {
        body.classList.add("rain");
    }
    else if(weatherMain.includes("Clear")){
        body.classList.add("clear");
    }
    else if(weatherMain.includes("Snow")){
        body.classList.add("snow");
    }


});
     
     
    
async function getWeather(){

    const appid ="a7be23c615d06c35702f980d11aa52ca";
    input =document.querySelector("input");
    city = input.value;
    



    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`;

    if(city === ""){
        alert("Please enter a city name");
    }

    try{
        let info = await fetch(url);
        console.log(info);

    

       let data = await info.json();
       return data;



    }
    
    catch(error){
     alert ("No data found");
    }
 
}

      

    

    





 
       


        
    


