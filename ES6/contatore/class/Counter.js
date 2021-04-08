class Counter {

    constructor(iniziale = 0,min = null,max = null){
        this.value = iniziale
        this.max = max;
        this.min = min;
        console.log("construct",this.min);   
    }

    increment(){

        if(this.max === null) {
            this.value++
        }else if(this.value < this.max ){
            this.value++ 
        }
        
    }

    decrement(){
       
        if(this.min === null) {
            this.value--
        }else if(this.value > this.max ){
            this.value-- 
        }
    }
}

export default Counter;