var handwash = require('../models/handwash');
// List of all Costumes
exports.handwash_list = function (req, res) {
    res.send('NOT IMPLEMENTED: handwash list');
};
// for a specific Costume.
exports.handwash_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: handwash detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.handwash_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: handwash create POST');
};
// Handle Costume delete form on DELETE.
exports.handwash_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: handwash delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.handwash_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: handwash update PUT' + req.params.id);
};
// VIEWS

// List of all handwashs
exports.handwash_list = async function (req, res) {
    try {
        thehandwashs = await handwash.find();
        res.send(thehandwashs);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.handwash_view_all_Page = async function (req, res) {
    try {
        thehandwash = await handwash.find();
        res.render('handwash', { title: 'handwash Search Results', results: thehandwash });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume create on POST.
exports.handwash_create_post = async function (req, res) {
    console.log(req.body)
    let document = new handwash();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.handwash_name = req.body.handwash_name;
    document.handwash_Cost = req.body.handwash_Cost;
    document.handwash_model = req.body.handwash_model;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}

// for a specific Handwash. 
exports.handwash_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await handwash.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 