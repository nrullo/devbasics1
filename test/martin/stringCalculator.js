class StringCalculator {
    add(values) {
        const numbers = this.parseAndSplitToNumbers(values);
        let sum = 0;
        numbers.forEach(number => {
            sum += Number(number);
        });
        return sum;
    }

    parseAndSplitToNumbers(values) {
        return values.replace(/\n/g, ",").split(",");
    }
}

module.exports = new StringCalculator();