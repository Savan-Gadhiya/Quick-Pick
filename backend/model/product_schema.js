const mongoose = require('mongoose');

const product_schema = mongoose.Schema({
    shop_id: {
        type: mongoose.Schema.Types.ObjectId,
        // ref: 'shop_details',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true, 
    },
    stock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        imgId: {
            type: String
        },
        url: {
            type: String
        }
    },
    tags: [{ type: String }],
})

const product_detail = mongoose.model('product_detail', product_schema);

module.exports = product_detail;