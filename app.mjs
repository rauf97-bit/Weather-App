// INSTANTIATE LOCAL STORAGE
const localWeather = new MyStorage()

const weatherLocation = localWeather.getLocation()
// INSTANTIATE NEW CITY
const weather = new Weather('boston')
// INSTANTIATE WEATHER UI
const ui = new Ui()
// HANDLE MODAL
document.getElementById('w-btn').addEventListener('click', ()=>{
  const city = document.getElementById('city').value
  // const modal = document.getElementById('modal')
  // CHANGE CURRENT CITY
  weather.changeLocation(city)

  localWeather.setLocation(city)
  // GENERATE NEW UI
  generateWeather()

})

// GENERATE WEATHER VALUES
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