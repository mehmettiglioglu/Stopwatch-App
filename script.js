let sec=document.querySelector("#sec");
let min=document.querySelector("#min");
let hour=document.querySelector("#hours")

let start=document.querySelector("#start");
let pause=document.querySelector("#pause");
let reset=document.querySelector("#reset");
let bring=document.querySelector("#bring")

let second=0;
let minute=0;
let hours=0;
let interval=null;

start.addEventListener("click",()=>{
   if(interval!==null){
    clearInterval(interval)
   }
  interval=setInterval(() => {
        second++;
        if(second<10)
        {
            sec.innerHTML="0"+second;
        }
        else
        {
            sec.innerHTML=second;
        }
        if(second==60)
        {
            second=0;
            minute++;
            min.innerHTML=minute<10? "0"+minute : minute;
            if(minute==60)
            {
                minute=0;
                hours++
                hour.innerHTML=hours<10?"0"+hours :hours;
            }
            
        }
        
   document.title=`${hours<10?"0"+hours:hours}:${minute<10?"0"+minute:minute}:${second<10?"0"+second:second}`
   
    }, 10);
})

pause.addEventListener("click",()=>{
    clearInterval(interval)

    localStorage.setItem("second",JSON.parse(second));
    localStorage.setItem("minute",JSON.parse(minute));
    localStorage.setItem("hour",JSON.parse(hours));
})

reset.addEventListener("click",()=>{
    clearInterval(interval)
    localStorage.setItem("second",JSON.parse(second));
    localStorage.setItem("minute",JSON.parse(minute));
    localStorage.setItem("hour",JSON.parse(hours));
    
    second=0;
    minute=0;
    hour=0;

    sec.innerHTML="00";
    min.innerHTML="00";
    hour.innerHTML="00"
})

bring.addEventListener("click",()=>{
    second=localStorage.getItem("second");
    minute=localStorage.getItem("minute");
    hours=localStorage.getItem("hour");

    sec.innerHTML=second<10?"0"+second:second;
    min.innerHTML=minute<10?"0"+minute:minute;
    hour.innerHTML=hours<10?"0"+hours:hours;

})
