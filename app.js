const tl = gsap.timeline({ defaults: {ease: "power1.out"} });

tl.to(".text", {y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", {y: "-100%", duration: 1}, "-=1");
tl.fromTo("nav", {opacity: 0}, {opacity: 1 , duration: 1} );
tl.fromTo(".big-text", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");










// for gsap cdn https://cdnjs.com/libraries/gsap
// getting tl.to from gsap timeline adding duration stagger for come up one by one text
// .intro adding "-=" to get 1sec faster as duration of slider is 1.5
// tl.fromTo which specify starting and end point of the text