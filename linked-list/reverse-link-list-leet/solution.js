/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null){
        return head
    }
    let nL = [];
    while(head !== null){
        nL.push(head.val)
        head = head.next
    }
    nL = nL.reverse()
    let newHead = new ListNode(nL[0])
    let newTail = newHead
    for(let i = 1; i < nL.length; i++){
        newTail.next = new ListNode(nL[i])
        newTail = newTail.next
    }
    return newHead
};

// var reverseList = function(head) {
//     let prv = null
//     let curr = head;
    
//     while(curr) {
//         let next = curr.next;
//         curr.next = prv;
//         prv = curr;
//         curr = next;
//     }

//     return prv;
// };