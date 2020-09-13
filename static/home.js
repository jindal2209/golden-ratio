var slider = document.getElementById("slider");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
window.onload = function () {
    slider.value = "100" ;
}

slider.oninput = function() {
    if (document.getElementById("square").style.height == '235px') {
        document.getElementById("square").style.border = '2px solid rgb(255,215,0)';
        document.getElementById("square").style.backgroundColor = 'rgb(248, 226, 103)';
        document.getElementById("achieved").style.display = 'block';
    }
    else {
        document.getElementById("square").style.border = '2px solid red';
        document.getElementById("square").style.backgroundColor = 'rgb(236, 102, 102)';
        document.getElementById("achieved").style.display = 'none';
    }
    
    var hi = document.getElementById("square").style.height ;
    output.innerHTML = 380.23 / hi.slice(0, -2);
    document.getElementById("square").style.height = this.value + 'px'; 
}


function makegr(){
    slider.value = "235" ;
    document.getElementById("square").style.height = '235px'
    document.getElementById("square").style.border = '2px solid rgb(255,215,0)';
    document.getElementById("square").style.backgroundColor = 'rgb(248, 226, 103)';
    document.getElementById("achieved").style.display = 'block';
    output.innerHTML = 380.23 / 235;

}

