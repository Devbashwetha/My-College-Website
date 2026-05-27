let timeElement=document.getElementById("time")
let dateElement=document.getElementById("date")
let button = document.getElementById("toggle-btn")
let ti=true;
function updateTime(){
    const now = new Date()
    hours= now.getHours()
    minutes= now.getMinutes()
    seconds= now.getSeconds()
    
    day= now.getDate()
    month = now.getMonth()+1
    year= now.getFullYear()

    minutes= String(minutes).padStart(2,"0");
    seconds= String(seconds).padStart(2,"0");
let time = timeElement.innerText=hours+":"+minutes+":"+seconds;
let data= dateElement.innerText=day+"-"+month+"-"+year;

    
// let ti=true;
if(ti){
    time = hours+":"+minutes+":"+seconds
        timeElement.textContent= time}
    else{
    time=
    now.toLocaleTimeString("en-IN", { 
    hour: "numeric",  
    minute: "numeric",     
    second: "numeric",   
    hour12: true   
    });
    timeElement.textContent= time
}
}

button.addEventListener("click",()=>{
    ti = !ti 
    button.textContent =  ti ? "Switch to 12-hour" : "Switch to 24-hour";
    updateTime()
 })



setInterval(updateTime,1000);

