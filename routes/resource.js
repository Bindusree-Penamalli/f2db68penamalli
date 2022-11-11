var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var handwash_controller = require('../controllers/handwash');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/handwash', handwash_controller.handwash_create_post);
// DELETE request to delete Costume.
router.delete('/handwash/:id', handwash_controller.handwash_delete);
// PUT request to update Costume.
router.put('/handwash/:id', handwash_controller.handwash_update_put);
// GET request for one handwash.
router.get('/handwash/:id', handwash_controller.handwash_detail);
// GET request for list of all handwash items.
router.get('/handwash', handwash_controller.handwash_list);
module.exports = router;