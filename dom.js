const title = document.querySelector('h1');

console.log(title);

title.textContent = "Web page components"; //asigna un nombre nuevo al titulo

let topics = document.querySelector("#topics"); //con este query de requiere el #topics
//topics.style.color = "red"; //ejemplo

document.getElementById("topics").style.color = "purple"; //con este query no se requiere el id del elemento

let list = document.querySelector(".list"); 

list.style.border = "3px solid black";

let para = document.querySelector("p");

//para.style.backgroundColor = "lightblue"; //no necesita comando en el css

para.classList.add("background"); //debe tener el comando en el css

//document.querySelector("body").classList.add("background"); //cambia el fondo a negro

const image = document.querySelector("img");

image.setAttribute("src", "mission/imagesnew.jpg"); //cambia la imagen a una nueva


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = "blue";
})
