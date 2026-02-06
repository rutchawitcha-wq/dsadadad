class Node{
    constructor(elem){
        this.element = elem
        this.next = null
    }
}

class Linklist{
    constructor(){
        this.firstNode = null
        this.lastNode = null
        this.length = 0
    }

    push(value){
        const newNode = new Node(value)
        if(this.firstNode == null){
            this.firstNode = newNode
            this.lastNode = newNode
        }
        else{
            this.lastNode.next = newNode    
            this.lastNode = newNode
        }
        this.length++
    }

    unshift(value){
        const newNode = new Node(value)
        if(this.firstNode == null){
            this.firstNode = newNode
            this.lastNode = newNode
        }
        else{
            newNode.next = this.firstNode
            this.frstNode = newNode
        }
        this.length++
    }

    shift(){
        if(this.firstNode == 0){
            return undefined
        }else{
        let currentNode = this.firstNode
        this.firstNode = this.firstNode.next
        this.length--
        if(this.firstNode == null){
            this.lastNode = null
        }
        return currentNode
        }
    }
}


let mylist = new Linklist()
console.log(mylist)
mylist.unshift("a")
console.log(mylist)
mylist.unshift("b")
console.log(mylist)
mylist.unshift("c")
console.log(mylist)

let d = mylist.shift()
console.log(mylist)
console.log("data to delete :",d.element)
d = mylist.shift()
console.log(mylist)
console.log("data to delete :",d.element)
d = mylist.shift()
console.log(mylist)
console.log("data to delete :",d.element)


// let mylist = new Linklist()
// console.log(mylist)
// mylist.push("a")
// console.log(mylist)
// mylist.push("b")
// console.log(mylist)
// mylist.push("c")
// console.log(mylist)



// const newNode = new Node("a")
// console.log(newNode)
// console.log("element : ",newNode.element)
// console.log("next :",newNode.next)
