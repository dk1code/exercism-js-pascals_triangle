const FIRST_ROW = [1]

const pairs = row => {
     row = [0, ...row]
     return row.map((num, i) => [row[i], row[i + 1] ?? 0])
}

const nextRow = previousRow => {
     if (!previousRow) return FIRST_ROW
     return pairs(previousRow).map(
          ([leftValue, rightValue]) => leftValue + rightValue
     )
}

export const rows = (num = 0) => {
     const result = []
     if (num === 0) return result

     while (result.length < num) {
          const previousRow = result[result.length - 1]
          result.push(nextRow(previousRow))
     }

     return result
}
