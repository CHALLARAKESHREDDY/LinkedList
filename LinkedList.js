// LinkedList one of the custom data structure

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    IsEmpty() {
        return  this.size===0
    }

    Prepend(value) {
        let node=new Node(value)
        if (this.IsEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    Append(value) {
        if (this.IsEmpty()) {
            let node = new Node(value)
            node.next= this.head
            this.head=node
        }else{
            let current=this.head
            while(current.next){
                current=current.next
            }
            current.next=new Node(value)
        }
        this.size++
    }

    Clear() {
        this.head=null
        this.size=0
        console.log("LinkedList deleted")
    }

    Remove(index){
         if (index<0 || index>this.size) {
            console.log("Index out of Range")
             return;
        }
         if (this.IsEmpty()){
             console.log("No Elements to Delete")
             return ;
        } if(index===0){
             this.head=this.head.next
             this.size--
             return;
        }
         else {
            let current=this.head
            for (let i=0;i<index-1;i++){
                current=current.next
            }
            let tailList=current.next.next
            current.next=tailList
            this.size--
        } 
        
    }

    Insert(value,index){
        if (index<0 || index>this.size) {
            console.log("Index out of Range")
            return ;
        }
        if (this.IsEmpty() || index==0){
             let node = new Node(value)
             node.next= this.head
             this.head=node
             this.size++
            return ;
        } else {
            let current=this.head
            for (let i=0;i<index-1;i++){
                current=current.next
            }
            let tailList=current.next
            let node=new Node(value)
            current.next=node
            node.next=tailList
            this.size++
            console.log(`Element deleted at ${index}`)
        } 
    }

    Access(index) {
        if (this.IsEmpty()){
             console.log("No Elements to Delete")
             return ;
        }
        if (index<0 || index>this.size) {
            console.log("Index out of Range")
            return ;
        }else{
            let current=this.head
            if (index===0){
                console.log(current.value)
                return;
            }
            for (let i=0;i<index;i++){
                current=current.next
            }
            console.log(current.value)
        }
    }

    Reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    this.head = prev;
    
}


    Print() {
        if (this.IsEmpty()){
            console.log("Empty LinkedList")
        }else{
            let current=this.head
            let outputList=""
            while(current){
                if (current.next===null){
                    outputList=outputList+`${current.value} -->null`
                }else{
                outputList=outputList+`${current.value} -->`
                }
                current=current.next
            }
            console.log(outputList)
        }
    }
}

const linkedList=new LinkedList()
linkedList.Prepend(9)
linkedList.Print()
linkedList.Prepend("Hii")
linkedList.Prepend(23)
linkedList.Prepend("Rakesh")
linkedList.Prepend("React Native")
linkedList.Append("Mithu")
linkedList.Append("Bintu")
linkedList.Insert("Challas",0)
linkedList.Print()
linkedList.Reverse()
linkedList.Print()
linkedList.Remove(0)
linkedList.Clear()
linkedList.Print()
linkedList.Reverse()
linkedList.Print()
linkedList.Access(2)
