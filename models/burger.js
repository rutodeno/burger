
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("cats", function(res) {
            cb(res);
        });
    },

    create: function(col, vals, cb) {
        orm.create("cats", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("cats", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("cats", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;
