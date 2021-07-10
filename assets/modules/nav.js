const d = document;
export default function navScroll(n){
    const $nav = d.getElementById(n)
    if(scrollY>15){
        $nav.classList.remove("nav-tras");
    }
    d.addEventListener('scroll',e=>{
        (scrollY>15)?$nav.classList.remove("nav-tras"):$nav.classList.add("nav-tras");
    })
}