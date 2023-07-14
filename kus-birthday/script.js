const birthDays =[
       "1999-01-03",
       "2001-01-05",
       "2000-01-10",
       "1998-01-21",
]
//holiday includes second saturday , sandays
const holidays = [
    "2023-01-07" ,
    "2023-01-10" ,
    "2023-01-13" ,
    "2023-01-14" ,
    "2023-01-18" ,
    "2023-01-19" ,
    "2023-01-20" ,
    "2023-01-21" ,
    "2023-01-28" 
]

function checkBirthdayOnHoliday(birthdays, holidays){
  birthdays.forEach((item) => {
  let dayInThisYear = `2023-${item.slice(5,11)}`
  let date = new Date(dayInThisYear)
  let year = date.getFullYear()  
  let month = date.getMonth()
  let daysInMonths = daysInMonth(month +1 ,year)
  let dayCount = date.getDay()
  holidays.forEach((holiday) => {
    console.log(dayInThisYear, holiday,"================",dayCount);
    console.log(dayInThisYear ==  holiday,"================");
    
  })
  console.log(dayCount);
   
   
 })

}
checkBirthdayOnHoliday(birthDays, holidays)
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}