reverseString = (string) => {
    let splitString = string.split("");
    let reverseString = splitString.reverse();
    let joinString = reverseString.join("");
    return joinString;
}
export default reverseString;