class OpenWeather {

    constructor(){
        this.apikey = '65f019d63f800d2386ae770891bfbde5';
    }

   async search(cityName){
        //Example:
        //https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apikey}`);

        const results = await response.json();

        return results;
        
    }

}