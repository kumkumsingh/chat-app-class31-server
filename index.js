const express =require('express')
const streamRouter = require('./stream/router')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

const jsonParser = bodyParser.json()
app.use(cors())
app.use(jsonParser)
app.listen(port,() => console.log('serverr running on port',port))
app.get('/',(request,response) => {

    console.log("get an request on /")
    response.status(200)
    response.send("hello world!")

})

app.use(streamRouter)