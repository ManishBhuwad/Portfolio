function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();

function checksize(){
    let screenSize = screen.width;
    if(screenSize<480){
        mobileEduPage();
        mobilePage1();
    }else{
        console.log(screenSize +"this is screen")
        normalPage1();
        normalEduPage();
    }
}


// gsap.to(".hero-textwrap span",{
//     transform:"translateY(-10px)",
//     stagger:.1,
//     duration:1,
//     ease: "bounce.out",
// })
// gsap.to(".hero-textwrap2 span",{
//     transform:"translateY(-10px)",
//     delay:.2,
//     stagger:.1,
//     duration:.5,
//     ease: "bounce.out"
// })

function newHeroAnime(){
    if(screenSize>480){
        var tl = gsap.timeline({
            scrollTrigger:{
                trigger:".hero",
                scroller:"#main",
                markers:true,
                scrub: 1,
                end:"top -70%",
                pin: true
    
            }
        })
    
        
        tl.to('.hero #header_tri',{
            top: "70%",
            left: "20%",
            rotate: 120,
            duration:.5,
            scrub:2
        },"anim")
    }else{
        var tl = gsap.timeline({
            scrollTrigger:{
                trigger:".hero",
                scroller:"#main",
                markers:true,
                scrub: 1,
                end:"top -30%",
                // pin: true
    
            }
        })
    
        
        tl.to('.hero #header_tri',{
            top: "10%",
            left: "20%",
            rotate: 120,
            duration:.5,
            scrub:2
        },"anim")
    }
}

// Mobile Animation
function mobilePage1(){
    let mp1 = gsap.timeline({
        scrollTrigger:{
            trigger:".page1",
            scroller:"#main",
            markers:true,
            scrub: 1,
            end:"top -30%",
            pin: true

        }
    })
        mp1.from(".about-left ,.about-right",{
            // transform:`translate(600px,-100px) rotate(-15deg)`,
            transform:"translate(50%, 5%) rotate(-15deg)",
            duration: 1,
            opacity:0,
            scrub:2,
            stagger:.2
        })
        
}

function mobileEduPage(){
    let mE1 = gsap.timeline({
        scrollTrigger:{
            scroller:"#main",
            trigger: ".page3",
            markers: true,
            start:"top 25%",
            end:"top -100% ", 
            scrub: 2  
        }
     })


     mE1.from(".page3 .box1",{
        left:-300,
        duration:.5,
        opacity:0,
       

    })
    mE1.from(".page3 .box2",{
        right:-300,
        duration:.5,
        opacity:0,

    })
    mE1.from(".page3 .box3",{
        left:-300,
        duration:.5,
        opacity:0,

    },)
    mE1.from(".page3 .box4",{
        right:-300,
        duration:.5,
        opacity:0,

    })
    
}

// Normal Animation

function normalEduPage(){
    let tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:".page3",
            scroller:"#main",
            markers:true,
            scrub: 2,
            start:"top 0%",
            end:"top -200%",
            pin: true

        }
        
    })
    
    tl4.to('.page3',{
        borderRadius: 0,
        backgroundColor:'#fff',
        duration:.2,
        scrub:.2,
    },"anim3")
    tl4.to('.page3 .box1',{
        x:500,
        top:"10%",
        duration:1.5,
        scrub:.2,
    },"anim3")
  
    tl4.to('.page3 .box2',{
        delay:.7,
        top:"10%",
        right:"25%",
        duration:2,
        scrub:.2,
    },"anim3")
    tl4.to('.page3 .box1',{
        x:200,
        duration:1.5,
        scrub:.2,
    },"left-anim")
    tl4.to('.page3 .box3',{
        transform:"rotate(15deg)",
        delay:1.5,
        top:"10%",
        left:"50%",
        duration:2.5,
        scrub:.2,
    },"anim3")
    tl4.to('.page3 .box2',{
        x:-300,
        duration:1.5,
        scrub:.2,
    },"left-anim")
    tl4.to('.page3 .box4',{
        transform:"rotate(-15deg)",
        delay:2.5,
        top:"10%",
        right:"15%",
        duration:2.5,
        scrub:.2,
    },"anim3")
    tl4.to('.page3 .box3',{
        x:-150,
        duration:1.5,
        scrub:.2,
    },"left-anim")
    tl4.to(".social-icons" ,{
        backgroundColor:"#fff",
        bottom: "40%",
        duration: 2,
        scrub:2
    })
}

function normalPage1(){
    let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".page1",
            scroller:"#main",
            markers:true,
            scrub: 1,
            end:"top -30%",
            pin: true

        }
    })
    tl2.from(".page1 .about-left",{
        transform:"translate(50%, 5%) rotate(-15deg)",
        opacity:0,
        duration:2,
    },"anim")
    tl2.from(".page1 .about-right",{
        transform:"translate(50%, 5%) rotate(-15deg)",
        opacity:0,
        duration:2,
    },"anim")
}









function cursorMove(){
    let curs = document.querySelector('.curs');
    window.addEventListener('mousemove',(dets)=>{
        curs.style.transform=`translate(${dets.clientX}px, ${dets.clientY}px)`
    })
   
}

function iconMove(){
    var iconbox= document.querySelectorAll('.iconbox')
     var posY = 0
     var diff = 0;
     var posX = 0;


    window.addEventListener('mousemove',(dets)=>{
        posY = dets.clientY;
        posX = dets.clientX-100;
    })
    iconbox.forEach(function(elem){

        elem.addEventListener('mouseleave',(dets)=>{
            var icwrap = elem.querySelector('.icwrap');
            icwrap.style.display="none";

        })
        elem.addEventListener('mousemove',(e)=>{
            var pos = elem.getBoundingClientRect();
            diff = posY - pos.top;  
            console.log(diff)
            var icwrap = elem.querySelector('.icwrap');
            icwrap.style.display="block";
            icwrap.style.transform = `translate(${posX}px, ${diff}px)`
        })
    })
}





// page3animation()
checksize();
iconMove()
cursorMove()
// newHeroAnime();