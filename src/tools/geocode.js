
const request = require ('request')

const geocode = (address , callback) => {
    const geocodeUrl= 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoicmV3YWEiLCJhIjoiY2xranR4aThtMDI5bTNrcG94aGQzMTJwbCJ9.EKmEE1JGmwH5VX9V6EwlTg'
    request ({url : geocodeUrl , json : true} , (error , response) => {
        if (error) {
            callback ("Unable to connect the geocode Service" , undefined)
        }
            else if (response.body.message) 
            callback (response.body.message , undefined)

            
        else if (response.body.features.length == 0){
             callback ("Unable to find this address"  , undefined)
        } 
        else {
            callback (undefined , {
                longitude  :  response.body.features[0].center[0] ,
                latitude : response.body.features[0].center[1]
                // latitude : response.body.features[0].center[1] +'is the Latitude of : ' +address

            } )
        }
    } )
    }
    module.exports = geocode;




///////////////////////////////////////////////////////////////////////////







