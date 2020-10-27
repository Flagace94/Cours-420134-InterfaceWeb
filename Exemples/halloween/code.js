function decompte() {
    var j = new Date();
    var halloween = new Date(2020, 9, 31);
    var nbJours = Math.floor((halloween- j )/1000/60/60/24);
    if (j>halloween) {
        nbJours = 0;
    }
    document.getElementById("jours").innerHTML = nbJours;
}

function animationIN(){
    nbElement = document.getElementById("decompte").getElementsByClassName("texteBoite").length
    for(i=0;i<nbElement;i++){
        document.getElementById("decompte").getElementsByClassName("texteBoite")[i].style.display = "none";
    }
    document.getElementById("bat").style.display = "block"; 
}

function animationOUT(){
    nbElement = document.getElementById("decompte").getElementsByClassName("texteBoite").length
    for(i=0;i<nbElement;i++){
        document.getElementById("decompte").getElementsByClassName("texteBoite")[i].style.display = "block";
    }

    document.getElementById("bat").style.display = "none"; 
}