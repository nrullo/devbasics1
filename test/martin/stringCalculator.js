class StringCalculator {
    add(values){
        const numbers = values.replace(/\n/g, ",").split(",");
        let sum = 0;
        numbers.forEach(number => {
            sum += Number(number);
        });
        return sum;
    }
}

module.exports = new StringCalculator();