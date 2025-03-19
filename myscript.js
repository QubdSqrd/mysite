function time(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    document.getElementById("checker").innerHTML = "(JavaScript) The current time is " + h + ":" + m + ":" + s;
}

setInterval(time,1000);