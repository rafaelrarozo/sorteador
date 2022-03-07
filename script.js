


function funcSortear(){
    
    let np = document.getElementById("entrada").value-1;
    let sorteado = Math.round(Math.random()*np);
    document.getElementById("result").innerHTML =sorteado+1;
}


