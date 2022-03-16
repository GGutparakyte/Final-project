const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const productSchema = new Schema({
  name: {
    type: 'string',
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
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