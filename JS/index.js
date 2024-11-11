
//devo inserirla all'interno della class per creare gli user. Cancello quanto scritto prima e inserisco tutto in un unico blocco//

class User {
    constructor (_firstName, _lastName, _age, _location){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    ageComparison(){
        if (this.age>utente2.age) {return `${this.firstName} is older than ${utente2.firstName}`
        //vado a prendere l'età dell'oggetto corrente con this.age e ritorno la scritta con this.firstName per andare a prendere il valore della proprietà firstName delle due istanze//
        
        } else if (this.age<utente2.age){return `${this.firstName} is younger than ${utente2.firstName}`}
    }
    
    }

    //se l'istanza "corrente" a cui accedo con this è più grande scrivo che è più grande, altrimenti scrivo che è più piccola//
    //spiego l'if statement: funzione ageComparison scritta senza function perché si trova all'interno della class. se l'età dell'oggetto corrente è maggiore dell'età del secondo oggetto//
    //ritorna la scritta nome dell'oggetto corrente is older than nome del secondo oggetto che sto comparando//
    //altrimenti scrivi che è più giovane, andando a prendere i valori allo stesso modo//
    //posso comparare solo due oggetti alla volta, uno è quello corrente.//
    


const utente1 = new User ('Patricia', 'Badji', 35, 'Bruxelles')//
console.log('Utente1', utente1)

const utente2 = new User ('Pippo', 'De Paperis', 20, 'Paperopoli')
console.log('Utente2', utente2)

console.log(utente1.ageComparison(utente2))//


const utente2 = new User ('joker', 'esfkjhesfkjh', 52, 'asklhjnf')
console.log(utente1.ageComparison(utente2))


//funziona//


//ESERCIZIO 2//

class Pet {
    constructor (_petName, _ownerName, _typeOfPet, _breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.typeOfPet = _typeOfPet
        this.breed = _breed
    }

    sameOwner(){
        if (this.ownerName === pet2.ownerName) {return `${this.petName} ha lo stesso padrone di ${pet2.petName}`}
        else if (this.ownerName != pet2.ownerName) {return `${pet2.ownerName} è stato inserito come padrone di ${pet2.petName}`}}}

const moka = new Pet ('Moka', 'Patricia', 'dog', 'french bulldog')
console.log('Moka è ', moka)//
const pet2 = new Pet ('Olga', 'Barbara', 'dog', 'mixed breed')
console.log('Olga è ', olga)//

console.log(moka.sameOwner(pet2))

//spiego la funzione: se il nome del padrone dell'istanza di riferimento è uguale a quello della nuova istanza, la console mostra un messaggio, altrimenti ne mostra un altro//
//comparo sempre due soli oggetti, come prima//

//funziona//

