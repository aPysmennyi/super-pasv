import express from 'express'
import bodyParser from 'body-parser'
import response from './responses.json'

function start(port) {
    const app = express()
    let server
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended:true}))
    
    app.post('/auth', async function (req,res) {
      const login = req.body.login
      const password = req.body.password
      if(login === process.env.LOGIN && password === process.env.PASSWORD)
          await res.status(200).send(response.auth.valid)
        else
          await res.status(404).send(response.auth.invalid)
    })
    app.delete('./config',async function (req,res) {
        await res.status(200).send({'message':"Data wiped out."})
    })
    before(async function () {
        server = await app.listen(port)
        console.log(`Mock server is running on port ${port}`)
    })
    after(function () {
        server.close()
    })
}

export { start }