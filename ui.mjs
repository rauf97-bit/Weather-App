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
