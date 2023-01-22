const express = require( 'express' );
const mongoose = require( 'mongoose' );
let blogRouter = require( './Routes/blogRoutes' );
const app = express()

// connect to mongo 
mongoose.set( 'strictQuery', true );


const connectionURI = 'mongodb+srv://abdullah:1112@cluster0.dn0cltt.mongodb.net/blogs?retryWrites=true&w=majority'


mongoose.connect( connectionURI, { useNewUrlParser: true, useUnifiedTopology: true } ).then( ( res ) => { app.listen( 3000, 'localhost' ); } );


// set express view engine to ejs
app.set( 'view engine', 'ejs' );

// handle serving static files
app.use( express.static( `${ __dirname }/Public` ) );

// middleware to take data from the form to the app.js file 
app.use( express.urlencoded({extended:false}) );

// routing
app.use( '/',blogRouter );
