//grab the toggle box
const toggle = document.querySelector("input[type='checkbox']");

//EventListener and function to change the theme
toggle.addEventListener("change", function(event) {
    
    if(event.target.checked){
        document.documentElement.setAttribute("data-theme", "dark");
        document.getElementById("mode-icon").innerHTML = '<i class="fa-solid fa-moon"></i>';
        document.getElementById("mode-title").innerHTML = '<span class="switch-item" id="mode-title"title="Set to Light Theme">Dark Theme</span>';
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        document.getElementById("mode-icon").innerHTML= '<i class="fa-solid fa-sun"></i>';
        document.getElementById("mode-title").innerHTML = '<span class="switch-item" id="mode-title" title="Set to Dark Theme">Light Theme</span>';
    }
});
//grab variables for the element and its' uses
const dropDownActivate = document.getElementById("dropdown-btn");
const dropDownDeactivate = document.getElementById("dropdown-btn");

//grab variable for the dropdown-item
const dropDownList = document.querySelector("#dropdown");

// create a function for opening the menu
function openDropDownMenu(){

};

function closeDropDownMenu(){

};

//listen for a click event, mainly for mobile
dropDownActivate.addEventListener("click", () => {
    openDropDownMenu();
    
});

// dropDownActivate.addEventListener("click", () => {
//     closeDropDownMenu();
// });

//listen for a mouse over and mouse out event
dropDownActivate.addEventListener("mouseover", (event) => {
    if(event){
        
    };
});

dropDownDeactivate.addEventListener("mouseout", (event) =>{
    if(event){
        
    };
});







