function formatString(input) {
    if (typeof input !== 'string') {
        return '';
    }

    return input.trim();
}

function formatNumberInternal(input) {
    if (typeof input === 'number') {
        // check if input in an integer
        if (input % 1 === 0) {
            return input;
        }

        return Math.round(input * 100) / 100;
    } else if (input === undefined || input == null) {
        return 0
    } else if (typeof input !== "string") {
        return 0
    }

    const trimmedString = input.trim();

    if (trimmedString === "") {
        return 0;
    } else if (!/\d/.test(trimmedString)) {
        return 0;
    } else if (trimmedString.includes(".")) {
        return Math.round(parseFloat(trimmedString) * 100) / 100;
    } else {
        return parseInt(trimmedString);
    }
}

function formatNumber(input) {
    let result = formatNumberInternal(input);
    return Math.abs(result);
}

export {
    formatString,
    formatNumber
}