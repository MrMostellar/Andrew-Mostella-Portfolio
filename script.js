//grab the toggle box
const toggle = document.querySelector("input[type='checkbox']");

//EventListener and function to change the theme
toggle.addEventListener("change", function(event) {
    if(event.target.checked){
        document.documentElement.setAttribute("data-theme", "dark");
        document.getElementById("mode-icon").innerHTML = '<i class="fa-solid fa-sun" hidden></i>';
        document.getElementById("mode-icon").innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        document.getElementById("mode-icon").innerHTML = '<i class="fa-solid fa-moon" hidden></i>';
        document.getElementById("mode-icon").innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});




