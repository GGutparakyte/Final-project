const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const categorySchema = new Schema({
  title: {
    type: 'string',
    required: true,
  },
}, {
  timestamps: true,
});

categorySchema.plugin(uniqueValidator); //neleidžia kurti dviejų kategorijų

const CategoryModel = Mongoose.model('Category', categorySchema);

module.exports = CategoryModel;