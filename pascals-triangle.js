const FIRST_ROW = [1]

const pairs = row => {
     row = [0, ...row]
     return row.map((num, i) => [row[i], row[i + 1] ?? 0])
}

const newRow = lastRow => {
     if (!lastRow) return FIRST_ROW
     return pairs(lastRow).map(
          ([leftValue, rightValue]) => leftValue + rightValue
     )
}

export const rows = (num = 0) => {
     const result = []
     if (num === 0) return result
     let row = 0

     while (row < num) {
          const lastRow = result[row - 1]
          result[row] = newRow(lastRow)
          row++
     }

     return result
}
