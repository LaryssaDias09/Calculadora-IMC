let peso = document.getElementById('weight_value');
let altura = document.getElementById('height_value');

let res = document.getElementById('res');
let image = document.getElementsByClassName('image');


function calcular(){
    let numPeso = Number(peso.value);
    let numAltura = Number(altura.value);

    let imc = numPeso / (numAltura ** 2)
  
    /*CSS*/
    document.body.style.color = '#fff'
     
    if(numPeso=="" || numAltura==""){ 
        window.alert("Por favor digite nos campos um valor")

    }else{
        res.innerHTML = `<h1>Seu IMC deu ${imc.toFixed(2)}</h1>`

        if (imc<18.5){
            res.innerHTML += `<p>Você está abaixo do peso</p>`
        }else if(imc<24.9){
            res.innerHTML += `<p>Você está com o peso normal</p>`
        }else if(imc<29.9){
            res.innerHTML += `<p>Você está com sobrepeso</p>`
        }else if(imc<34.9){
            res.innerHTML += `<p>Você está com obesidade grau 1</p>`
        }else if(imc<39.9){
            res.innerHTML += `<p>Você está com obesidade grau 2</p>`
        }else{
            res.innerHTML += `<p>Você está com obesidade grau 3 ou mórbida</p>`
        }
    }
  
}

