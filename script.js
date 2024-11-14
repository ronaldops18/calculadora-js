

const conteiner = document.getElementById("conteiner")
const box_num = document.getElementById("box_num")
const result = document.getElementById("result")



function mudar(value){
    
    result.innerHTML += value;

}


function calcular(){
    
    result.innerHTML = eval(result.value);
}

function limpar(){

    result.innerHTML = value = "";
    
}