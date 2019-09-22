const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true,
        minlength: [4, 'At least 4 characters long']

    },
    price: { 
        type: Number,
        required: true

    },
    url: { 
        type: String
       
    },
}, {timestamps: true });
mongoose.model('Product', ProductSchema);
