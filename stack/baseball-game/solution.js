/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const record = [];
    for(const item of operations){
        if(item === "C"){
            record.pop();
        }
        else if (item === "D"){
            record.push(2 * record[record.length - 1])
        }
        else if (item === "+"){
            record.push(record[record.length - 2] + record[record.length - 1])
        }
        else {
            record.push(+(item))
        }
    }
    
    if(record.length === 0){
        return 0
    }

    return record.reduce((total, num) => total + num, 0)
};