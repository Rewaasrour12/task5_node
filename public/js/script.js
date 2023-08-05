// const forecast = require("../../src/tools/forecastFile");

let form = document.getElementById('form1');
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    weatherFunction()
    form.reset()
})
let errorF = document.getElementById('error')
let locationF = document.getElementById('location')
let forecastF = document.getElementById('forecast')
let longitudeF = document.getElementById('longitude')
let latitudeF = document.getElementById('latitude')
// async --> function return promise
let weatherFunction = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/handleweather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = data.error
            locationF.innerText =""
            forecastF.innerText =""
            longitudeF.innerText =""
            latitudeF.innerText =""
        }
        else {
            setTimeout(() => {
                locationF.innerText = "The Country is : " + data.location
            }, "500");
            setTimeout(() => {
                longitudeF.innerText = "The longitude is : " + data.longitude
            }, "1000");
            setTimeout(() => {
                latitudeF.innerText = "The Latitude is : " + data.latitude
            }, "1500");
            setTimeout(() => {
                forecastF.innerText = "Thw Weather is : " + data.forecast
            }, "2000");
            errorF.innerText =""
        }
    }
    catch(e){
        console.log(e)
    }
}
// console.log(form)
