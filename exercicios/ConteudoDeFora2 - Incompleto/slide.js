'use strict'
class slideStories{
    constructor(id){
       this.slide = document.querySelector(`[data-slide="${id}"]`);
       this.active = 0;
       console.log(this.slide);
       this.activeSlide(1);
       this.init();
    }
    activeSlide(index){
       this.active = index;
       this.items = this.slide.querySelectorAll('.slide-items > *');
       this.items[index].classList.add('active');
    }
   
    prev(){
        
    }
   
    next(){
        console.log(this);
        this.activeSlide(this.active + 1);
    }
   
    addNavigation(){
        const nextBtn = this.slide.querySelector('.slide-next');
        nextBtn.addEventListener('click', this.next);
    }
   
    init() {
        this.next = this.next.bind(this);
        this.addNavigation();
   }
   
   
   
   
   
   
   }
   
   new slideStories('slide');