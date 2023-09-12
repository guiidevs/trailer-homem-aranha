const btnImg1 = document.querySelector("#btn-img1");
const btnImg2 = document.querySelector("#btn-img2");
const btnImg3 = document.querySelector("#btn-img3");
const btnTrailer = document.querySelector("#assitir-trailer");
const imagens = document.querySelector(".imagens");
const info = document.querySelector(".info");
const back = document.querySelector(".background");
const galeria = document.querySelector(".galeria");

let chave = 900;


btnImg1.addEventListener("click", ()=>{rodar(100); chave = 0});
btnImg2.addEventListener("click", ()=>{rodar(200)});
btnImg3.addEventListener("click", ()=>{rodar(300)});


    setTimeout(()=>{btnImg2.style.transform = "scale(1.3)";}, 1000)
    setTimeout(()=>{btnImg2.style.transform = "scale(1.0)";}, 2000)
    setTimeout(()=>{btnImg2.style.transform = "scale(1.3)";}, 3000)
    setTimeout(()=>{btnImg2.style.transform = "scale(1.0)";}, 4000)
    setTimeout(()=>{btnImg2.style.transform = "scale(1.3)";}, 5000)
    setTimeout(()=>{btnImg2.style.transform = "";}, 6000)



function rodar(num){
    let cond = num;
    if(`translateY(-${num}vh)` == imagens.style.transform){
        cond = 0;
        back.style.display = "block";
    }else{
        back.style.display = "none";
    }
    imagens.style.transform = `translateY(-${cond}vh)`;
}