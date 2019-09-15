<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

$(document).ready(function(){
  
  setInterval(function(){

    var d = new Date();    
    var co = 360 / 60;
    var graus_seconds = co * d.getSeconds() + (co * 15);
    
    $(".ponteiro-segundos").css({
      "transform": "rotate(" +graus_seconds+ "deg)"
    });
    
    var co = 360 / 60;
    var graus_seconds = co * (m = d.getMinutes()) + (co * 15);
    
    $(".ponteiro-minutos").css({
      "transform": "rotate(" +graus_seconds+ "deg)"
    });    

    var co = 360 / 12;
    var graus_seconds = co * ( h = d.getHours()) + (co * 3);
    
    $(".ponteiro-horas").css({
      "transform": "rotate(" +graus_seconds+ "deg)"
    });    
    
  }, 500); // um pouco menos de um segundo
  
});