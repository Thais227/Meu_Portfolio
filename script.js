//Função que aplica as animações de habilidades
let projetos = 0;
let cursos =0;
let intervalProjetos = null;
let intervalCursos = null;
function animationNumeros(){
    var numeros = document.getElementById("numeros");
    var distancia_numeros = window.innerHeight - numeros.getBoundingClientRect().top;
    if(distancia_numeros >= 200 && projetos ==0){
        intervalo = setInterval(atualizarContador, 60);
    }
}


function atualizarContador() {
    // Verificamos se ligamoso ate 50
    if (projetos <=4 ) {
        // Mostramos o valor atual do contador em um elemento com id "contador"
        document.getElementById("contProjetos").textContent = projetos;
        // Incrementamos o contador em 1
        projetos++;
    } else {
        // Se temos ligado ate 50, determinamos o intervalo
        clearInterval(intervalProjetos);
    }
    // Verificamos se temos ligado ate 40
    if (cursos <= 6) {
        // Mostramos  o valor atual do contador em um elemento com id "contador"
        document.getElementById("contCursos").textContent = cursos;
        // Incrementamos el contador en 1
        cursos++;
    } else {
        // Se temos ligado ate 50, determinamos o intervalo
        clearInterval(intervalCursos);
    }
}
//detecto o scrolling para aplicar a animação da  barra de habilidades
window.onscroll = function(){
    animationNumeros();
    animationSkills();
}
let visible=false;

function abrirCerrarMenu(){    
    if(visible==false){
        document.getElementById("nav").className = "responsive";
        visible = true;
    }else{
        document.getElementById("nav").className = "";
        visible = false;
    }
}

function animacionesSkills(){
    var skills = document.getElementById("sobremim");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 400){
        document.getElementById("dw").className = " progreso dw";
        document.getElementById("dg").className = " progreso dg";
        document.getElementById("bd").className = " progreso bd";
        document.getElementById("md").className = " progreso md";
    }
}