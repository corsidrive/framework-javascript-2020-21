import Counter from './Counter.js'; // require 


let contatore = new Counter()
contatore.increment()
contatore.increment()

console.log("dopo due incrementi senza argomenti nel costruttore",contatore.value == 2);


contatore = new Counter(10)
contatore.increment()
contatore.increment()

console.log(contatore.value == 12);

/**
 * 1 arg partenza
 * 2 arg min
 * 3 arg max
 */
contatore = new Counter(10,10,15)
contatore.increment() //11
contatore.increment() // 12
contatore.increment() // 13

console.log("partendo da 10 mi aspetto che il contatore vale 13",contatore.value == 13)

contatore.increment() // 14
contatore.increment() // 15
contatore.increment() // 15
contatore.increment() // 15

console.log("il valore massimo del contatore deve essere 15",contatore.value == 15)

contatore = new Counter(10,10,15)
contatore.decrement() // 10
contatore.decrement() // 10
contatore.decrement() // 10
contatore.decrement() // 10

console.log("il valore minimo  del contatore deve essere 10",contatore.value == 10)


//new CounterElement('#counterA')
//new CounterElement('#counterB')

