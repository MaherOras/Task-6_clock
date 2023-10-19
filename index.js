var now= new Date();
var sec="";
var mins="";
var hrs="";
stoppage=false;
screenV="";
var pm_am="";

now= new Date();
// pm=now.getUTCSeconds
// console.log(pm)
setInterval(()=>{
               
                if(!stoppage){ 
                             now= new Date();
                             //sec=now.getSeconds()
                             //console.log(sec)
                             sec=formatter(now.getSeconds()) ;
                             mins=formatter(now.getMinutes()) ;
                             hrs=now.getHours()
                             if(hrs>12){hrs-=12;pm_am="pm"}else{pm_am="am";if(hrs==0){hrs=12}}
                             hrs=formatter(hrs) ;
                             screenV= hrs +  ":" + mins + ":" + sec + " " + pm_am
                             document.querySelector("#screen").innerHTML=screenV;
                             
                             }
                },1000);

function change()
  {
    stoppage=!stoppage;
    if(document.querySelector("#changeBtn").innerHTML=="STOP")
            {document.querySelector("#changeBtn").innerHTML="START"}
    else
      {
        document.querySelector("#changeBtn").innerHTML="STOP"
      }
  }

  function formatter(num) {
    var txt="";
    if (num < 10) {txt= "0" + num}
    else{txt=num+""}
    return txt;
  }