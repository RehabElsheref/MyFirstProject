# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.
Steps:
- `js/app.js` has been linked.
- CSS file updated to fit with responsive 
-- Global variables and constant has been defined.
--- Navigation bar menu function (load_nav()) has been built with these features:
1-	Auto generated based on sections loaded in the DOM.
2-	If links more than four, then sub menu generated.
3-	The sub menu toggled with function toggle_sub().
4-	Functions used to build it (querySelectorAll, querySelector, getElementById,createElement,  setAttribute, getAttribute, appendChild, classList.remove, classList.add)
5-	Properties used to build it (innerText , classList) .
6-	It was created with ( For..Of )  and  (If condition ).
---- Highlight menu link related to his section when section is near to the viewport through scrolling function (active_link()).
1-	Properties  used (offsetTop , offsetHeight, window.pageYOffset , classList.add , classList.remove).
2-	Functions used (getAttributeNode , querySelector).
3-	It was created with ( For..Of )  and  (If condition ).
 ---- Highlight section when it is near to the viewport through scrolling function (active_section()).
------ Scroll to anchor ID using scrollTO event smoothly 
1-	Properties  used (pageYOffset,length).
2-	Functions used (querySelectorAll,getAttributeNode,substr,offsetTop,scrollTo).
3-	It was created with ( For..Of )  and  (If condition ).
------ Back top function (back_to_top()) that appear when user scroll more than the browser height .
------- Collapse navigation bar menu with small screens like tablets and phones using @media CSS and function collapse () that toggle hidden class with click event on menu button.


