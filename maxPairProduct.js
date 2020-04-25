Given an array a, find the greatest number in a that is a product of two elements in a. If there are no two elements in a that can be multiplied to produce another element contained in a, return -1.

Example

For a = [10, 3, 5, 30, 35], the output should be
maxPairProduct(a) = 30.

Explanation: 30 is a product of 10 and 3.

For a = [2, 5, 7, 8], the output should be
maxPairProduct(a) = -1;

For a = [10, 2, 4, 30, 35], the output should be
maxPairProduct(a) = -1;

For a = [10, 2, 2, 4, 30, 35], the output should be
maxPairProduct(a) = 4.

Explanation: 4 is a product of 2 and 2.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 105,
1 ≤ a[i] ≤ 104.

[output] integer

The greatest element in a such that it is the product of other two elements from a.




function maxPairProduct(a) {
   let result = []; 
    for ( let i = 0; i<a.length-1; i++ ) {
       for ( let k = i+1; k<a.length; k++ ) {
         let num = a[i]*a[k]
         if (a.includes(num)){
            result.push(num); 
         }
       }
    }
    return result.length<1 ? -1 : Math.max(...result)
}
