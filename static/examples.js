function showall(){
    var x,i;
    x = document.getElementsByClassName('content_header') ;
    for(i = 0 ; i < x.length ; i++){
        x[i].style.display = 'block' ;
    }
}

function hideall(){
    var x,i;
    x = document.getElementsByClassName('content_header') ;
    for(i = 0 ; i < x.length ; i++){
        x[i].style.display = 'none' ;
    }
}


function filterfunc(x){
    if (x!="all"){
        hideall();
        document.getElementById(x).style.display = 'block';
    }
    else{
        showall();
    }
}

window.onload = (event) => {
    showall();
  };
  