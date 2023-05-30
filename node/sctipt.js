 
const app = require('express')();

const PORT = 8080;

app.listen(
  PORT,
  () =>console.log(`server running at prot ${PORT}`)
);
app.get('/fruit', (req,res) => {
  res.send("mango and bananan")
})