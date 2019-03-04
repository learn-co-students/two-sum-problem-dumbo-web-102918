function hashTwoSum(a,sum) {
  let elements = []
  a.forEach((num1, num2) => {
    if (num1 + num2 === sum) {
      let twoNums = [num2, num1]
      elements.push(twoNums)
    }
  })
  return elements
}
