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

class Ui{
  constructor(){
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('humidity')
    this.dewpoint = document.getElementById('dewpoint')
    this.feelLike = document.getElementById('feel-like')
    this.wind = document.getElementById('wind')
  }

  paint(res){
    this.location.textContent = res.name
    this.desc.textContent = `${res.weather[0].description}`
    this.dewpoint.textContent = `Temperature : ${res.main.temp} F`
    this.humidity.textContent = `Humidity : ${res.main.humidity}`
    this.feelLike.textContent = `Feels-Like : ${res.main.feels_like} F`
    this.wind.textContent = `Degree : ${res.wind.deg} & Speed : ${res.wind.speed} mph`  
    if (this.desc.textContent.includes('rain')) {
      this.icon.setAttribute('src', 'img/cloud-rain-solid.svg')
    } else if(this.desc.textContent.includes('sun')){
      this.icon.setAttribute('src', 'img/sun-regular.svg')
    } else{
      this.icon.setAttribute('src', 'img/cloud-solid.svg')
    }
  }
}
// INSTANTIATE NEW CITY
const weather = new Weather('boston')
const ui = new Ui()

function generateWeather() {
  weather.getWeather() 
    .then(response => {
      console.log(response.main.humidity)      
      ui.paint(response)
    })
    .catch(err => console.log(err))
}
// LOAD WEATHER CONDITIONS ON DOM-LOAD
document.addEventListener('DOMContentLoaded', generateWeather)