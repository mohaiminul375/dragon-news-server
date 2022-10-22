const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const categories = require('./Data/Categorys.json');
app.use(cors());
app.get('/',(req,res)=>{
res.send('news api running')
})
app.get('/news-categorys',(req,res)=>{
    res.send(categories)
})

app.listen(port,()=>{
    console.log('dragon news server running on por', port)
})