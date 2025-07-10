
function hello(event) { 
    //alert("Hello, world! Its Sarah!")
    const element = document.getElementById("pupil");
    /* Find the new "x" value*/
    const x = 3 * event.pageX / window.innerWidth;
    /* Find the new "y" value*/
    const y = 3 * event.pageY / window.innerHeight;
    /* Update */
    element.style["left"] = x + "vmin";
    element.style["top"] = y + "vmin";
}


document.addEventListener('mousemove', hello);
