var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js")

router.get("/", function(req,res){
    res.redirect("/burgers");
});

router.get("/burgers", function (res, res) {
    burger.all(function (data) {
        var hbsObj = {
            burgers: data
        };

        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/api/burger", function (req, res) {

    burger.insert(
        [
            "burger_name"
        ],
        [
            req.body.name
        ], function (result) {
            console.log("req.body.burger_name " + req.body.name)
            //res.json({ id: result.insertId });
            res.redirect("/burgers");
        })
})

router.put("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("Condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
           // res.redirect("/burgers") It was giving me an error for some reason
           
        }
    });
});

module.exports = router;