// ===================== 01 ========================
function power(a, b) {
    if (b === 0) {
        return 1;
    }

    let result = 1;
    let base = a;
    let exponent = Math.abs(b);

    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    if (b < 0) {
        return 1 / result;
    }

    return result;
}

// Examples
console.log(power(2, 3));  
console.log(power(5, -2)); 
console.log(power(3, 0)); 
console.log(power(7, 1)); 


// ===================== 02 ========================
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let year = prompt("Enter a year:");

// year = parseInt(year);

// if (!isNaN(year)) {
//     if (isLeapYear(year)) {
//         alert( year + " is a leap year.");
//     } else {
//         alert( year + " is not a leap year.");
//     }
// } else {
//     alert("Please enter a valid year.");
// }



// ===================== 03 ========================
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}

function calculateTriangleArea(a, b, c) {
    var S = calculateSemiPerimeter(a, b, c);
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

function calculateAndDisplayArea() {
    var a = parseFloat(prompt("Enter the length of side A:"));
    var b = parseFloat(prompt("Enter the length of side B:"));
    var c = parseFloat(prompt("Enter the length of side C:"));

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        alert("Please enter valid positive numbers for all sides.");
        return;
    }

    var area = calculateTriangleArea(a, b, c);

    alert("The area of the triangle is " + area.toFixed(2));
}


// ===================== 04 ========================
function calculateAverage(marks) {
    var sum = marks[0] + marks[1] + marks[2];
    return sum / 3;
}

function calculatePercentage(marks) {
    var totalMarks = 300; 
    var obtainedMarks = marks[0] + marks[1] + marks[2];
    return (obtainedMarks / totalMarks) * 100;
}

function mainFunction() {
    var marks = [];
    marks.push(parseFloat(prompt("Enter marks for subject 1:")));
    marks.push(parseFloat(prompt("Enter marks for subject 2:")));
    marks.push(parseFloat(prompt("Enter marks for subject 3:")));

    if (marks.some(isNaN) || marks.some(mark => mark < 0 || mark > 100)) {
        alert("Please enter valid marks between 0 and 100 for all subjects.");
        return;
    }

    var average = calculateAverage(marks);
    var percentage = calculatePercentage(marks);

    alert("Average Marks: " + average.toFixed(2));
    alert("Percentage: " + percentage.toFixed(2) + "%");
}


// ===================== 05 ========================
function customIndexOf(str, char) {
    if (char.length !== 1) {
        throw new Error("The second argument must be a single character.");
    }

    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i; 
        }
    }

    return -1;
}

// Example usage
var str = "Hello, world!";
var char = "w";
var index = customIndexOf(str, char);
console.log("The index of '" + char + "' in \"" + str + "\" is: " + index);


// ===================== 06 ========================
function removeVowels(sentence) {
    var vowels = /[aeiouAEIOU]/g;

    var result = sentence.replace(vowels, '');

    return result;
}

function removeVowelsFromPrompt() {
    var sentence = prompt("Enter a sentence (up to 25 characters):");

    if (sentence === null || sentence.length > 25) {
        alert("Please enter a valid sentence with no more than 25 characters.");
        return;
    }

    var newSentence = removeVowels(sentence);
    alert("Sentence without vowels: " + newSentence);
}


// ===================== 07 ========================
function countVowelPairs() {
    var text = prompt("Enter a line of text:");

    if (text === null || text.length < 2) {
        alert("Please enter a valid line of text with at least two characters.");
        return;
    }

    function countPairs(str) {
        var count = 0;
        var vowels = "aeiouAEIOU";

        for (var i = 0; i < str.length - 1; i++) {
            var char1 = str[i];
            var char2 = str[i + 1];

            switch (true) {
                case (vowels.includes(char1) && vowels.includes(char2)):
                    count++;
                    break;
                default:
                    break;
            }
        }

        return count;
    }

    var numPairs = countPairs(text);

    alert("Number of vowel pairs: " + numPairs);
}


// ===================== 08 ========================
function toMeters(km) {
    return km * 1000;
}

function toFeet(km) {
    return km * 3280.84; 
}

function toInches(km) {
    return km * 39370.1; 
}

function toCentimeters(km) {
    return km * 100000; 
}

function convertDistance() {
    var km = parseFloat(prompt("Enter the distance in kilometers:"));

    if (isNaN(km) || km < 0) {
        alert("Please enter a valid non-negative number.");
        return;
    }

    var meters = toMeters(km);
    var feet = toFeet(km);
    var inches = toInches(km);
    var centimeters = toCentimeters(km);

    var result = 
    "Distance in meters: " + meters.toFixed(2) + " m\n" +
    "Distance in feet: " + feet.toFixed(2) + " ft\n" +
    "Distance in inches: " + inches.toFixed(2) + " in\n" +
    "Distance in centimeters: " + centimeters.toFixed(2) + " cm";

alert(result);
}
// ===================== 09 ========================
function calculateOvertimePay() {
    var hoursWorked = parseInt(prompt("Enter the number of hours worked:"));

    if (isNaN(hoursWorked) || hoursWorked < 0) {
        alert("Please enter a valid number of hours worked.");
        return;
    }

    const regularHours = 40;
    const overtimeRate = 12.00;

    var overtimeHours = Math.max(0, hoursWorked - regularHours);

    var overtimePay = overtimeHours * overtimeRate;

    alert("Overtime pay: Rs. " + overtimePay.toFixed(2));
}


// ===================== 10 ========================
function calculateNotes() {
    var amountInHundreds = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):"), 10);

    if (isNaN(amountInHundreds) || amountInHundreds <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    var amount = amountInHundreds;

    var denominations = [100, 50, 10];

    var noteCount = {
        100: 0,
        50: 0,
        10: 0
    };

    for (var i = 0; i < denominations.length; i++) {
        var denomination = denominations[i];
        noteCount[denomination] = Math.floor(amount / denomination);
        amount %= denomination;
    }

    var result = 
        "Hundred notes: " + noteCount[100] + "\n" +
        "Fifty notes: " + noteCount[50] + "\n" +
        "Ten notes: " + noteCount[10];

    alert(result);
}


// ---- END ----