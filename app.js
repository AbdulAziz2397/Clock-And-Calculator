



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
    
    if(hours >= 12){
        ampm.innerText = 'PM';
        if(hours > 12){
            hours = hours - 12;
        }
    }
    else{
        ampm.innerText = 'AM';
    }
    
    hr.innerText = String(hours);
    min.innerText = String(minutes).padStart(2, '0');
    sec.innerText = String(seconds).padStart(2, '0');
    month.innerText = months[clock.getMonth()];
    day.innerText = days[clock.getDay()];
    year.innerText = years;
    date.innerText = dates;
    
    if(seconds.length < 2){
        sec.innerText = String("0") + seconds;
    }
}, 1000);

function rotateScreen (){
    var myClock = document.getElementById('myclock');
    if(myClock.style.transform === 'rotate(90deg)'){
        myClock.style.transform = 'rotate(0deg)'
    }
    else{
        myClock.style.transform = 'rotate(90deg)';
    }
}