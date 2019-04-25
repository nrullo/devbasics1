class StringCalculator {
    add(values){
        const numbers = values.split(",");
        let sum = 0;
        numbers.forEach(number => {
            sum += Number(number);
        });
        return sum;
    }
}

module.exports = new StringCalculator();