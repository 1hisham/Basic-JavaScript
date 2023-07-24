const birthDay = "2023-01-20";
// "2001-01-07", "2000-02-27", "1998-01-29"
//holiday includes second saturday , sandays
const holidays = [
  "2023-01-02",
  "2023-01-03",
  "2023-01-04",
  "2023-01-05",
  "2023-01-06",
  "2023-01-07",
  "2023-01-08",
  // "2023-01-09",
  "2023-01-10",
  // "2023-01-11",
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
  // "2023-01-27",
  "2023-01-28",
  "2023-01-29",
  "2023-01-30",
  "2023-01-31",
  "2023-02-05",
  "2023-02-04",
  "2023-02-02",
  "2023-02-03",

];
function setingTolastDayOfWeek(birthday, holidays) {
 let date = new Date(birthday)
 let birthDay = new Date(date.setDate(date.getDate())).toISOString().slice(0,10)
 let suitableday = new Date(date.setDate(date.getDate())).toISOString().slice(0,10)
 let toVaildDate = new Date(suitableday)
 let toVaildDateDay = toVaildDate.getDay()
 let i = 0
 if( toVaildDateDay == 0){
   suitableday = new Date(date.setDate(date.getDate()+ (6))).toISOString().slice(0,10)
 }else{
   suitableday = new Date(date.setDate(date.getDate()+ (6-toVaildDateDay))).toISOString().slice(0,10)
 }
 while(i < holidays.length){ 
 let day = new Date(suitableday) 
 let dateDay = day.getDay()
  if(suitableday < birthDay){
    suitableday = new Date(date.setDate(date.getDate()+ (6-dateDay)+7)).toISOString().slice(0,10)
  }
  if(dateDay == 0){
    suitableday = new Date(date.setDate(date.getDate()+ 13)).toISOString().slice(0,10)
  }
  if(suitableday == holidays[i]){
    suitableday = new Date(date.setDate(date.getDate()- 1)).toISOString().slice(0,10);
    i=0
  }
i++
}
console.log(suitableday);
}
setingTolastDayOfWeek(birthDay, holidays) 

