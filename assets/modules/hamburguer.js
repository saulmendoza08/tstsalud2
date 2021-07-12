const d = document;
export default function hamburguer(){
    const $ham = d.querySelector("#hamburguer");
    d.addEventListener("click",e=>{
        if(e.target.matches("#hamburguer")|| e.target.matches(`#hamburguer *`)){
            $ham.classList.toggle("is-active");
            d.querySelector("aside").classList.toggle("is-active");
        }
        if(e.target.matches("aside a")||e.target.matches("svg")||e.target.matches("svg *")){
            $ham.classList.remove("is-active");
            d.querySelector("aside").classList.remove("is-active");
        }
    })
}