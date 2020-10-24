module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenUnits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    const numStr = number.toString();

    function getBeforeHundred(number) {
        let ten = Math.trunc(number / 10);

        if (ten === 0) {
            return units[number];
        } else {
            if (ten === 1) {
                return tenUnits[number % 10];
            } else {
                let tmp = tens[ten - 2];
                if (number % 10 === 0) {
                    return tmp;
                } else {
                    return tmp + ' ' + units[number % 10];
                }
            }
        }
    }

    const hundred = Math.trunc(number / 100);

    if (hundred === 0) {
        return getBeforeHundred(number);
    } else {
        let res = units[hundred] + ' hundred';
        if (numStr[1] === '0' && numStr[2] === '0') {
            return res;
        } else {
            return res + ' ' + getBeforeHundred(number % 100);
        }
    }
}