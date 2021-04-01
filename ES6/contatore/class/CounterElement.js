class CounterElement {

    constructor(selector){
        // .class
        const el = document.querySelector(selector)
        this.addBtn = el.querySelector('.btn-add')
        this.lessBtn = el.querySelector('.btn-less')
        this.display = el.querySelector('.display')
        
        this.addBtn.addEventListener('click',this.addBtnHandler)
        console.log(this)
    }

    addBtnHandler(){
        console.log("hai premuto btn add")
    }

}

export default CounterElement