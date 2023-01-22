const express = require( 'express' );
const router = express.Router();
const controller = require( '../Controllers/blogController' )


router.get( '/', controller.getIndex)
router.get( '/createnewblog', controller.getCreateNewblog)
router.get( '/about', controller.getAbout );
router.post( '/newblog', controller.postNewblog);
router.get( '/:id',  controller.getSingleBlogById );
router.delete( '/:id', controller.deleteSingleBlogById); 

module.exports = router; 