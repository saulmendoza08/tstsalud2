const d= document;
export default function aside(){
   const $nav=d.querySelector(".nav"),
   $newNav= $nav.cloneNode(true),
   $aside= d.querySelector("aside");
   $aside.appendChild($newNav);



}