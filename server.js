const express = require('express')
const {Meal} = require("./public/js/mealapi")

const app = express()
const PORT = 3000
app.get('/', function (req, res) {
  res.send()
})
app.get("/:schoolName/:region/:grade/:date", async (req, res) => {
  // let data=mealapi.schoolMeal(req.params.schoolName,req.params.region,req.params.grade,req.params.date);
  let data = await Meal(req.params.schoolName,req.params.region,req.params.grade,req.params.date)
  res.send(data);
});

app.listen(PORT,()=>{
    console.log("server start")
})
