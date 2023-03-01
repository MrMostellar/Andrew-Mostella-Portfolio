//grab the toggle box
const toggle = document.querySelector("input[type='checkbox']");

//EventListener and function to change the theme
toggle.addEventListener("change", function(event) {
    
    if(event.target.checked){
        document.documentElement.setAttribute("data-theme", "dark");
        document.getElementById("mode-icon").innerHTML = '<i class="fa-solid fa-moon"></i>';
        document.getElementById("mode-title").innerHTML = '<span class="switch-item" id="mode-title">Dark Mode</span>';
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        document.getElementById("mode-icon").innerHTML= '<i class="fa-solid fa-sun"></i>';
        document.getElementById("mode-title").innerHTML = '<span class="switch-item" id="mode-title">Light Mode</span>';
    }
});

const dropDownMenu = document.getElementById("dropdown-item").classList;
console.log(dropDownMenu);

//create a listener that triggers the dropdown or keeps the button hidden
document.getElementById("dropdown").addEventListener("mouseover", function(event) {
    
    if (event.target.change){
        //show the dropdown
        alert("works");
    } else {

    }
});









