function showwhatwedo(){
    $("#whatwedo_container").css("display","inherit");
    $("#whatwedo_container").addClass("animated slideInDown");
    setTimeout(function(){
        $("#whatwedo_container").removeClass("animated slideInDown");
    },800);
}
function closewhatwedo(){
    $("#whatwedo_container").addClass("animated slideOutUp");
    setTimeout(function(){
        $("#whatwedo_container").removeClass("animated slideOutUp");
        $("#whatwedo_container").css("display","none");
    },800);
}
function showwhoweare(){
    $("#whoweare_container").css("display","inherit");
    $("#whoweare_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#whoweare_container").removeClass("animated slideInLeft");
    },800);
}
function closewhoweare(){
    $("#whoweare_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#whoweare_container").removeClass("animated slideOutLeft");
        $("#whoweare_container").css("display","none");
    },800);
}
function showmissionvision(){
    $("#missionvision_container").css("display","inherit");
    $("#missionvision_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#missionvision_container").removeClass("animated slideInRight");
    },800);
}
function closemissionvision(){
    $("#missionvision_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#missionvision_container").removeClass("animated slideOutRight");
        $("#missionvision_container").css("display","none");
    },800);
}
function showgetinvolved(){
    $("#getinvolved_container").css("display","inherit");
    $("#getinvolved_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#getinvolved_container").removeClass("animated slideInUp");
    },800);
}
function closegetinvolved(){
    $("#getinvolved_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#getinvolved_container").removeClass("animated slideOutDown");
        $("#getinvolved_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#whatwedo").removeClass("animated fadeIn");
      $("#whoweare").removeClass("animated fadeIn");
      $("#getinvolved").removeClass("animated fadeIn");
      $("#missionvision").removeClass("animated fadeIn");
    },1000);
},1500);
