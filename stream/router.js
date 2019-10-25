const { Router } = require('express')
const Chatroom = require('./model')
const Sse = require('json-sse')
const router = new Router()
const stream = new Sse()
router.get('/stream', async(request, response) => {
    console.log("got a request on /stream")
    // response.status(200)
    // response.send("it works")
    // here i want start my stream
    //but I dont have anything to stream
    const messages = await Chatroom.findAll()
    console.log("message in db :",messages)
    const data = JSON.stringify(messages)
    console.log("stringified message",data)
     stream.updateInit(data) // here i put the data in the stream
     stream.init(request,response) //this is important !!!
})

router.post('/message', async(request, response) => {

    console.log("got a request on /message",request.body)
    const { message } = request.body
    const entity = await Chatroom.create({
     message
     //message
    })
    const messages = await Chatroom.findAll()
    const data = JSON.stringify(messages)
    stream.send(data)// is the connection between get request and post request.. // update the stream
    response.status(201)
    response.send("Thanks for your message")
})
module.exports = router