
// Write a program that outputs the top n elements from a list.

// Example:
// sort the array in ascending order
// largest(2, [7,6,5,4,3,2,1])
//  => [6,7]


function largest(n, array) {
    return array.sort((x,y)=> y-x).slice(0,n).sort((x,y)=>x-y)
    }