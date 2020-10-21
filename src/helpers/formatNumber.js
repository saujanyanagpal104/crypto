export const formatNumber = (number) => {
    let numberSplit = number.toString().split(".");
    numberSplit[0] = numberSplit[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numberSplit.join(".");
}