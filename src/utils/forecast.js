const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
//
//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }


function forecast(location,callback){
    const url ='https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=bcc0e63e2c592e543506422fcdf50cda'
    request({url,json:true},(error,respond)=>{
        if(error){
            callback('check you network',undefined)
        }
       else if(respond.body.cod==='404'){
            callback('un able to find location',undefined)
        }
        else {
            callback(undefined,respond.body.main.temp)
        }

    })
}
// forecast('nairobi',(error,response)=>{
//     if(error){
//         console.log(error)
//     }
//     else {
//         console.log(response)
//     }
//
// })
module.exports = forecast