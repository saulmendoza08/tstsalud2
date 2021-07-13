const d  = document;

export default function scrollMagic(){
   if(matchMedia('(min-width:768px)').matches){
    const elements = document.querySelectorAll('[data-anim]');


const observeElement = (entries, observer) => {
  entries
  .filter(entry => entry.isIntersecting)
  .forEach((entry) => {
      function anim(thing,del){
        thing.animate([
            {
                visibility: "hidden",
                opacity:"0",
                transform:"translateY(20px)"
            },{
                visibility: "visible",
                opacity:"1",
                transform:"translateY(0px)"
            }],
            {
                delay:`${del}`,
                duration: 600,
                iterations: 1,
                fill: 'forwards'
                
            }

          );
      }
      if(entry.target.id==="section1"){
          let delay=0;
          entry.target.querySelectorAll("#first-call,.video-side").forEach((video) =>{
              anim(video,delay);
              
          });
          delay+=400;
          anim(entry.target.querySelector("p"),delay);
          delay+=400;
          entry.target.querySelectorAll("button,ul").forEach((video) =>{
            anim(video,delay);
            
        });
          
          
      }
      if(entry.target.id==="section3"){
          let delay=0
          entry.target.querySelectorAll(".card").forEach(card => {
              anim(card,delay);
              delay+=400;
          })
      }
      if(entry.target.id==="section4"){
        let delay=0,
        delayCards=0;
        
        anim(entry.target.querySelector(".row"),delay);
        delay+=400;
        entry.target.querySelectorAll(".card").forEach(card => {
            anim(card,delay);
              delay+=300;
        })

    }
    if(entry.target.classList.contains("row")){
        let delay=0;
        entry.target.querySelectorAll("div").forEach(div => {
            anim(div,delay);
            delay+=100;
        })
    }
    if(entry.target.id==="section6"){
        let delay=0;
        entry.target.querySelectorAll(".row").forEach(row => {
            anim(row,delay);
            delay+=300;
        })
        
    

    }
    
    observer.disconnect();
  })
}

elements.forEach((element) => {
  const observer = new IntersectionObserver(observeElement, {
    
    threshold: .4
  });
  observer.observe(element);
});
   }
}