var daysOfWeek=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
var maleNames=[
    "kwasi",
    "kwadwo",
    "kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
];
var femaleNames=[
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
];

//calling functions
function getName() {
var year=parseInt(document.getElementById("Year").value);
var month =parseInt(document.getElementById("Month").value);
var day=parseInt(document.getElementById("Date").value);
var male = document.getElementById("male");
var female = document.getElementById("female");


//validation
if(day<=0||day>31){
alert("Please enter the correct date");
}
else if(month<0||month>12 ||month==2 &&day>29){
alert("Please enter the correct month");
}
var day = new Date(year + "/" + month + "/" + day);
var birthDay=day.getDay();
if(male.checked==true){
   alert("You were born on " +daysOfWeek[birthDay])
   alert(" and your akan name is " + maleNames[birthDay])
}
else 
   alert("You were born on " +daysOfWeek[birthDay])
   alert(" and your akan name is " + femaleNames[birthDay])

}