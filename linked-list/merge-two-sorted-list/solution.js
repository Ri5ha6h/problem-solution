/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1 && !list2){
        return list1
    }
    if(list1 && !list2){
        return list1
    }
    if(!list1 && list2){
        return list2
    }
    const nL = []
    const nL2 = []
    while(list1){
        nL.push(list1.val)
        list1 = list1.next
    }
    while(list2){
        nL2.push(list2.val)
        list2 = list2.next
    }
    let newL = [...nL, ...nL2]
    newL = newL.sort((a, b) => a - b)
    let newHead = new ListNode(newL[0])
    let newTail = newHead
    for(let i = 1; i < newL.length; i++){
        newTail.next = new ListNode(newL[i])
        newTail = newTail.next
    }
    return newHead
};