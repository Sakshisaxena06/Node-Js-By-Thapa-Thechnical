import readline from "readline";

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout

})

const apikey='1284aef5c78c4d0b364775b5a545220a';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather'

   const city =  rl.question("Enter the city name :" , async (city) => {
         console.log("Weather Information :");
         const url = `${baseUrl}?q=${city}&appid=${apikey}`;
 
try {
    const respone = await fetch(url);
    const data = await respone.json();
    console.log(data);
    
    console.log("City : ", data.name);
    console.log("Temperature : ", data.main.temp);
    console.log("Humidity :  ", data.main.humidity);
    console.log("Description : ", data.weather[0].description);
    console.log("Wind Speed : ", data.wind.speed);
    rl.close();
    

} catch (error) {
    console.log(error.message);
    
}
});



    
