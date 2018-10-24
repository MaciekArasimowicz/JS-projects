document.addEventListener('DOMContentLoaded',()=>{

    const handMins = document.querySelector('.hand-min')
    const handHours = document.querySelector('.hand-hours')
    const handSecs = document.querySelector('.hand-sec')

    
    function showTime(){
        const now = new Date;
        seconds = now.getSeconds();
        hours= now.getHours();
        minutes= now.getMinutes();


        secondDegrees = (seconds/60)*360 + 90
        minutesDegrees = (minutes/60)*360 + 90
        hoursDegrees = (hours/12)*360 + 90

        handMins.style.transform = `rotate(${secondDegrees}deg)`
        handHours.style.transform = `rotate(${hoursDegrees}deg)`
        handSecs.style.transform = `rotate(${minutesDegrees}deg)`
    }

    setInterval(showTime,1000);


})

/* ewentualne obliczenia wykonujemy poza css, a manipulując css używamy jedynie zmiennej */