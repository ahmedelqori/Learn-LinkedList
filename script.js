// [1] Classes

class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}

let cookieOne = new Cookie("green");

let cookietwo = new Cookie("blue");

// [2] Big O

// [3] Linked List

/*

    head                   tail
     ||                     ||
     11 => 3 => 23 => 7 => null
     
    
    
     ======> {
                value:11, <=== Head
                next:{
                        value:3,
                        next:{
                            
                            value:23,
                            next:{
                                value:7,
                                next:null  <=== tail
                            }
                        }
                    }
                } 
            }

*/

// [3-1] Constructor

/*
            constructor(value){}    ==> Create New Node 
            push(value){}           ==> Add Node To End
            unshift(value){}        ==> Add Node To Beginnig
            insert(index,value){}   ==> insert Node
*/

class Node {
  // Create New Node

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// const newNode = new Node(4);

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // Push Methode

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Pop Methode

  /*
            Pre
             ||
             11 => 3 => 23 => 7 => 4 => null 
                   ||
                   Temp

    */

  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let pre = this.tail;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  // Unshift Methode

  /*


                             head             tail
                              ||               ||
            4=>(null)     ==> 11 => 3 => 7 => null


  
  */

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Shift Methode

  /*
  

           temp    head      tail
            ||      ||        ||
        |   11=> |  3 => 23 => 7 => null    
  
  
  */

  shift() {
    if (!this.head) {
      return undefined;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.length--;
      if (this.length == 0) {
        this.tail = null;
      }
      return temp;
    }
  }

  // Get Methode

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  // Set Methode

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  // Insert

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  // remove item

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  // Reverse

  /*
      
         head            tail
          ||              ||
          11 => 3 => 23 => 7 => null
      
                   |
                   V
         temp          tail head
          ||              ||
          11 => 3 => 23 => 7 => null

                  |
                  V

        tail              head
          ||               ||
  null <= 11 <= 3 <= 23 <= 7 

      */

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(7);

myLinkedList.push(4);
// myLinkedList.push(3);
// myLinkedList.push(2);
// myLinkedList.set(1, 5);
// myLinkedList.unshift(5);
// myLinkedList.get(2).value;
// myLinkedList.insert(2, 100);
// myLinkedList.remove(0); //  => return 7
console.log(myLinkedList.reverse()); // 4
