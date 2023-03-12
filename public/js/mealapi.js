const School = require('school-kr');
const school = new School();
const Meal = async function (schoolname,schoolRegion,schoolGrade,mealDate) {
  // 학교 검색 및 첫 번째 결과의 학교 코드로 초기
    let result =  await school.search(School.Region[schoolRegion], schoolname);
    await school.init(School.Type[schoolGrade], School.Region[schoolRegion], result[0].schoolCode);
    const [year, month,date] = mealDate.split('-');
    const data = await school.getMeal(year,month);
    let meal = data;
    if (date != undefined){
      meal = data[date]
      // meal = meal.substr(5)
      meal = meal.split(" ");
      meal = meal[0] 
      return meal;
    }
    return meal;
}

module.exports = {Meal};
