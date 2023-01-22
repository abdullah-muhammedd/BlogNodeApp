const Blog = require( "../Models/blog" );

function getIndex ( req, res ) 
{ 
    Blog.find().sort( { createdAt: -1 } ).
        then( ( result ) => { res.render( 'index', { title: 'Abdullah Blog', blog: result } ); } );
}


function getCreateNewblog ( req, res ) { res.render( 'newblog', { title: 'Abdullah Blog | Create' } ); } 


function getAbout ( req, res ) { res.render( 'about', { title: 'Abdullah Blog | About' } ); }


function postNewblog ( req, res ) 
{
    let blog = new Blog( req.body );
    blog.save().then( () => res.redirect( '/' ) );
}


function getSingleBlogById ( req, res ) 
{ 
    Blog.findById( req.params.id )
        .then( ( result ) =>
        { res.render( 'details', { title: `Abdullah Blog | ${ result.title }`, item: result } ); } )
        .catch( ( err ) => { res.status( 404 ).render( '404', { title: 'Abdullah Blog | Error' } ); } );
}


function deleteSingleBlogById( req, res )
{ 
    const id = req.params.id;
    Blog.findByIdAndDelete( id ).then( res.json( { redirect: '/' } ) ).catch( ( err ) => {  res.status( 404 ).render( '404', { title: 'Abdullah Blog | Error' } );} );
}

module.exports = {
    getIndex, 
    getCreateNewblog,
    getAbout,
    postNewblog,
    getSingleBlogById,
    deleteSingleBlogById
};