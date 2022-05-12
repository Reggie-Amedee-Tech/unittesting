function filterByTerm(inputArr, searchTerm) {
    if (searchTerm === '') return undefined;
    if (!inputArr.length) throw Error("inputArr cannot be empty"); // new line
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    });
  }
  
  module.exports = filterByTerm;