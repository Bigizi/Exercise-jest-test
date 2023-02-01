const stringLength = (str) => {
    if(str.length < 1 || str.length > 10) {
        throw new Error('invalid string');
    }
    return str.length;
}
export default stringLength;
