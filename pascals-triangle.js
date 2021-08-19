export const rows = (num = 0, count = 0, array = []) => {
     if (num === count) return array
     if (count === 0) {
          array.push([1])
     } else {
          array[count] = [...array[count - 1]].map((num, index, array) =>
               num && array[index - 1] ? num + array[index - 1] : 1
          )
          array[count].push(1)
     }
     return rows(num, count + 1, array)
}
