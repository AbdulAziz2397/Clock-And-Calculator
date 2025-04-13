



setInterval( function(){
    var clock = new Date();

    var hr = document.getElementById("hr");
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    var month = document.getElementById("month");
    var day = document.getElementById("day");
    var year = document.getElementById("year");
    var date = document.getElementById("date");
    var ampm = document.getElementById("ampm");

    var hours = clock.getHours();
    var minutes = clock.getMinutes();
    var seconds = clock.getSeconds();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var days = ['Sunday,', 'Monday,', 'Tuesday,', 'Wednesday,', 'Thursday,', 'Friday,', 'Saturday,'];
    var years = clock.getFullYear();
    var dates = clock.getDate();
    
    if(hours > 11){
        ampm.innerText = 'PM';
        hours = hours - 12;
    }

    hr.innerText = hours;
    min.innerText = minutes;
    sec.innerText = seconds;
    month.innerText = months[clock.getMonth()];
    day.innerText = days[clock.getDay()];
    year.innerText = years;
    date.innerText = dates;

}, 10);