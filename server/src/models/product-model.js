const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

{/*
  ! type: Schema.Types.ObjectId,
1. schemoje nustatai object id ir parasai ref: "yra i kuria lentele rodai" is tenais ims id
2. controleri rasai populate("kad butent ta lentele nori susieti kuria nurodei schemoje")
*/}
const productSchema = new Schema({
  name: {
    type: 'string',
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId, // apjungia su kitu id per populate (controleryje). 
    ref: 'Category'
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand'
  },
  price: {
    type: 'number',
    required: true,
  },
  color: {
    type: Schema.Types.ObjectId,
    ref: 'Color'
  },
  images: [{
    type: Schema.Types.ObjectId,
    ref: 'Image',
    required: true,
  }],
}, {
  timestamps: true,
});

productSchema.plugin(mongoosePaginate);
const ProductModel = Mongoose.model('Product', productSchema);

module.exports = ProductModel;