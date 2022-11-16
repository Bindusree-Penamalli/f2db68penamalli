
var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var handwash_controller = require('../controllers/handwash');

/// API ROUTE ///

// GET resources base.
router.get('/', api_controller.api);

/// handwash ROUTES ///

// POST request for creating a handwash.
router.post('/handwash', handwash_controller.handwash_create_post);

// PUT request to update handwash.
router.put('/handwash/:id', handwash_controller.handwash_update_put);
// GET request for one handwash.
router.get('/handwash/:id', handwash_controller.specific_handwash);

// DELETE request to delete handwash.
router.delete('/handwash/:id', handwash_controller.handwash_delete);


// GET request for list of all handwash items.
router.get('/handwash', handwash_controller.handwash_list);

module.exports = router;