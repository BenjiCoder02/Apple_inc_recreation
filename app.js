
    let x = document.getElementById("navbar-elements");
    let button = document.getElementById("toggle"), count = 0;
    button.onclick = 
    function dropdown() {
        x.style.top = "45px";
        x.style.opacity = "1";
        x.style.transition = "all 0.5s ease-in-out"
        count += 1;
        if (count % 2 == 0) {
            x.style.top = "-500px";
            x.style.opacity = "1";
            x.style.transition = "all 0.5s ease-in-out"
        }
    
   
}
