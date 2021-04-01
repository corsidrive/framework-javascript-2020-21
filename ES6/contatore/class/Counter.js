class Counter {

    
    constructor(iniziale = 0){
        this.value = iniziale
    }

    increment(){
        this.value++
    }

    decrement(){
        this.value--
    }
}

export default Counter;