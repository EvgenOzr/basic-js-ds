const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  result = [];

  getUnderlyingList() {
    let finalObj = {}
    this.result = this.result.reverse()
    this.result.forEach((elem, index) => {
        if(index === 0) {
            finalObj = {
                value: elem,
                next: null
            }
        } else {
            let tempObj = Object.assign(finalObj)
            finalObj = {
                value: elem,
                next: tempObj
            }
        }
    })
    return finalObj
  }

  enqueue(value) {
    this.result.push(value)
  }

  dequeue() {
    let elem = this.result[0]
    this.result.shift()
    return elem
  }
}

module.exports = {
  Queue
};
