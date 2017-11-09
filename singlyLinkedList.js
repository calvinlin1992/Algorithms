// THIS IS THE ES5 WAY OF CREATING A SINGLY LINKED LIST
//
// function LinkedList() {
//   this.head = null;
// }

// LinkedList.prototype.push = function(val) {
//   var node = { value: val, next: null, };

//   if (!this.head) { this.head = node; }
//   else {
//     current = this.head;
//     while(current.next) {
//       current = current.next;
//     }
//     current.next = node;
//   }
// }

// ES6+ METHOD OF CREATING SINGLY LINKED LIST

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(val) {
    let node = { value: val, next: null, };
    let current;

    if (!this.head) { this.head = node; }
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }    
  }

  // need to update to cover the case of second to last linkedlist
  delete(k) { // delete the kth linkedlist Node, the first node is the 0th node
    if (!this.head) { // there's no linked list to delete
       return 
    } else if (!this.head.next && k === 0) { // delete the first and only node
      this.head = null;
    } else if (this.head.next && k === 0) {  // if k wants to delete the first object in the linkedlist
      this.head = this.head.next;
    } else {  // if the kth value exists 
      let current = this.head;
      let countDown = k;
  
      while (current.next && countDown > 0) {
        if (countDown === 1) {
          current.next = current.next.next;
          break;
        }
        current = current.next;
        countDown--;
      }

      if (!current.next && countDown > 1) {
        console.log(`position ${k} value doesn't exist`);
      } 
    }
  }

  find(valToFind) { // returns true if value in LinkedList matches valToFind, otherwise returns false
    let current = this.head;

    while (current.next) {
      if (current.value === valToFind) {
        return true;
      }
      current = current.next;
    }
    
    return false;
  }
}