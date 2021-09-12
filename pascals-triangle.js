const FIRST_ROW = [1]

const nextRow = lastRow => {
     if (!lastRow) return FIRST_ROW
     let mapResult = lastRow.map(mapFunction)
     return [...mapResult, 1]
}

const mapFunction = (item, index, array) => {
     const leftValue = array[index - 1] ?? 0
     const rightValue = item
     return leftValue + rightValue
}

export const rows = (num = 0, row = 0, result = []) => {
     if (num === 0) return result

     while (row < num) {
          const lastRow = result[row - 1]
          result[row] = nextRow(lastRow)
          row++
     }

     return result
}