// mysql
var connection = require("../config/connection.js");


function printQuestionMarks(num) {
    var array = [];

    for (var i =0; i < num; i++) {
        array.push("?"); // expected output ?,? 
    }

    return console.log(array.toString());
}

function objToSql(ob) { // convert object to array
    var array = [];

    for (var key in ob) {
        var value = ob[key];

        if(Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'"; 
            }

            array.push(key + "=" + value);
        }
    }

    return console.log(array.toString());
}

// printQuestionMarks(2);
// var ob = { a: "me and you"};
// objToSql(ob);

// var orm = {
//     all: function(tableInput, cb) {
//         var
//     }
// }

