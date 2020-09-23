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
 * Define Global Variables
 * 
*/
const sections=document.querySelectorAll('section');
const menu= document.querySelector(".navbar__menu")
const main_menu= document.getElementById('navbar__list');
const secondary_menu= document.getElementById('secondary__navbar');
const more = document.getElementById('sub_list_link');
const show_sub_list = document.getElementById('secondary__navbar__list');
const li = main_menu.querySelectorAll('li a');
const menu_button = document.getElementById('mini-menu')
const btn_top = document.getElementById('top-btn');
 const header = document.querySelector('header');

/*
 * End Global Variables
 * Start Helper Functions
 * 
*/
 /* Back to main Functions start */

 // show back to top button when scrolling more than screen height 
function toggle_top_btn()
{

	if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
		btn_top.classList.remove('hidden');
		}
		else{
			btn_top.classList.add('hidden');
		}
		
}
 // back to top when button clicked
function back_to_top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0 
  window.scrollTop = 0;
}
//  Back to main Functions End 

// main menu button collapsing with small width devices 
function collapse(){
	
	menu.classList.toggle("collapse");
	
}
// start of toggle function
function toggle_sub(){
	
	secondary_menu.classList.toggle("hidden");
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/



// build the nav

function load_nav(){

	let list=1;
	for (const section of sections){
		
	if (list<=4){	
		
		const list_item_link = document.createElement("A");
		list_item_link.setAttribute("href", "#"+section.getAttributeNode('id').value);
		list_item_link.setAttribute("class" ,"list_nav");	
		list_item_link.innerText=section.getAttributeNode('data-nav').value;
		const list_item = document.createElement("LI");
		list_item.setAttribute("data-id" , section.getAttributeNode('id').value) ;
		list_item.appendChild(list_item_link);
		main_menu.appendChild(list_item);
		list++;
	}
	// generate sub menu 
		else if (list>4){
			const list_item_link = document.createElement("A");
		list_item_link.setAttribute("href", "#"+section.getAttributeNode('id').value);
		list_item_link.innerText=section.getAttributeNode('data-nav').value;
		const list_item = document.createElement("LI");
		list_item.setAttribute("class" ,"list_nav");	
		list_item.setAttribute("data-id" , section.getAttributeNode('id').value) ;
		list_item.appendChild(list_item_link);
			secondary_menu.appendChild(list_item);
			show_sub_list.classList.remove('hidden');
			more.classList.remove('hidden');
			secondary_menu.classList.add("hidden");

			list++

		}
}	

}

// End of function Load_nav

// Add class 'active' to section when near top of viewport

// focused section activate relative link in navigation bar 

 function active_link(){
 	
 	let position = window.pageYOffset;
 	for (const section of sections){
 		link = section.getAttributeNode('id').value;
 		m_item = document.querySelector("li[data-id='"+ link +"']");
 		
  let scrolled= section.offsetTop;
  let sectionHight =  section.offsetHeight;
  let headerHight=header.offsetHeight;

   if ( position>=scrolled-headerHight  && position <= scrolled+sectionHight-headerHight){
 		
 		
 		m_item.classList.add('active');
 	}
 		else
 		{

 			m_item.classList.remove('active');
 		}	
		}		
 }

 function active_section(){
 	
 	let position = window.pageYOffset;
 	for (const section of sections){
 		link = section.getAttributeNode('id').value;
 
 		
  let scrolled= section.offsetTop;
  let sectionHight =  section.offsetHeight;
  let headerHight=header.offsetHeight;
// alert(headerHight);
  if ( position>=scrolled-headerHight  && position <= scrolled+sectionHight-headerHight){
 		
 		section.classList.add('your-active-class');
 	}
 		else
 		{

 			section.classList.remove('your-active-class');
 		}	
		}		
 }
 

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events*/
 	window.onscroll = function() {toggle_top_btn()};
	btn_top.addEventListener('click',back_to_top);
	btn_top.addEventListener('keyPress',back_to_top);


// Build menu 

// Scroll to section on link click

// Set sections as active
  window.addEventListener('scroll',active_link);
    window.addEventListener('scroll',active_section);

// Main Menu toggling collapse with small width devices 
menu_button.addEventListener('click',collapse);

// sub menu toggling collapse
  document.getElementById('sub_list_link').addEventListener ( 'mouseover',toggle_sub);
 document.getElementById('sub_list_link').addEventListener ( 'click',toggle_sub);
 document.getElementById('sub_list_link').addEventListener ( 'keyPress',toggle_sub);
main_menu.addEventListener('click', secondary_menu.classList.add("hidden"));
 



