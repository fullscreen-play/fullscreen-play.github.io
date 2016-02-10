// // window.scrollTo(0,1);
//
// console.log("yo");
//
// // Find the right method, call on correct element
// function launchIntoFullscreen(element) {
//   if(element.requestFullscreen) {
//     element.requestFullscreen();
//   } else if(element.mozRequestFullScreen) {
//     element.mozRequestFullScreen();
//   } else if(element.webkitRequestFullscreen) {
//     element.webkitRequestFullscreen();
//   } else if(element.msRequestFullscreen) {
//     element.msRequestFullscreen();
//   }
// }
//
// // Launch fullscreen for browsers that support it!
// launchIntoFullscreen(document.documentElement); // the whole page
// (function(){
//     function launchIntoFullscreen(element) {
//         console.log("launchintofullscreen");
//         if(element.requestFullscreen) {
//             element.requestFullscreen();
//         } else if(element.mozRequestFullScreen) {
//             element.mozRequestFullScreen();
//         } else if(element.webkitRequestFullscreen) {
//             element.webkitRequestFullscreen();
//         } else if(element.msRequestFullscreen) {
//             element.msRequestFullscreen();
//         }
//     }
//
//     document.addEventListener("click", function(){
//         //window full screen tonen
//         launchIntoFullscreen(document.documentElement);
//         //window niet meer focussen (zorgt dat melding niet meer op scherm komt wanneer er over 2de window wordt gehovered
//         $(document).blur();
//     }, true);
// })();
//
// // $('window').scrollTop(1);

// When ready...
// window.addEventListener("load",function() {
// 	// Set a timeout...
// 	setTimeout(function(){
//     console.log("yo");
// 		// Hide the address bar!
// 		window.scrollTo(0, 1);
// 	}, 1000);
// });
/* Foundation v2.1.3 http://foundation.zurb.com */
// jquery(document).ready(function () {
//
// 	/* Use this js doc for all application specific JS */
//
//     /* HIDE ADDRESS BAR ON IPHONE */
//
//     window.scrollTo(0,1);
//
// });

// function hideAddressBar() { window.scrollTo(0, 0); }
//
// addEventListener('load', function() { setTimeout(hideAddressBar, 0); }, false);
// });
// $('body').scrollTop(100);
// $(function() {
//     function orientationChange(e) {
//         $("body").scrollTop(1);
//     }
//     $("body").css({ height: "+=300" }).scrollTop(1);
//     $(window).bind("orientationchange", orientationChange);
// });
// function hideAddressBar()
// {
//   if(!window.location.hash)
//   {
//       if(document.height < window.outerHeight)
//       {
//           document.body.style.height = (window.outerHeight + 50) + 'px';
//       }
//
//       setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
//   }
// }
//
// window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); } } );
// window.addEventListener("orientationchange", hideAddressBar );
