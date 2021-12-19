// CREATE WEATHER API CLASS CONSTRUCTOR
class Weather {
  constructor(city){
    this.city = city
    this.api = '4f157896538e5f6677e220c1e9079646'
  }
// FETCH API USING ASYNC AWAIT METHOD
  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.api}`)
    const responseData = await response.json()
    return responseData;
  }
  
  // CHANGE CURRNT LOCATION
  changeLocation(city){
    this.city = city
  }

}

