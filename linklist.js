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
        if(this.length == 0){
            return undefined
        }else{
        let currentNode = this.firstNode
        this.firstNode = this.firstNode.next
        currentNode.next = null
        this.length--
        if(this.firstNode == null){
            this.lastNode = null
        }
        return currentNode
        }
    }
pop(){
    if(this.length == 0){
            return undefined
    }
    let currentNode = this.firstNode
    let beforeNode = this.firstNode
    while(currentNode.next != null){
        beforeNode = currentNode
        currentNode = currentNode.next
    }
    this.lastNode = beforeNode
    this.lastNode.next = null
    this.length--
    if(this.length == 0){
        this.firstNode = null
        this.lastNode = null
    }
    return currentNode
}

get(index){
    if(index < 0 || index >= this.length){
        return undefined
    }
    let currentNode = this.firstNode
    for(let i = 0; i < index; i++){
        currentNode = currentNode.next
    }
    return currentNode
}

set(index, value){
    let temp = this.get(index)
    if(temp != undefined){
        temp.element = value
        return true
    }
    return false    
}
insert(index, value){
    if(index < 0 || index > this.length){
        return false
    }
    if(index == 0){
        return this.unshift(value)
    }
    if(index == this.length){
        return this.push(value);
    }
    const newNode = new Node(value)
    let beforeNode = this.get(index-1)
    newNode.next = beforeNode.next;
    beforeNode.next = newNode;
    this.length++
    return true
    }
    remove(index){
        if(index < 0 || index >= this.length){
            return undefined
        }
        if(index == 0){
            return this.shift()
        }
        if(index == this.length-1){
            return this.pop()
        }
        let beforeNode = this.get(index-1)
        let currentNode = beforeNode.next
        beforeNode.next = currentNode.next
        currentNode.next = null
        this.length--
        return currentNode
        }
    }



let mylist = new Linklist()
console.log(mylist)
mylist.push("a")
console.log(mylist)
mylist.push("b")
console.log(mylist)
mylist.push("c")
console.log(mylist)
mylist.push("d")
console.log(mylist)
mylist.remove(3)
mylist.insert(3,"u")
// mylist.set(1,"g")
// mylist.set(2,"o")


const out = document.getElementById("result")
console.log(out)
for(let i = 0; i < mylist.length; i++){
    let d = mylist.get(i);
    out.innerHTML += d.element

    if(i < mylist.length-1){
        out.innerHTML += "==>"
    }
}


// for(let i = 0; i < mylist.length; i++){
//     let d = mylist.get(i)
//     console.log("data : ",d.element)
//}

// let d = mylist.shift()
// console.log(mylist)
// console.log("data to delete :",d.elem)
// d = mylist.shift()
// console.log(mylist)
// console.log("data to delete :",d.elem)
// d = mylist.shift()
// console.log(mylist)
// console.log("data to delete :",d.elem)


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
