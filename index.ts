function maxSum(array:number[]):number{
  let maxSum = array[0]
  let currentSum = array[0]
  for (let i = 1; i<array.length; i++){
    currentSum = Math.max(array[i], currentSum+array[i])
    maxSum = Math.max(maxSum, currentSum)
  }
  return maxSum
}
const numbers = [-2,1,-3,4,-1,2,1,-5,4]
const result = maxSum(numbers)
console.log(result)