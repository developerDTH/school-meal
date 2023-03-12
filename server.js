const express = require('express')
const {Meal} = require("./public/js/mealapi")

const app = express()
const PORT = 3000
app.get('/', function (req, res) {
  res.send()
})
app.get("/api/:schoolName/:region/:grade/:date", async (req, res) => {
  // let data=mealapi.schoolMeal(req.params.schoolName,req.params.region,req.params.grade,req.params.date);
  const data = await Meal(req.params.schoolName,req.params.region,req.params.grade,req.params.date)
  // console.log(req.params.schoolName,req.params.region,req.params.grade,req.params.date)
  res.send(data);
});
// app.get("/:schoolName/:region/:grade/:date/:day", async (req, res) => {
//   // let data=mealapi.schoolMeal(req.params.schoolName,req.params.region,req.params.grade,req.params.date);
//   const data = await dateMeal(req.params.schoolName,req.params.region,req.params.grade,req.params.date,req.params.day  )
//   res.send(data);
// });

app.listen(PORT,()=>{
    console.log("server start")
})
