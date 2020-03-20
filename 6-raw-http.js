const https=require('https')
const url='http://api.weatherstack.com/current?access_key=14cfbf2c0d5e0c7f3053b8850799abd3&query=17.36667,78.46667'
const request=https.request(url,(response)=>{
    
    let data=''
    response.on('data',(chunk)=>{
        console.log(chunk)
    })
    response.on('end',()=>{

    })
})

request.end()

