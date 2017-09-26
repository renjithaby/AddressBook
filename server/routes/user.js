var express = require('express');
var router = express.Router();
var jwt    = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var app = req.app;
  res.send('respond with a resource');
});



/* POST to Add User Service */

router.post('/removeuser', function (req, res) {



    // Set our internal DB variable
    var db = req.db;
    console.log(req.query.id);
    //res.redirect("/userlist1");
    // Get our form values. These rely on the "name" attributes
    var id = req.query.id;


    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.remove({"_id": id}, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
});


router.post('/addaddress', function (req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var addressId = Date.now();
    var name = req.body.name;
    var currentAddress = req.body.currentaddress;
    var newAddress = { "name": name, "currentAddress": currentAddress};
    console.log("id...........");
    console.log(id);
    // Set our collection
    var collection = db.get('usercollection');


    collection.update(
        {_id: id},
        {$push: {addressList: newAddress}}
        , function (err, doc) {
            if (err) {
                console.log("failed.....");
                // If it failed, return error
                res.send({result :"failed",detail:"There was a problem adding the information to the database."});
            }
            else {

                console.log("doc[0]..........");
                console.log(doc);
                collection.find({
                        "_id" : id
                    },
                    function (err, doc) {
                        if (err) {
                            console.log("doceroor");
                            // If it failed, return error
                            res.send({result: "failed", detail:"Incorrect information."});
                        }
                        else {
                            console.log(".....response....");
                            if (doc.length > 0) {
                                res.send(doc[0]);
                                //res.redirect("addaddress");
                            } else {
                                res.send({result: "failed", detail:"wrong id"});
                            }
                        }
                    });
            }
        });


});


/*db.students.update(
    { _id: 4, "grades.grade": 85 },
    { $set: { "grades.$.std" : 6 } }
)*/


router.post('/updateaddress', function (req, res) {

   // req.body = {loginid:"59a67d114c0b230f4a639548",addressid:1504093882072,name :"renjith", currentaddress:"renjithadd"};
    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var id = req.body.loginid;
    var addressId =req.body.addressid;
    var name = req.body.name;
    var currentAddress = req.body.currentaddress;
    var newAddress = {"id": addressId, "name": name, "currentAddress": currentAddress};
    console.log("id...........");
    console.log(id);
    console.log(addressId);
    console.log(currentAddress);
    // Set our collection
    var collection = db.get('usercollection');


    collection.update(
        {_id: id,"addressList.id":addressId},
        { $set: { "addressList.$" : newAddress } }
       , function (err, doc) {
            if (err) {
                console.log("failed.....");
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {

                console.log("doc[0]..........");
                console.log(doc);
                collection.find({
                        "_id" : id
                    },
                    function (err, doc) {
                        if (err) {
                            console.log("doceroor");
                            // If it failed, return error
                            res.send("Incorrect information.");
                        }
                        else {
                            console.log(".....response....");
                            if (doc.length > 0) {
                                res.send(doc[0]);
                                //res.redirect("addaddress");
                            } else {
                                res.send({result: "failed"});
                            }
                        }
                    });
            }
        });


});

/*
db.survey.update(
    { },
    { $pull: { results: { score: 8 , item: "B" } } },
    { multi: true }
)
*/
router.post('/removeaddress', function (req, res) {

    //req.body = {loginid:"59a67d114c0b230f4a639548",addressid:1504093406891};
    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var id = req.body.loginid;
    var addressId =req.body.addressid;

    // Set our collection
    var collection = db.get('usercollection');


    collection.update(
        {_id:id},
        {$pull:{addressList:{id :addressId}}},
        { multi: true }
        , function (err, doc) {
            if (err) {
                console.log("failed.....");
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {

                console.log("doc[0]..........");
                console.log(doc);
                collection.find({
                        "_id" : id
                    },
                    function (err, doc) {
                        if (err) {
                            console.log("doceroor");
                            // If it failed, return error
                            res.send("Incorrect information.");
                        }
                        else {
                            console.log(".....response....");
                            if (doc.length > 0) {
                                res.send(doc[0]);
                                //res.redirect("addaddress");
                            } else {
                                res.send({result: "failed"});
                            }
                        }
                    });
            }
        });


});




module.exports = router;
