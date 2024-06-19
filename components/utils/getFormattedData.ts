export function getCurrentDate() {
    const date = new Date('2023-03-01');
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate

}