function Greet() {
    alert("Hello!");
}

function GreetWithParams(name, count) {
    alert(name + " says hello " + count + " times!");
}

function add(num1, num2) {
    return num1 + num2;
}

function calculate() {
    var result = add(3, 9);
    alert(result);
}

// length
function stringLength() {
    var riddle = new String("This corner is a winter corner");
    document.write("Length: " + riddle.length);
}

// charAt()
function stringCharAt() {
    var str = new String("This corner is a winter corner");
    for (let i = 0; i < 5; i++) {
        document.write(i + ". character: " + str.charAt(i) + "<br>");
    }
}

// concat
function stringConcat() {
    var d1 = new String("Ankara");
    var d2 = new String(" Weather");
    var d3 = d1.concat(d2);
    document.write(d3);
}

// split
function stringSplit() {
    var a = "Three bronze dishes are nice.";
    var parts = a.split(" ", 3);
    document.write(parts);
}

// substring
function stringSubstring() {
    var str = "TwoThousandSeventeen August";
    document.write(str.substring(1, 2) + "<br>");
    document.write(str.substring(0, 10) + "<br>");
    document.write(str.substring(5));
}

// upper/lower
function stringCase() {
    var str = "TwoThousandSeventeen August";
    document.write(str.toLowerCase() + "<br>");
    document.write(str.toUpperCase());
}

// array creation and length
function arrayLength() {
    var fruits = ["orange", "apple", "pear"];
    document.write("Length: " + fruits.length);
}

// sort
function arraySort() {
    var fruits = ["orange", "apple", "pear"];
    document.write("Original: " + fruits + "<br>");
    document.write("Sorted: " + fruits.sort());
}

// current date
function currentDate() {
    var date = new Date();
    document.write(date);
}

// specific date
function specificDate() {
    var date = new Date(2013, 9, 12, 13, 14, 0);
    document.write(date);
}

// getTime
function dateGetTime() {
    var date = new Date(2013, 1, 1, 0, 0, 0);
    document.write(date.getTime());
}

// getFullYear
function dateYear() {
    var date = new Date(2013, 1, 1);
    document.write(date.getFullYear());
}

// getDay (number)
function dateDayNumber() {
    var date = new Date(2013, 1, 1);
    document.write(date.getDay());
}

// getDay (name)
function dateDayName() {
    var date = new Date(2013, 1, 1);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.write(days[date.getDay()]);
}