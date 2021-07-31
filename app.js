const counters = document.querySelectorAll(".counter");
counters.forEach((el) => {
    el.innerHTML=0;
    
    const updateCounter = () => {
       const target_count= +el.getAttribute("data-target");
       const init_value=Number(el.innerHTML);
       const incre_count = target_count /100;
       if(init_value < target_count){
           el.innerHTML =`${init_value + incre_count}`;
           setTimeout(updateCounter,10)
       } else {
           el.innerHTML = target_count;
       }
   }

  updateCounter();
});