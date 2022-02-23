/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//start with getting the navigation bar list
const navigationBar = document.getElementById("navbar__list");
//select all sections
const sections = document.querySelectorAll("section");  
//create an empty variable for html file navigation bar
let brwNav  = ' '; 
// End Global Variables

// Build menu
for (let j = 0; j < sections.length; j++) {
    //Declare a variable to get data-nav attributes of each section
    var sectionData = sections[j].dataset.nav; 
    brwNav += `<li><a class= "menu__link" id="${sections[j].id}brwNav" href="#${sections[j].id}">${sectionData}</a></li>`;
}
navigationBar.innerHTML = brwNav;

//Create Scrollig Function
onscroll = function() {
    let position = document.documentElement.scrollTop;
    //loop over the sections
    sections.forEach(section => {
        //checking condition
        if (position >= section.offsetTop &&
             position < section.offsetTop + section.offsetHeight) {
            // Add class 'active' to section when near top of viewport
            for (let i = 0; i < sections.length; i++) {
                if (sections[i].id == section.id) { //adding condition
                    sections[i].classList.add('your-active-class');
                    //styling section hover
                    document.getElementById(`${sections[i].id}brwNav`).style.color = '#00FFFF';
                    document.getElementById(`${sections[i].id}brwNav`).style.background = '#0000FF';

                } else { //removing condition
                    sections[i].classList.remove('your-active-class');
                    //styling section hover 
                    document.getElementById(`${sections[i].id}brwNav`).style.color = '#0000FF';
                    document.getElementById(`${sections[i].id}brwNav`).style.background = '#00FFFF';
                } 
            }
        }
    })
}
/*
// OOOOOOO Some Tryouts OOOOOOO
var lastId,
 topMenu = $("navbar__menu"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});
*/
//Scrool to top button  
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else { //hide the button
    mybutton.style.display = "none";
  }
}

// When clicking on the button, go to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
onscroll();
