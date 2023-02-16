
// function active_menu(name){
//     if ($(".footer .col-2").hasClass("text-grey")) {
//         $(".footer .col-2").addClass("text-grey");
//         $(".footer .col-2").removeClass("text-primary");
//     }
//     $("#"+name).removeClass("text-grey");
//     $("#"+name).addClass("text-primary").addClass("animate__animated").addClass("animate__pulse");
//     $(".page_home").addClass("animate__animated" ).addClass("animate__zoomOutUp");
//         setTimeout(function(){
//             $("#"+name).removeClass("animate__animated")
//             $("#"+name).removeClass("animate__pulse");
//             $(".page_home").removeClass("animate__animated").removeClass("animate__zoomOutUp");
//         },1000); 
// }

$("#home").click(function() {
        location.hash ="home";
        
});
$("#map").click(function() {    
        location.hash ="map";
});


// 

$(window).on('hashchange', function(){
     
    // Your code goes here
    var hash = location.hash;
    if (hash == "#map") {
        $(".page").load("./map.html");
        // active_menu("map");
    }
   
}).trigger('hashchange');

