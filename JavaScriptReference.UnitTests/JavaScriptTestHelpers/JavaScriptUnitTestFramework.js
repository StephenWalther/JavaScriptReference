
var assert = {

    areEqual: function (expected, actual, message) {
        if (expected !== actual) {
            var errorDescription = "Expected value " + expected
                + " is not equal to " + actual + ".";
            if (message) {
                errorDescription = errorDescription + " " + message;
            }
            throw new Error(errorDescription);
        }
    }

};


var arrayAssert = {
    // IE does not support indexOf, so we loop
    contains: function (array, element, message) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === element) {
                return true;
            }
        }
        var errorDescription = "Could not find element in array.";
        if (message) {
            errorDescription = errorDescription + " " + message;
        }
        throw new Error(errorDescription);
    },

    doesNotContain: function (array, element, message) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === element) {
                var errorDescription = "Found element in array.";
                if (message) {
                    errorDescription = errorDescription + " " + message;
                }
                throw new Error(errorDescription);
            }
        }

    }


};