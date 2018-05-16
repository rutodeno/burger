var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js")

router.get("/", function(res, res) {
    burger.all(function(data) {
        var hbsObj = {
            burgers : data
        };

        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/api/burger", function(req,res) {
    burger.insert ([
        "name"
    ], [
    
    req.body.name 
    ], function(result) {
        res.json({ id: result.insertId });
    })
})

router.put("/api/burger/:id", function(req, res) {
    var condition = "id = "+req.params.id;

    console.log("Condition", condition);

    burger.update ({
        devour: req.body.devour
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;