const capitalize = (str) => {
    if (string.match(/[0-9]/)) {
        throw new Error('invalid string');
      }
      
    let str1 = str.charAt(0).toUpperCase() + str.slice(1);
    return str1;
}

export default capitalize;