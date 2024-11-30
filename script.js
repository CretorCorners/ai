let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); // Change 'section' to 'section'
let navLinks = document.querySelectorAll('header nav a'); // Change 'navLnks' to 'navLinks'

const form = document.querySelector("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phonenuber = document.getElementById("phonenuber");
const subject = document.getElementById("subject");
const yourmassage = document.getElementById("yourmassage");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // Change 'getAttribut' to 'getAttribute'

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Change 'links' to 'link'
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Change 'herf' to 'href'
            });
        }
    });
}

menuIcon.onclick = () => { // Change 'onlick' to 'onclick'
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#00ffb3"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.5;
    y += (nextCircle.y - y) * 0.5;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

// About section Js
// Animation Observer
document.addEventListener("DOMContentLoaded", () => {
  const owners = document.querySelectorAll(".owner");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target); // Stop observing once the animation runs
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  owners.forEach((owner) => {
    observer.observe(owner);
  });
});


// resut section 
document.addEventListener("DOMContentLoaded", () => {
  const resultBoxes = document.querySelectorAll(".results-box");

  const observer = new IntersectionObserver(
      (entries, observer) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.style.transform = "scale(1)";
                  entry.target.style.opacity = "1";
                  observer.unobserve(entry.target); // Animation runs only once
              }
          });
      },
      { threshold: 0.5 }
  );

  resultBoxes.forEach((box) => {
      box.style.transform = "scale(0.8)";
      box.style.opacity = "0";
      observer.observe(box);
  });
});

// about-us section 
document.addEventListener("DOMContentLoaded", () => {
  const founders = document.querySelectorAll(".founder");

  const observer = new IntersectionObserver(
      (entries, observer) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = "1";
                  entry.target.style.transform = "translateY(0)";
                  observer.unobserve(entry.target); // Animation runs once
              }
          });
      },
      { threshold: 0.5 }
  );

  founders.forEach((founder) => {
      founder.style.opacity = "0";
      founder.style.transform = "translateY(50px)";
      observer.observe(founder);
  });
});

// FAQ section 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// scrolling animation 
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("section, .home-content, .services, .results, .contact"); // Add relevant selectors

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          } else {
              entry.target.classList.remove("visible");
          }
      });
  }, {
      threshold: 0.2, // Adjust this to control when the animation triggers
  });

  elements.forEach((el) => {
      el.classList.add("hidden"); // Add the hidden class initially
      observer.observe(el); // Start observing each element
  });
});
