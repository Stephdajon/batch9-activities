//date
let tDcontainer = document.getElementById('timeDateContainer');
function displayTime() {
    var today = new Date();
    var year = today.getFullYear();
  
    var day = today.getDay();
    var month = today.getMonth();
    var daym = today.getDate();
    var dayArray = new Array("Sunday, ","Monday, ","Tuesday, ","Wednesday, ","Thursday, ","Friday, ","Saturday, ");
    var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","Novermber","December");
    var monthDate = document.getElementById('dateDisplay');
    monthDate.textContent = dayArray[day] + monthArray[month] + " " + daym + ", " + year;
    monthDate.innerText = dayArray[day] + monthArray[month] + " " + daym + ", " + year;


//date end

//time

var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
   
    if(hours < 10){
        hours = '0' + hours;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = '0' + seconds;
    }


    var myClock = document.getElementById('clockDisplay');
    myClock.textContent = "" + hours + ":" + minutes + ":" + seconds;
    myClock.innerText = "" + hours + ":" + minutes + ":" + seconds;

    

    setTimeout('displayTime()', 1000);
}
displayTime();


//time end

