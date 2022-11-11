exports.api = function(req, res) {

    res.write('[');

    res.write('{"resource":"handwash", ');

    res.write(' "verbs":["GET","PUT", "DELETE"] ');

    res.write('}');

    res.write(']')

    res.send();
    // List of all handwashes
exports.handwash_list = async function(req, res) {
    try{
    thehandwash = await handwash.find();
    res.send(thehandwash);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   };