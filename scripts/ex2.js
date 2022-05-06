let num1 = parseInt(prompt("Número 1: "));
let num2 = parseInt(prompt("Número 2: ")); 

// alert(num1 + num2);
document.write(num1+num2);

// Selecionando o elemento h1 com id "titulo"

// 1ª Forma
document.getElementById("titulo").innerHTML = "Exemplo Javascript";
// 2ª Forma
document.querySelector("#titulo").style.backgroundColor = "lightBlue";
//3ª Forma
titulo.style.color="white"

if(confirm("Tudo bem com você?")){
    alert("Que bom, você não é vascaíno.!!!");
}else{
    alert("Você é vascaíno . . . :(");
}

let estado = prompt("Informe seu estado: ");

switch(estado.toLowerCase()){
    case "rondonia":
        alert("legal");
        break;
    case "bahia":
        alert("muito legal");
        break;
    case "rio grande do sul":
        alert("que frio");
        break;
    default:
        alert("você é de outro estado e deve ser vascaíno");
}