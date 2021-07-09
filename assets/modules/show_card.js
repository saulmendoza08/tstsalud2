const d = document;
export default function showCard(){
   
    d.documentElement.style.setProperty("--show",`${d.querySelectorAll(".show-card .row").length*16}rem`)
    
    
const $btn = d.getElementById('btn-show'),
 $cards = d.querySelector('.show-card');

    d.addEventListener('click',e=>{
        if(e.target===$btn){
           
            if($cards.classList.contains('active')){
                $cards.classList.remove('active');
                
                $btn.textContent="Mostrar mas"
            }else{
                $cards.classList.add('active');
                $btn.textContent="Mostrar menos";
            }

        }
    })
}