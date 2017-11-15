const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();


const counter = {
  count: 0
}
app.get('api/counter', (req,res) => {
  res.json(counter);
  res.end();
})
app.get('api/counter/increment', (req,res) => {
  ++counter.count;
  res.end();
})
app.get('api/counter/decrement', (req,res) => {
  --counter.count;
  res.end();
})

app.listen(PORT, () => {
  console.log(`server is listening to port:${PORT}`)
})