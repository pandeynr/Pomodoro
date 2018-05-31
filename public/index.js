let id; // global declaration for interval id

function getTime(){
  let currentDate = new Date();
  let time = currentDate.toLocaleTimeString();
  $(".currentTime").html(time);
}

function countDown(){
  let str = $(".timer").html();
  let min = $(".timer").html().match(/^\d+/)[0];
  min = parseInt(min);
  let sec = $(".timer").html().match(/\d+$/)[0];
     sec = parseInt(sec);
  if(sec==0){
    min -=1;
  }   
  sec -=1;
 
  if (sec == -1){
    sec = 59;
  }
  if (sec <10){
    sec = "0" + sec;
  }
  
  $(".timer").html(min + ":" + sec);
  $("body")
}

setInterval(function(){getTime();},1000);

$(".start").click(function(){
  if (!id){
    $(".min").css("transition","visibility 0.5s ease-out 1.5s, color 2s ease-out");
    id = setInterval(countDown, 1000);
    $(".start").html("STOP");
    $('.min').css("visibility", "hidden");
    $('.min').css("color","white");
    $(".inputs").css("background","white");
    let str = $(".timer").html();
  let min = $(".timer").html().match(/^\d+/)[0];
  min = parseInt(min) * 60;
  let sec = $(".timer").html().match(/\d+$/)[0];
     sec = parseInt(sec);
    let time = min + sec;
  $(".pomodoro").css("transition","background " + time +"s ease-in");
    $(".pomodoro").css("background","red");
  }
  else{
    clearInterval(id);
    id = null;
    $(".min").css("transition","visibility 1.25s ease-out, color 2s ease-out")
    $(".start").html("START");
  $('.min').css("color","rgb(137,207,240)");
   $('.min').css("visibility", "visible");   $(".inputs").css("background","rgb(137,207,240)");
  }
})

$(".plus1").click(function(){
   let str = $(".timer").html();
  let min = $(".timer").html().match(/^\d+/)[0];
  min = parseInt(min);
  min += 1;
  $(".timer").html(str.replace(/^\d+/, min));
});

$(".minus1").click(function(){
   let str = $(".timer").html();
  let min = $(".timer").html().match(/^\d+/)[0];
  min = parseInt(min);
  min -= 1;
  $(".timer").html(str.replace(/^\d+/, min));
});