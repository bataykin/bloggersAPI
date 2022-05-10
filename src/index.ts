import express = require('express')
import {bloggersRouter} from "./routes/bloggersRouter";
import {postsRouter} from "./routes/postsRouter";
import bodyParser from "body-parser";
const app = express()
const port = process.env.PORT || 3000
const { body, validationResult } = require('express-validator');


app.use(bodyParser.json())
app.use('/bloggers', bloggersRouter)
app.use('/posts', postsRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

