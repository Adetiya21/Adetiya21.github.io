// $(document).ready(function(){
//     $(".pyro").hide();
//     var drum1 = new Audio("drum1.wav"); // 5s
//     var drum3 = new Audio("drum3.wav"); // 30s
//     var win1 = new Audio("TF2 Victory - Sound Effect.wav"); // buffers automatically when created
//     var win = new Audio("win.mp3"); // buffers automatically when created

//     $("#draw-name").click(function(){
//         $(".pyro").hide();
//         drum1.play();
//         $("#drumroll-image").show();
//         $("#draw-name").hide();
//         $("#draw-name-2").hide();
//         setTimeout(function (){
//             $("#drumroll-image").hide();
//             $("#draw-name").show();
//             $("#draw-name-2").show();
//             $(".pyro").show();
//             var nameList = [];  
//             $("#attendees li").each(function() {
//                 nameList.push($(this).text()+'::'+$(this).attr('id'));
//             });
//             var winner = nameList[Math.floor(Math.random()*nameList.length)];
//             var winner_name = winner.split("::");
//             $("#winners").prepend('<li>' + winner_name[0] + '</li>');
//             $(".winner-container").show();
//             $("#attendees li").remove("#" + winner_name[1]);
//             win1.play();
//          }, 5000);
//     });

//     $("#draw-name-2").click(function(){
//         $(".pyro").hide();
//         drum3.play();
//         $("#drumroll-image").show();
//         $("#draw-name").hide();
//         $("#draw-name-2").hide();
//         setTimeout(function (){
//             $("#drumroll-image").hide();
//             $("#draw-name").show();
//             $("#draw-name-2").show();
//             $(".pyro").show();
//             var nameList = [];  
//             $("#attendees li").each(function() {
//                 nameList.push($(this).text()+'::'+$(this).attr('id'));
//             });
//             var winner = nameList[Math.floor(Math.random()*nameList.length)];
//             var winner_name = winner.split("::");
//             $("#winners").prepend('<li>' + winner_name[0] + '</li>');
//             $(".winner-container").show();
//             $("#attendees li").remove("#" + winner_name[1]);
//             win.play();
//          }, 30000);
//     });
// });
