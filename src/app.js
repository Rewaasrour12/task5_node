const express = require('express')
    const app = express()
    const port = process.env.PORT || 3000
    const path = require ("path")
    const x =  path.join(__dirname , '../public')
    app.use (express.static (x))
    app.set('view engine', 'hbs');
      const viewsDirectory = path.join (__dirname , "../our_temp/views" )
      app.set( "views" , viewsDirectory)
      //////////////////////////////////////////////////////////////////
      var hbs = require ('hbs')
      const partialsPath = path.join (__dirname , "../our_temp/partials")
      hbs.registerPartials(partialsPath)
      //////////////////////////////////////////////////////////////

app.get('/' , (req , res) => {
  res.render('index' , {
      // title: "HOME",
      // desc : "this is home page"
  })
})
  app.get('/weather', (req, res) =>{
    res.render('weather',{
      // title:'weather'
    })
  ////////////////////////////////////////////////////////////////////////////
  const geocode = require('./tools/geocode')
  const forecast = require('./tools/forecastFile')
  app.get('/handleweather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide address'
        })
    }
      geocode(req.query.address,(error,data)=>{
          if(error){
              return res.send({error})
              //  res.send({error})
          }
          forecast(data.latitude,data.longitude,(error,forecastData)=>{
              if(error){
                  return res.send({error})
                  //  res.send({error})
              }
               res.send({
                  forecast:forecastData,
                  location:req.query.address,
                  latitude:data.latitude,
                  longitude:data.longitude

              })
              // res.json(forecastData)
      })
  })
  })
  /////////////////////////////////////////////////////////////////////////////
  
    app.get('*' , (req , res)=> {
       res.send('404 Page Not Founded')
    })
  })
  ///////////////////////////////////////////////////////////////////////////
    
    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })

// console.log(form)
