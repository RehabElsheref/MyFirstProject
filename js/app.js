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

 /**
* @description show back to top button when scrolling more than screen height 
* @param none
* @param none
* @returns 
*/

	function toggle_top_btn(){

			if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight){
					btn_top.classList.remove('hidden');

				} else {

					btn_top.classList.add('hidden');
				}			
	}
		
/**
* @description  back to top when button clicked
* @param none
* @param none
* @returns 
*/
	function back_to_top(){

			  document.body.scrollTop = 0;
			  document.documentElement.scrollTop = 0 
			  window.scrollTop = 0;
	}

 /**
* @description main menu button collapsing with small width devices 
* @param none
* @param none
* @returns 
*/
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




 /**
* @description build the nav
* @param none
* @param none
* @returns 
*/
	function load_nav(){

		let list=1;

		for (const section of sections){
			// if sections less than or equal four .
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

			} else if (list>4){  // generate sub menu if sections greater than four .

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

/*
* @description Add class 'active' to meun list linkrelated to his section target when it near top of viewport
* @param none
* @param none
* @returns 
*/
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
						} else {

							m_item.classList.remove('active');
						}	
				}		
 	}


 /**
* @description Add class 'your-active-class' to section when near top of viewport to highlight it.
* @param none
* @param none
* @returns 
*/
	function active_section(){
 	
	 	let position = window.pageYOffset;
	 	for (const section of sections){

	 		link = section.getAttributeNode('id').value;

		 	let scrolled= section.offsetTop;
		  	let sectionHight =  section.offsetHeight;
		  	let headerHight=header.offsetHeight;
		
		 		if ( position>=scrolled-headerHight  && position <= scrolled+sectionHight-headerHight){

		 			section.classList.add('your-active-class');

		 		} else {

		 			section.classList.remove('your-active-class');
		 		}	
		}		
 	}
 
/**
* @description Scroll to anchor ID using scrollTO event smoothly 
* @param none
* @param none
* @returns 
*/

	function scroll_to_anchor(){

			const links= document.querySelectorAll('a');
			let currentPosition = window.pageYOffset;
			// alert(currentPosition);

		 	for (const section of sections){   

		 		for (let link of links){

		 			hash=link.getAttributeNode('href'.value);

	 				if(hash !== null && hash.length > 1 && hash.substr(0, 1) == '#'){

	 					if (section.getAttributeNode('id'.value)== hash.hash.substr(1,hash.length)){

	 						let ScrollToSection = section.offsetTop();
	 						
		 						window.scrollTo(
		 							{
		 								x:currentPosition ,
		 								y:ScrollToSection ,
		 								 behavior:smooth
		 							});

	 					} else {

	 						 return;
	 					}
	 				}
		 		}
		 	} 
		}


/**
 * End Main Functions
 * Begin Events*/


/**
* @description back to top functions calling events 
* @param none
* @param none
* @returns 
*/
 	window.onscroll = function() {toggle_top_btn()};
	btn_top.addEventListener('click',back_to_top);
	btn_top.addEventListener('keyPress',back_to_top);


/**
* @description Highlight Active section and related Menu Link when section near by the view port 
* @param none
* @param none
* @returns 
*/
  	window.addEventListener('scroll',active_link);
    window.addEventListener('scroll',active_section);

/**
* @description Scroll to anchor ID using scrollTO event smoothly 
* @param none
* @param none
* @returns 
*/
    document.addEventListener('click' , scroll_to_anchor);
/**
* @description  Main Menu toggling collapse with small width devices 
* @param none
* @param none
* @returns 
*/
	menu_button.addEventListener('click',collapse);

/**
* @description  Sub menu toggling collapse
* @param none
* @param none
* @returns 
*/

	document.getElementById('sub_list_link').addEventListener ( 'mouseover',toggle_sub);
	document.getElementById('sub_list_link').addEventListener ( 'click',toggle_sub);
	document.getElementById('sub_list_link').addEventListener ( 'keyPress',toggle_sub);
	main_menu.addEventListener('click', secondary_menu.classList.add("hidden"));