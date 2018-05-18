// mysql
var connection = require("../config/connection.js");


function printQuestionMarks(num) {
    var array = [];

    for (var i =0; i < num; i++) {
        array.push("?"); // expected output ?,? 
    }

    return array.toString();
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

    return array.toString();
}

// printQuestionMarks(2);
// var ob = { a: "me and you"};
// objToSql(ob);

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " +table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err){
                throw err;
            }

            cb(results);
        });
    },

    // delete: function(table, condition, cb) {
    //     var queryString = "DELETE FROM " + table ;
    //         queryString += " WHERE ";
    //         queryString += condition;

    //     console.log(queryString);

    //     connection.query(queryString, function(err,result) {
    //         if(err) {
    //             throw err;
    //         }
    //         cb(result);
    //     });
    // }
};


module.exports = orm;