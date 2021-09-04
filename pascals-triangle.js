// export const rows = (num = 0, row = 0, result = []) => {
//      if (num === row) return result
//      if (row === 0) {
//           result.push([1])
//      } else {
//           result[row] = [...result[row - 1]].map((num, index, rowArray) =>
//                num && rowArray[index - 1] ? num + rowArray[index - 1] : 1
//           )
//           result[row].push(1)
//      }
//      return rows(num, row + 1, result)
// }

export const rows = (num = 0, row = 0, result = []) => {
     if (num === 0) return result
     result.push([1])
     row += 1
     while (row < num) {
          result[row] = [...result[row - 1]]
               .map((num, index, rowArray) =>
                    num && rowArray[index - 1] ? num + rowArray[index - 1] : 1
               )
               result[row].push(1)
          row++
     }
     return result
}
