export const timeRange: string[] = ["7-10", "10-13", "13-16", "16-19", "19-22"]


export const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
}

const today = new Date();
export const thisYear: number = today.getFullYear()
export const thisMonth: number = today.getMonth()
export const monthArray: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const isLeapYear = (year: number) => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;

