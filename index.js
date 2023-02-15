const express = require('express')
const questions = require('./data/question')
const cors = require('cors')

const app = express()


port = process.env.PORT || 3000


app.use(cors())

app.listen(port)


app.get('/', (req , res)=>{
    res.send('Api is running')
})

app.get('/api/questions', (req , res)=>{
    res.send(questions)
})

app.get('/api/questions/key=123/:id', (req , res)=>{


    const question = questions.find((q) => String(q.id) === req.params.id)

    res.send(question)
    // console.log(question)
})




console.log('server is running on port ' + port);