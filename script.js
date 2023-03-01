//grab the toggle box
const toggle = document.querySelector("input[type='checkbox']");

//grab the div that will house the dropdown menu
const dropdownMenu = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdown-btn");
//create a function that triggers the dropdown


//EventListener and function to change the theme
toggle.addEventListener("change", function(event) {
    const sunIcon = document.getElementById("mode-icon").innerHTML = '<i class="fa-solid fa-sun"></i>';
    const moonIcon = document.getElementById("mode-icon").innerHTML = '<i class="fa-solid fa-moon"></i>';
    const darkTitle = document.getElementById("mode-title").innerHTML = '<span class="mode-title">Dark Mode</span>';
    const lightTitle = document.getElementById("mode-title").innerHTML = '<span class="mode-title">Light Mode</span>';
    
    if(event.target.checked){
        document.documentElement.setAttribute("data-theme", "dark");
        sunIcon.hidden;
        moonIcon;
        lightTitle.hidden;
        darkTitle;   
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        moonIcon.hidden;
        sunIcon;
        darkTitle.hidden;
        lightTitle;  
    }
});






