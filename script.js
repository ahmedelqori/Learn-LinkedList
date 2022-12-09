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
}

let myLinkedList = new LinkedList(7);

myLinkedList.push(4);

// myLinkedList.unshift(5);

console.log(myLinkedList.shift()); // 4
