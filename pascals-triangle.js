// // export
// const rows = num => {
//     //  const output = [...new Array(num).fill([])]
//   // const output = [[],[],[],[]]
//   const output = []
//   if (num === 0) return output
//   console.log(output);
//   for (let i = 0; i < num; i++) {
//     output.push([])
//   }
//      output[0] = [1]
//      if (num === 1) return output
// console.log(output[1]);
//   for (let i = 1; i < num; i++) {
//     output[i].push(1)
//     for (let j = 0; j < output[i - 1].length; j++) {

//     }
//     output[i].push(1)
//   }
//      return output
// }

// console.log(rows(2))
// let output = [[1], [], []]
// let i = 0
// console.log(output[i-1]);

export const rows = (num = 0, count = 0, array = []) => {
     if (num === count) return array
     if (count === 0) {
          array.push([1])
     } else {
          console.log("array: ",array, "Count: ",count)
          console.log(array[count - 1])
          array[count] = [...array[count - 1]]
               .map((num, index, array) => num && array[index - 1]?num + array[index - 1]: 1)
               array[count].push(1)
          console.log(array)
     }
     return rows(num, count + 1, array)
}
