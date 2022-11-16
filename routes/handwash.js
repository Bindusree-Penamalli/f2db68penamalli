var express = require('express');
var router = express.Router();

var handwash_controller = require('../controllers/handwash');
/* GET home page. */

router.get('/', handwash_controller.handwash_view_all_Page);
router.get('/detail', handwash_controller.handwash_view_one_Page);
router.get('/create', handwash_controller.handwash_create_Page);
router.get('/update', handwash_controller.handwash_update_Page);
router.get('/delete', handwash_controller.handwash_delete_Page);


module.exports = router;