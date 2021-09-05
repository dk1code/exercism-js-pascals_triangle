// export const rows = (num = 0, row = 0, result = []) => {
//      if (num === row) return result
//      if (row === 0) {
//           result.push([1])
//      } else {
//           result[row] = [...result[previousRow]].map((num, index, rowArray) =>
//                num && rowArray[index - 1] ? num + rowArray[index - 1] : 1
//           )
//           result[row].push(1)
//      }
//      return rows(num, row + 1, result)
// }

// export const rows = (num = 0, row = 0, result = []) => {
//      if (num === 0) return result
//      result.push([1])

//      while (++row < num) {
//           let previousRow = row - 1
//           result[row] = [...result[previousRow]].map((num, index, rowArray) => {
//                let previousNum = index - 1
//                return num && rowArray[previousNum] ? num + rowArray[previousNum] : 1
//           })
//           result[row].push(1)
//      }

//      return result
// }



export const rows = (num = 0, row = 0, result = []) => {
     const mapFunction = (num, index, previousRow = result[row - 1]) =>
          num && previousRow[index - 1] ? num + previousRow[index - 1] : 1
     
     if (num === 0) return result
     result.push([1])

     while (++row < num) {
          let previousRow = result[row - 1]
          result[row] = Array.from(previousRow, mapFunction)
          result[row].push(1)
     }

     return result
}
