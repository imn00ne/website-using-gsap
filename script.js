function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display ="flex"
}
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display ="none"
}

// var body = document.querySelector("body");
// var crsr = document.querySelector(".cursor");

// body.addEventListener("mousemove",function(dets){

//     crsr.style.left=dets.x+"px";
//     crsr.style.top=dets.y+"px";

// });



var body = document.querySelector("body");
var crsr = document.querySelector(".cursor");

body.addEventListener("mousemove", function(event) {
    var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    crsr.style.left = (event.clientX + scrollX) + "px";
    crsr.style.top = (event.clientY + scrollY) + "px";
});





gsap.from(
    ".mainimg",{
        delay:0.5,
        duration:2,
        opacity:0,
        scale:0.5,
        // stagger:2,

    }
    
)

gsap.from(
    "h1",{
        delay:0.5,
        duration:2,
        opacity:0,
        scale:0.5,
        // stagger:2,
        y:-90,

    }
    
)

gsap.from(
    "p",{
        delay:0.5,
        duration:2,
        opacity:0,
        scale:0.5,
        // stagger:2,
        x:-10,

    }
    
)

gsap.from(
    ".page2 h3 ",{
        delay:0.5,
        duration:1,
        opacity:0,
        scale:0.5,
        // stagger:1,
        // x:-10,
        scrollTrigger:{
            trigger:".page2 h3 ",
            scroller:"body",
            start:"top 90%",



        }

    }
    
)

gsap.from(
    ".page2 .flexbox",{
        delay:0.5,
        duration:1,
        opacity:0,
        scale:0.5,
        stagger:0.8,
        // x:1000,
        scrollTrigger:{
            trigger:".page2 .flexbox ",
            scroller:"body",
            start:"top 90%",



        }

    }
    
)

// gsap.from(
//     ".page2 .flexbox",{
//         delay:0.5,
//         duration:1,
//         opacity:0,
//         scale:0.5,
//         stagger:2,
//         // x:-10,
//         scrollTrigger:{
//             trigger:".page2.flexbox #flexbox1 #flexbox2 #flexbox3",
//             scroller:"body",
//             start:"top 80%",



//         }

//     }
    
// )


gsap.from(
    ".page3",{
        delay:1,
        duration:1,
        opacity:0,
        scale:0.5,
        stagger:0.5,
        // scale:0.5,
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            start:"top 90%",



        }

    }
    
)

gsap.from(
    ".page4",{
        delay:1,
        duration:1,
        opacity:0,
        scale:0.5,
        stagger:0.5,
        scrollTrigger:{
            trigger:"page4",
            scroller:"body",
            start:"top 90%",



        }

    }
    
)


gsap.from(
    ".page5",{
        delay:0.5,
        duration:1,
        opacity:0,
        scale:0.5,
        stagger:0.5,
        // scale:0.5,
        scrollTrigger:{
            trigger:".page5",
            scroller:"body",
            start:"top 90%",



        }

    }
    
)