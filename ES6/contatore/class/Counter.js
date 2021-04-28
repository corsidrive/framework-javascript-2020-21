class Counter {

    constructor(initial = 0,min = null,max = null){

        this.value = initial
        this.max = max === null ? null : Number(max)
        this.min = min === null ? null : Number(min)
        this.initial = initial;

        if(this.min !== null && this.initial < this.min) {throw new Error('initial è minore di min')}
        if(this.max !== null && this.initial > this.max) {throw new Error('initial è maggiore di max')}
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
        }else if(this.value > this.min ){
            this.value-- 
        }
    }
}

Counter.prototype.toString = () => `Counter initial ${this.iniziale} min ${this.min} max ${this.max}`

export default Counter;