

window.onload = function() {

// simple function to use for callback in the intersection observer
const navCallback = (entries, observer) => {
   
entries.forEach((entry) => {
     // verify the element is intersecting
     if(entry.isIntersecting && entry.intersectionRatio >= 0.3) {
      
       // remove old active class
      document.querySelector('.active').classList.remove('active');
     // document.querySelector('.mobile-menu-items a.active').classList.remove('active'); //????
       // get id of the intersecting section
       var id = entry.target.getAttribute('id');
       // find matching link & add appropriate class
       var newLink = document.querySelector(`[href="./index.html#${id}"]`).classList.add('active');
      // var newLink = document.querySelector(`.mobile-menu-items [href="./index.html#${id}"]`).classList.add('active'); //???
      
     }
   });

   //make a separate one for mobile menu items with rootmargin etc threshold 0
}

// // init the observer
 const options = {
   threshold: 0.3,
   rootMargin: '0px 0px -30% 0px'
 }

 const observer = new IntersectionObserver(navCallback, options);

// // target the elements to be observed
 const sections = document.querySelectorAll('section');
 sections.forEach((section) => {
   observer.observe(section);
 })


// for mobile devices -------



}