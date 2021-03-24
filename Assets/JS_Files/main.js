//alert with gmail on it//
function showMail() {
    alert("bradybaldwin97@gmail.com")
}

//progress bar funciton, only runs on pages with thisBar element//
window.onscroll = function() {progShow()};

function progShow() {
    if (document.getElementById("thisBar") !== null){
        var getBar = document.getElementById("thisBar");
        var scrollPos = document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var postScroll = (scrollPos / height) * 100;
        getBar.style.width = postScroll + "%";
    }
}

//Animation functions (via Greensock.com)//
//this makes sure page is loaded before running the animations//
document.addEventListener("DOMContentLoaded", function(){
//Home page scrolling animations//
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.homeScroll1',
        }});
        tl.addLabel("start")
            .from('.homeScroll1', {y:100, opacity: 0, duration: 1.5})
            .to('.homeScroll1', {y:0, opacity: 100, duration: 1.5})

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.homeScroll2',
            }});
        tl.addLabel("start")
            .from('.homeScroll2', {y:100, opacity: 0, duration: 1.5})
            .to('.homeScroll2', {y:0, opacity: 100, duration: 1.5})
        
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.homeScroll3',
            }});
        tl.addLabel("homeScroll3")
            .from('.homeScroll3', {y:100, opacity: 0, duration: 1.5})
            .to('.homeScroll3', {y:0, opacity: 100, duration: 1.5})
            
         var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.homeScroll4',
             }});
        tl.addLabel("homeScroll4")
            .from('.homeScroll4', {y:100, opacity: 0, duration: 1.5})
            .to('.homeScroll4', {y:0, opacity: 100, duration: 1.5})

//Projects Page Scrolling Animations//
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.projSubMove',
            }});
        tl.addLabel("projSubMove")
            .from('.projSubMove', {y:200, opacity: 0, duration: .7})
            .to('.projSubMove', {y:0, opacity: 100, duration: .7})

    
//Non-scroll on load home screen timeline//
    var tlHome = gsap.timeline({});
        tlHome.from("#tagline", {x: -100, opacity:0, delay: .3, duration: .7});
        tlHome.from(".homeMain2", {y: 100, opacity:0, duration: .5});
    
//Non-scroll on load Projects Page timeline//
    var tlProj = gsap.timeline({});
        tlProj.from(".projMainMove", {x: -100, opacity:0, duration: .5, delay: .25});
        tlProj.from(".projMainMove2", {x: -100, opacity:0, duration: .5});
        tlProj.from(".projMainMove3", {x: -100, opacity:0, duration: .5});
        tlProj.from(".projMainMove4", {x: -100, opacity:0, duration: .5});

//Non-scroll on load VR Project Detail Page timeline//
    var tlVR = gsap.timeline({});
        tlVR.from("#vrHeadsub", {opacity:0, duration: .5, delay: .3});
        tlVR.from("#vrGreybox1", {x: 100, opacity:0, duration: 1, delay: .1});
        tlVR.from("#vrOvrAnim", {x: 100, opacity:0, duration: .5});
        tlVR.from("#vrProjGoalsAnim", {opacity:0, duration: .5});
        tlVR.from("#collabContAnim", {opacity:0, duration: .5});

//Non-scroll on load Fake News Project Detail Page timeline//
    var tlFN = gsap.timeline({});
        tlFN.from("#FNHeadsub", {opacity:0, duration: .5, delay: .3});
        tlFN.from("#FNGreybox1", {x: 100, opacity:0, duration: 1, delay: .1});
        tlFN.from("#FNOvrAnim", {x: 100, opacity:0, duration: .5});
        tlFN.from("#FNProjGoalsAnim", {opacity:0, duration: .5});
        tlFN.from("#FNcollabContAnim", {opacity:0, duration: .5});

//Non-scroll on load Capstone Project Detail Page timeline//
    var tlCP = gsap.timeline({});
        tlCP.from("#PPHeadsub", {opacity:0, duration: .5, delay: .3});
        tlCP.from("#PPOvrAnim", {x: 100, opacity:0, duration: .5});
        tlCP.from("#PPProjGoalsAnim", {opacity:0, duration: .5});
        tlCP.from("#PPcollabContAnim", {opacity:0, duration: .5});

//Non-scroll on load UCRE Project Detail Page timeline//
    var tlFN = gsap.timeline({});
        tlFN.from("#UCHeadsub", {opacity:0, duration: .5, delay: .3});
        tlFN.from("#UCGreybox1", {x: 100, opacity:0, duration: 1, delay: .1});
        tlFN.from("#UCOvrAnim", {x: 100, opacity:0, duration: .5});
        tlFN.from("#UCProjGoalsAnim", {opacity:0, duration: .5});
        tlFN.from("#UCcollabContAnim", {opacity:0, duration: .5});
})



