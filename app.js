   //Query selectors

    let bar = document.querySelector(".fa-bars");
    let x = document.querySelector("#navbar-elements");
    let button = document.getElementById("toggle"), count = 0;

//Menu button animation
    button.onclick = 
    function dropdown() {
        bar.style.transition = "all 0.8s ease"
        bar.style.transform = "rotate(90deg)"
        bar.className = "fas fa-times";
        x.classList.toggle("navbar-elements-show")
        
        count += 1;
        if (count % 2 == 0) {
            bar.style.transition = "all 0.8s ease"
            bar.style.transform = "rotate(-180deg)";
            bar.className = "fas fa-bars";    
        }
}
