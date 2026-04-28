export const timeRange: string[] = ["7-10", "10-13", "13-16", "16-19", "19-22"]

export let firstHalfDate: number[] = []
for (let i: number = 1; i < 16; i++) {
    firstHalfDate.push(i)
}
console.log(firstHalfDate)

export let secondHalfDate: number[] = []
for (let i: number = 16; i <= 31; i++) {
    secondHalfDate.push(i)
}

console.log(secondHalfDate)