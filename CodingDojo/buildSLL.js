class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }

    addFront(value){
        let new_node = new Node(value);
        //check if the list is empty
        //if empty make place new node as head
        if(this.head == null){
            this.head = new_node;
            return this;
        }
        //if not empty, make new node points to head and 
        //place the new node as head.
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    //Write a method to remove the head node and return the
    //new list head node. If the list is empty, return null.
    removeFront(){
        if(!this.head){
            console.log("this LinkedList is empty!")
            return this;
        }
        var removed_node = this.head;
        this.head = removed_node.next;
        return this.head;
    }
    //Write a method to return the value (not the node) 
    //at the head of the list. If the list is empty, return null.
    front(){
        if(!this.head){
            return null;
        }
        return this.head.data
    }
    findSum(){
        let sum = 0;
        if(!this.head){
            return sum;
        }
        let runner = this.head;
        while(runner !== null){
            sum += runner.data;
            runner = runner.next
        }
        return sum;
    }
    //check if LL contains a value
    contains(value){
        if(!this.head){
            return false;
        }
        let runner = this.head;
        while(runner != null){
            if(runner.data == value){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    length(){
        let length = 0;
        if(!this.head){
            console.log("Linked List is empty!");
            return length;
        }
        let runner = this.head;
        while(runner != null){
            length += 1
            runner = runner.next
        }
        return length;
    }
    //method to show LL values in a list
    display(){
        let values = [];
        if(!this.head){
            console.log("Linked List is empty!");
            return length;
        }
        let runner = this.head;
        while(runner != null){
            values.push(runner.data);
            runner = runner.next;
        }
        return values;
    }
    max(){
        if(!this.head){
            console.log("Linked List is empty!");
            return null;
        }
        let max = this.head.data;
        let runner = this.head;
        while(runner != null){
            max = Math.max(runner.data, max)
            runner = runner.next;
        }
        return max;
    }
    min(){
        if(!this.head){
            console.log("Linked List is empty!");
            return null;
        }
        let min = this.head.data;
        let runner = this.head;
        while(runner != null){
            min = Math.min(runner.data, min)
            runner = runner.next;
        }
        return min;
    }
    average(){
        if(!this.head){
            console.log("Linked List is empty!");
            return null;
        }
        let sum =this.findSum();
        let length = this.length();
        return sum/length;
    }
    //to return the last value in LL
    back(){
        if(!this.head){
            console.log("Linked List is empty!");
            return null;
        }
        let runner = this.head;
        while(runner.next){
            runner = runner.next
        }
        return runner.data
    }
    insertNodeAtTail(val){
        let new_node = new Node(val)
        if(!this.head){
            this.head = new_node;
            return this.head;
        }
        let runner = this.head;
        while(runner.next){
            runner = runner.next
        }
        runner.next = new_node
        new_node.next = null
        return this.head;
    }
    //delete node by position
    deleteNode(position){
        if(!this.head){
            console.log("Linked List is empty!");
            return;
        }
        if(position == 0){
            this.removeFront()
            return;
        }
        let runner = this.head;
        let i = 1;
        //make runner = the previous node we need to delete
        while(runner.next && i < position-1){
            runner = runner.next
            i++;
        }
        if(runner == null || runner.next == null){
            return;
        }
        var nextNode = runner.next.next
        runner.next = nextNode
    }
    reverse(){
        if(!this.head){
            console.log("Linked List is empty!");
            return;
        }
        let runner =  this.head;
        let prevNode = null;
        let nextNode  =null;
        while(runner){
            nextNode = runner.next;
            runner.next = prevNode;
            prevNode = runner;
            runner = nextNode;
            nextNode = null;
        }
        this.head = prevNode;
        return this.head;
    }
}

SLL1 = new LinkedList();
SLL1.addFront(1);
SLL1.addFront(2);
SLL1.addFront(3);
// SLL1.addFront(5);
// SLL1.deleteNode(0)
// SLL1.addFront(9);
// SLL1.removeFront()
// SLL1.front()
// SLL1.insertNodeAtTail(141)
// SLL1.insertNodeAtTail(14)
SLL1.reverse()
console.log(SLL1);
// console.log(SLL1.back());