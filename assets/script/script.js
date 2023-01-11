const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");

// Show and Hide Navbar Function
const toggleMenu = () => {
   navbarMenu.classList.toggle("active");
   overlayMenu.classList.toggle("active");
};

// Collapsible Mobile Submenu Function
const collapseSubMenu = () => {
   navbarMenu
      .querySelector(".menu-dropdown.active .submenu")
      .removeAttribute("style");
   navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
};

// Toggle Mobile Submenu Function
const toggleSubMenu = (e) => {
   if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
      e.preventDefault();
      const menuDropdown = e.target.parentElement;

      // If Dropdown is Expanded, then Collapse It
      if (menuDropdown.classList.contains("active")) {
         collapseSubMenu();
      } else {
         // Collapse Existing Expanded Dropdown
         if (navbarMenu.querySelector(".menu-dropdown.active")) {
            collapseSubMenu();
         }

         // Expanded the New Dropdown
         menuDropdown.classList.add("active");
         const subMenu = menuDropdown.querySelector(".submenu");
         subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
   }
};

// Fixed Resize Window Function
const resizeWindow = () => {
   if (window.innerWidth > 992) {
      if (navbarMenu.classList.contains("active")) {
         toggleMenu();
      }
      if (navbarMenu.querySelector(".menu-dropdown.active")) {
         collapseSubMenu();
      }
   }
};

// Initialize Event Listeners
burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarMenu.addEventListener("click", toggleSubMenu);
window.addEventListener("resize", resizeWindow);

// Open/close question card
const cards = document.querySelectorAll('.card-base');

cards.forEach(card => {
   const header = card.querySelector('.card-heading');
   const arrow = card.querySelector('.card-arrow');
   const content = card.querySelector('.card-content');
   // const arrowImg = document.querySelectorAll('#card-arrow > img');
   // console.log($('#card-arrow img').attr('src')); 

   header.addEventListener('click', () => {
      if (content.style.display === 'block') {
         content.style.display = 'none';
      } else {
         content.style.display = 'block';
         // arrowImg.src = '/assets/icons/arrow-down-icon.svg';
      }
   });

   arrow.addEventListener('click', () => {
      if (content.style.display === 'block') {
         content.style.display = 'none';
      } else {
         content.style.display = 'block';
         // arrowImg.src = '/assets/icons/arrow-down-icon.svg';
      }
   });
});

// Booking form
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
   const formData = new FormData(form);
   e.preventDefault();
   var object = {};
   formData.forEach((value, key) => {
      object[key] = value;
   });
   var json = JSON.stringify(object);
   result.innerHTML = "Please wait...";

   fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Accept: "application/json"
      },
      body: json
   })
      .then(async (response) => {
         let json = await response.json();
         if (response.status == 200) {
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-green-500");
         } else {
            console.log(response);
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-red-500");
         }
      })
      .catch((error) => {
         console.log(error);
         result.innerHTML = "Something went wrong!";
      })
      .then(function () {
         form.reset();
         setTimeout(() => {
            result.style.display = "none";
         }, 5000);
      });
});

// Contact form

// Read more button & functionality

function myFunction() {
   var dots = document.getElementById("dots");
   var moreText = document.getElementById("more");
   var btnText = document.getElementById("myBtn");
 
   if (dots.style.display === "none") {
     dots.style.display = "inline";
     btnText.innerHTML = "Read more"; 
     moreText.style.display = "none";
   } else {
     dots.style.display = "none";
     btnText.innerHTML = "Read less"; 
     moreText.style.display = "inline";
   }
 }

 
// For Github assets access
// function addSrc () {
//    var images = document.getElementsByTagName('img');
//    var text = '/HappyDent';
//    for (var i = 0; i < images.length; i++) {
//       var imgSrc = images[i].src;
//       images[i].src = text + imgSrc;
//    };
// };

// window.onload = addSrc;

const images = document.querySelector('img');

images.addEventListener('load', () => {
   images.src = '/HappyDent' + images.src;
});


// images.forEach(image => {
//    const text = '/HappyDent';
//    const imgSrc = image.src;
//    images.src = text + imgSrc;

//    window.onload = addSrc;
// });



