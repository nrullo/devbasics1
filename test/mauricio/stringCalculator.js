class StringCalculator {
  validate(numbers, limit){
    let validNumbers = [];
    let nagativeNumbers = [];

    for (let i in numbers){
      if (this.isNumber(numbers[i])) {
        if (parseInt(numbers[i]) > limit) {
          numbers[i] = 0;
        }
        validNumbers.push(parseInt(numbers[i]));
        if (parseInt(numbers[i]) < 0) {
          nagativeNumbers.push(parseInt(numbers[i]));
        }
      }
    }

    if (nagativeNumbers.length > 0 ) {
      throw "Negatives not allowed: "+ nagativeNumbers;
    }

    return validNumbers;
  }

  isNumber(number){
    return !isNaN(parseFloat(number)) && isFinite(number);
  }

  sumTotal(total, num){
    return total + num;
  }

  split(array, splitCharacter=","){
    let newArray = [];
    let splitCharactersArray = [];
    let newLineRe = /(\r\n|\n|\r)/gm
    let splitCharacterRe = /\[.*?\]/g
    let delimiter = ",";

    if (splitCharacter.match(splitCharacterRe) != null) {
      splitCharactersArray = splitCharacter.match(splitCharacterRe);
    }

    if (array.length === 0) {
      throw 0;
    }

    if (array[array.length-1].match(newLineRe) == "\n") {
      throw "input is NOT ok: "+ array;
    }

    if (splitCharactersArray.length > 0 ) {
      newArray = array.replace(newLineRe, delimiter);
      newArray = newArray.replace(splitCharacterRe, delimiter);

      return newArray.split(delimiter);
    }

    newArray = array.replace(newLineRe, splitCharacter);

    return newArray.split(splitCharacter);
  }

  add(numbers, splitCharacter=",", limit = 1000){
    let numbersArray = [];
    let validNumbers = [];

    try {
      numbersArray = this.split(numbers, splitCharacter);
      validNumbers = this.validate(numbersArray, limit);
    } catch(error) {
      return error;
    }

    if (validNumbers.length < 1) {
      return numbers;
    }

    if (numbersArray.length == validNumbers.length) {
      return validNumbers.reduce(this.sumTotal);
    }

    return 0;
  }
}

module.exports = new StringCalculator();
