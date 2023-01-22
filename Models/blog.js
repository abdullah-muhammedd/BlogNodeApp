const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        snippet: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }, { timestamps: true } );
    

const Blog = mongoose.model( 'blogs', Schema );

module.exports = Blog;