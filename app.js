
setInterval( function(){
    var clock = new Date();
    
    var hr = document.getElementById("hr");
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    
    var hours = clock.getHours();
    var minutes = clock.getMinutes();
    var seconds = clock.getSeconds();
    
    hr.innerText = hours;
    min.innerText = minutes;
    sec.innerText = seconds;
    
}, 0000)