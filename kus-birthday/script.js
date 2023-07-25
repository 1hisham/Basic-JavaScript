const birthDay = "2023-01-01";
// "2001-01-07", "2000-02-27", "1998-01-29"
//holiday includes second saturday , sandays
const holidays = [
  "2023-01-01",
  "2023-01-02",
  "2023-01-03",
  "2023-01-04",
  "2023-01-05",
  "2023-01-06",
  "2023-01-07",
  // "2023-01-08",
  "2023-01-09",
  "2023-01-10",
  "2023-01-11",
  "2023-01-12",
  "2023-01-13",
  "2023-01-14",
  // "2023-01-15",
  "2023-01-16",
  "2023-01-17",
  "2023-01-18",
  "2023-01-19",
  "2023-01-20",
  "2023-01-21",
  "2023-01-22",
  "2023-01-23",
  "2023-01-24",
  "2023-01-25",
  "2023-01-26",
  "2023-01-27",
  // "2023-01-28",
  // "2023-01-29",
  "2023-01-30",
  "2023-01-31",
  "2023-02-05",
  "2023-02-04",
  "2023-02-02",
  "2023-02-03",

];
function findSuitableDate(birthday, holidays) {
 let date = new Date(birthday)
 let birthDay = date.toISOString().slice(0,10)
 let suitableDate = birthDay
 let toVaildDay = date.getDay()
 if( toVaildDay == 0){
   suitableDate = new Date(date.setDate(date.getDate()+ (6))).toISOString().slice(0,10)
  }else{
    suitableDate = new Date(date.setDate(date.getDate()+ (6-toVaildDay))).toISOString().slice(0,10)
  }
let i = 0
 while(i < holidays.length){ 
 let suitableDateFormat = new Date(suitableDate) 
 let day = suitableDateFormat.getDay()
  if(suitableDate < birthDay){
    suitableDate = new Date(date.setDate(date.getDate()+ (6-day)+7)).toISOString().slice(0,10)
  }
  if(day == 1){
    suitableDate = new Date(date.setDate(date.getDate()+ 12)).toISOString().slice(0,10)
  }
  if(suitableDate == holidays[i]){
    suitableDate = new Date(date.setDate(date.getDate()- 1)).toISOString().slice(0,10);
    i=0
  }
i++
}
console.log(suitableDate);
}
findSuitableDate(birthDay, holidays) 

