// var scrollDirection = true;
// var scrollCount = 0;
// var delta = "";
// var url =  window.location.href
// var home = document.getElementById('homepage');
// var about = document.getElementById('aboutpage');
// var skills = document.getElementById('skillspage');
// var tools = document.getElementById('toolspage');
// var projects = document.getElementById('projectspage');
// var foots = document.getElementById('footerpage');

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }



// console.log(url)

// if(url.includes("#")){
//     console.log("yes")
//     let pagecheck = url.indexOf('#');
    
//     url = url.substring(0, pagecheck);
//     console.log(url)
// }


// function runOnScroll(){

//     console.log(delta)
//     const sections = document.querySelectorAll('.section');

//     sections.forEach(section => {
//         section.classList.add("hide");
//         section.classList.remove("show");
//     });

//     if(scrollDirection == true){
//         scrollCount++;
//     } else{
//         scrollCount--;
//     }


//     if(scrollCount < 0){
//         scrollCount = 0;
//     } else if(scrollCount >5){
//         scrollCount = 5;
//     }
//     console.log(scrollCount);
        
//     switch(scrollCount){
//         case 0:
//             window.location =  url+'#homepage';
//             home.classList.add("show");
//             home.classList.remove("hide");
//         break;

//         case 1:
//             window.location = url+'#aboutpage';
//             about.classList.add("show")
//             about.classList.remove("hide");
//         break;

//         case 2:
//              window.location = url+'#skillspage';
//              skills.classList.add("show")
//              skills.classList.remove("hide");
//         break; 

//         case 3:
//             window.location = url+'#toolspage';
//             tools.classList.add("show")
//             tools.classList.remove("hide");
//         break; 

//         case 4:
//             window.location = url+'#projectspage';
//             projects.classList.add("show")
//             projects.classList.remove("hide");
//         break; 

//         case 5:
//             window.location = url+'#footerpage';
//             foots.classList.add("show")
//             foots.classList.remove("hide");
//         break; 
//     }
// }

// const throttle = (fn, delay) => { 
//     // Capture the current time 
//     let time = Date.now(); 
   
//     // Here's our logic 
//     return () => { 
//       if((time + delay - Date.now()) <= 0) { 
//         // Run the function we've passed to our throttler, 
//         // and reset the `time` variable (so we can check again). 
//         fn(); 
//         time = Date.now(); 
//       } 
//     } 
//   }
  
//   $(document).bind('mousewheel', function(evt) {
//     delta = evt.originalEvent.wheelDelta
//     if(delta >0){
//         scrollDirection=false;
//     } else{
//         scrollDirection=true;
//     }
// })
  
//    $(document).bind('mousewheel',  throttle(runOnScroll, 500));

//    const bushes = document.querySelectorAll(".bush");
//    const sectioncheck = document.getElementById("aboutSection");
//    console.log(sectioncheck)


// //   window.addEventListener('wheel', function(event)
// //   {
// //    if (event.deltaY < 0)
// //    {
// //     console.log('scrolling up');
// //     scrollDirection = false;
// //    }
// //    else if (event.deltaY > 0)
// //    {
// //     console.log('scrolling down');
// //     scrollDirection = true;

// //    }

// //   });
const folders = document.querySelectorAll(".folder");

folders.forEach(folder => {

  folder.onmousedown = function(e) {

    const section =  e.target.closest('section');

      const content =  e.target.closest('.contentSection');

      if(content){
        return;
      }

    section.classList.toggle('showFull');
    const innerSection = section.firstElementChild;

    innerSection.classList.toggle("showInner");
    const contentDiv = innerSection.firstElementChild;

    contentDiv.classList.toggle("showContent");


    clickCheck()
  };
});

function clickCheck(){
    folders.forEach(folder => {
        folder.classList.toggle('showNone');
        folder.classList.toggle('select');
    });
}

