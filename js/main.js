

function coundown(){
    const days = document.getElementById('days');
    const hours  = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds')
    // for get second , minutes  , hourse , day 
    const weedingDate = new Date('10 october 2025')
    const currentDate = new Date() 
    const totalSecond = Math.floor((weedingDate-currentDate)/1000);
    const totalMinutes =Math.floor(totalSecond/60)
    const totalHours = Math.floor(totalMinutes/60)
    const totalDay = Math.floor(totalHours/24)
    // for output 
    days.innerHTML = totalDay;
    hours.innerHTML = totalHours;
    minutes.innerHTML = totalMinutes;
    seconds.innerHTML = totalSecond;
}
setInterval(coundown , 1000)