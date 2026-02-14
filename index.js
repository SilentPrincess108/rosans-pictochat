let date = new Date();

dateFull = document.getElementById("day");
time = document.getElementById("time");

days = ["Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."];
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

dateFull.innerText = days[date.getDay()] + " " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
time.innerText = date.getHours() + ":" + date.getMinutes();