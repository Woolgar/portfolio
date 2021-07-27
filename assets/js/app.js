 function menuToggle() {
     const navs = document.querySelector('.nav__items')
     navs.classList.toggle('nav__toggleShow');
 }
 document.querySelector('.nav__toggle').addEventListener('click', menuToggle,);



 const header = document.querySelector('.nav');

window.addEventListener('scroll',function menubg() {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}); 
 




(function() {

    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;
  
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });
  
    window.onscroll = function() {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document.querySelector('.current').setAttribute('class', ' ');
          document.querySelector('a[href*=' + i + ']').setAttribute('class', 'current');
        }
      }
    };
  }
  
  )();
  