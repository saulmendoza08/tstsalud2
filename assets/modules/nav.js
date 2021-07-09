const d = document;
export default function navScroll(n){
    const $nav = d.getElementById(n)
    if(scrollY>15){
        $nav.classList.remove("nav-azul");
    }
    d.addEventListener('scroll',e=>{
        (scrollY>15)?$nav.classList.remove("nav-azul"):$nav.classList.add("nav-azul");
    })
}