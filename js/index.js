console.log("your index.js is loaded correctly!");
//project picture zoom below//
// $(document).ready(function(){
//    $('projectPicture1').hover(function() {
//        $(this).css("cursor", "pointer");
//        $(this).toggle({
//          effect: "scale",
//          percent: "90%"
 //       },200);
 //   }, function() {
 //        $(this).toggle({
 //          effect: "scale",
 //          percent: "70%"
 //        },200);

 //   });
//});

$("projectPicture3").hover(function(){
    $(this).css("background-color", "gray");
    }, function(){
    $(this).css("background-color", "pink");
  });

