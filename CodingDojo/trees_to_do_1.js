class BTNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    // Create an add(val) method on the BST object to add new value to the tree. 
    // This entails creating a BTNode with this value and connecting it at the appropriate place in the tree.
    //  Unless specified otherwise, BSTs can contain duplicate values.
    
    add(value) {
        if(this.root){
            let runner = this.root;
            while(runner){
                if(value > runner.value){
                    if(runner.right){
                        runner = runner.right;
                    }
                    else{
                        runner.right = new BTNode(value)
                        return this
                    }
                }
                else{
                    if(runner.left){
                        runner = runner.left;
                    }
                    else{
                        runner.left = new BTNode(value)
                        return this;
                    }
                }
            }
        }
        this.root = new BTNode(value);
        return this;
    }
    // Create a contains(val) method on BST that returns whether the tree contains a given value.
    //  Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.
    contains(value){
        let runner = this.root;
        while(runner){
            if(runner.value === value){
                return true
            }
            else if(runner.value > value){
                runner = runner.left
            }
            else if(runner.value < value){
                runner = runner.right
            }
        }
        return false
    }
    // Create a min() method on the BST class that returns the smallest value found in the BST.
    min(){
        let runner = this.root, min = this.root.value;
        while(runner.left){
            if(runner.left.value < min){
                min = runner.left.value
            }
            runner = runner.left;
        }
        return min;
    }
    max(){
        let runner = this.root, max = this.root.value;
        while(runner.right){
            if(runner.right.value > max) max = runner.right.value
            runner = runner.right
        }
        return max;
    }
    // Write a size() method that returns the number of nodes (values) contained in the tree.
    size(){
        if(this.root == null) 0;
        function sizeHelp(runner) {
            if (!runner) {
                return 0;
            }
            return 1 + sizeHelp(runner.left) + sizeHelp(runner.right);
        }
        return sizeHelp(this.root);
    }
    isEmpty(){
        if(this.root) return false;
        return true;
    }
}
tree = new BST()
tree.add(1).add(87).add(4).add(-1)
console.log(tree.contains(0))
console.log(tree.max())
console.log(tree.size())
console.log(tree.isEmpty())