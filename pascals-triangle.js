export const rows = (num = 0, row = 0, result = []) => {
     if (num === row) return result
     if (row === 0) {
          result.push([1])
     } else {
          result[row] = [...result[row - 1]].map((num, index, result) =>
               num && result[index - 1] ? num + result[index - 1] : 1
          )
          result[row].push(1)
     }
     return rows(num, row + 1, result)
}
