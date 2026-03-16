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
    //Approach 1 
    // let prev = new ListNode();
    // let head = prev;
    // while(list1 || list2){
    //     let newNode = new ListNode();
    //     prev.next = newNode;
    //     if(list1 && list2){
    //         if(list1.val >= list2.val){
    //             newNode.val = list2.val ;
    //             list2 = list2.next;
    //         }else{
    //             newNode.val = list1.val ;
    //             list1 = list1.next;
    //         }
    //     }else if(!list1 && list2){
    //         newNode.val = list2.val ;
    //         list2 = list2.next;
    //     }else if(list1 && !list2){
    //         newNode.val = list1.val ;
    //         list1 = list1.next;
    //     }
    //     prev = newNode;
    // }
    // return head.next;

    // //Approach 2 - using dummy Node
    let curr = new ListNode();
    let head = curr;
    while(list1 && list2){
        if(list1.val <= list2.val){
            curr.next = list1;
            list1 = list1.next;
        }else{
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    if(list1){
        curr.next = list1;
    }
    if(list2){
        curr.next = list2;
    }

    return head.next;

    //Approach 3 - without using dummy node;
    // if(!list1)
    //     return list2;
    // else if(!list2)
    //     return list1;
    // let start = null;
    // if(list1.val <= list2.val){
    //     start = list1;
    //     list1 = list1.next;
    // }else{
    //     start = list2;
    //     list2 = list2.next;
    // }
    // let head = start;
    // while(list1 && list2){
    //     if(list1.val <= list2.val){
    //         start.next = list1;
    //         list1 = list1.next;
    //     }else{
    //         start.next = list2;
    //         list2 = list2.next;
    //     }
    //     start = start.next;
    // }
    // if(list1){
    //     start.next = list1;
    // }
    // if(list2){
    //     start.next = list2;
    // }
    // return head;
};