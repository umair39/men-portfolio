const express = require ('express');
const cors =require('cors');
const dotenv = require('dotenv');
const path = require('path')
//dotenv
dotenv.config();

//reset express
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
//static

app.use(express.static(path.join(__dirname, './client/build')))
//routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoute'));
app.get('*', function(res,req){
    res.sendFile(path.join(__dirname, './client/build/index.html'))
} )
// app.get('/', (req, res)=>{
//     res.send('<h1>wellcome to Node server</h1>')
// })

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})
