//You are keeping the scores for a baseball game with strange rules. 
//At the beginning of the game, you start with an empty record.
// You are given a list of strings operations, where operations[i] is the ith operation you 
//must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

// Example 1:
// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.

const getbaseballscore=(operations)=>{
let record=[];

for (const operation of operations) {
   if(operation==='C'){
    record.pop();
   }else if(operation==='D'){
   record.push(record[record.length-1]*2);
   }else if(operation==='+'){
    record.push(record[record.length-1]+record[record.length-2]);
   }else{
    record.push(parseInt(operation));
   }
 }
   // Calculate the sum of all scores
   return record.reduce((total, rec) => total + rec, 0);
}


let Input = ["5","2","C","D","+"];
console.log(getbaseballscore(Input));//output :30
let Input2 = ["5","-2","4","C","D","9","+","+"]
console.log(getbaseballscore(Input2));
//Output: 27