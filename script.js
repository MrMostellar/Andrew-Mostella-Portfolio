//grab the toggle box
const toggle = document.querySelector("input[type='checkbox']");
//grab the div that will house the dropdown menu on small screens
const dropdownMenu = document.getElementById("dropdown");

//create a function that triggers the dropdown


//EventListener and function to change the theme
toggle.addEventListener("change", function(event) {
    if(event.target.checked){
        document.documentElement.setAttribute("data-theme", "dark");
        document.getElementById("mode-icon").innerHTML = '<i class="fa-solid fa-sun" hidden></i>';
        document.getElementById("mode-icon").innerHTML = '<i class="fa-solid fa-moon"></i>';
        document.getElementById("mode-title").innerHTML = '<span class="mode-title" hidden>Light Mode</span>'
        document.getElementById("mode-title").innerHTML = '<span class="mode-title">Dark Mode</span>'
        
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        document.getElementById("mode-icon").innerHTML = '<i class="fa-solid fa-moon" hidden></i>';
        document.getElementById("mode-icon").innerHTML = '<i class="fa-solid fa-sun"></i>';
        document.getElementById("mode-title").innerHTML = '<span class="mode-title" hidden>Dark Mode</span>'
        document.getElementById("mode-title").innerHTML = '<span class="mode-title">Light Mode</span>'
        
    }
});




