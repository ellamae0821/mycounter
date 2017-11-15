const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


const counter = {
 count: 0
}

app.use(express.static(__dirname + '/public'))

app.get('/api/counter', (req,res)=>{
 res.json(counter);
})
app.get('/api/counter/inc', (req,res)=>{
 ++counter.count;
 res.end();
})
app.get('/api/counter/dec', (req,res)=>{
 --counter.count;
 res.end();
})

app.get('*', (req, res) =>{
 res.redirect('/api/counter');
})

app.listen(PORT, () => {
  console.log(`server is listening to port:${PORT}`)
})