const mongoose = require('mongoose');
const Movie = mongoose.model('Movie', {
    title:
    {
        type: String,
        required: true
    },
    year:
    {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    Cast: {
        type: [String],
        required: true
    },
    poster:{
        type:String,
        required:true
    }
});