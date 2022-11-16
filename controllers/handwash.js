var handwash = require('../models/handwash');
// List of all handwash
exports.handwash_list = async function (req, res) {
    try {
        result = await handwash.find();
        res.render('handwash', { title: 'handwash Search Results', results: result });
        // res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific handwash.
exports.specific_handwash = async function (req, res) {
    // res.send('NOT IMPLEMENTED: handwash detail: ' + req.params.id);
    console.log("detail - " + req.params.id)
    try {
        result = await handwash.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle handwash create on POST.
exports.handwash_create_post = async function (req, res) {
    console.log(req.body)
    let document = new handwash();

    /**  
     * We are looking for a body, since POST does not have query parameters.
     * Even though bodies can be in many different formats, we will be picky
     * and require that it be a json object
     * { "handwash_flavour": "Apple", "handwash_cost": 500, "handwash_quantity": "50"}
    */
    document.handwash_Id = req.body.handwash_Id;
    document.handwash_Name = req.body.handwash_Name;
    document.Capacity = req.body.Capacity;
    document.Location = req.body.Location;
    document.State = req.body.State;
    document.Country = req.body.Country;
    try {
        result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle handwash delete form on DELETE.
exports.handwash_delete = async function (req, res) {
    // res.send('NOT IMPLEMENTED: handwash delete DELETE ' + req.params.id);
        console.log("delete " + req.params.id)
        try {
        result = await handwash.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
        }
       
};
// Handle handwash update form on PUT.
exports.handwash_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
     try {
     let toUpdate = await handwash.findById(req.params.id)
     // Do updates of properties
     if(req.body.handwash_Id)  toUpdate.handwash_Id = req.body.handwash_Id;
     if(req.body.handwash_Name) toUpdate.handwash_Name = req.body.handwash_Name;
     if(req.body.Capacity) toUpdate.Capacity = req.body.Capacity;
     if(req.body.Location)  toUpdate.Location = req.body.Location;
     if(req.body.State) toUpdate.State = req.body.State;
     if(req.body.Country) toUpdate.Country = req.body.Country;
     
     let result = await toUpdate.save();
     console.log("Sucess " + result)
     res.send(result)
     } catch (err) {
     res.status(500)
     res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
     }
    
};
exports.handwash_view_all_Page = async function (req, res) {
    try {
        let result = await handwash.find();
        res.render('handwash', { title: 'handwash Search Results', results: result });
        // res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


//Assignment-12

// Handle a show one view with id specified by query

exports.handwash_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
      result = await handwash.findById(req.query.id)
      res.render('handwash-detail',
        { title: 'handwash Detail', toShow: result });
    }
    catch (err) {
      res.status(500)
      res.send(`{'error': '${err}'}`);
    }
  };
  
  // Handle building the view for creating a handwash.
  // No body, no in path parameter, no query.
  // Does not need to be async
  
  exports.handwash_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('handwash-create', { title: 'handwash Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
  };
  // Handle building the view for updating a handwash.
  // query provides the id
  
  exports.handwash_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await handwash.findById(req.query.id)
        res.render('handwash-update', { title: 'handwash Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
  };
  // Handle a delete one view with id from query
  
  exports.handwash_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await handwash.findById(req.query.id)
        res.render('handwash-delete', { title: 'handwash Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
  };
