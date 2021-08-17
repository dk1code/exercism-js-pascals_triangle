// export
const rows = num => {
     const output = new Array(num).fill([])
     if (num === 0) return output
     output[0] = [1]
     if (num === 1) return output
console.log(output[1]);
  for (let i = 1; i < num; i++) {
    output[i].push(1)
    output[i].push(1)
  }
     return output
}

console.log(rows(4))
