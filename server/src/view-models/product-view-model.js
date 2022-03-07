const BrandViewModel = require('../view-models/brand-view-model');
const CategoryViewModel = require('../view-models/category-view-model');
const ColorViewModel = require('../view-models/color-view-model');
const ImageViewModel = require('../view-models/image-view-model')
const { dateStr2DateTime } = require('../helpers/date-helpers');

class ProductViewModel {
  constructor({ _id, name, category, brand, color, price, createdAt, updatedAt, images }) {
    this.id = _id;
    this.name = name;
    this.price = price;

    if (category) {
      this.category = new CategoryViewModel(category);
    }
    if (brand) {
      this.brand = new BrandViewModel(brand);
    }
    if (color) {
      this.color = new ColorViewModel(color);
    }
    if (images) {
      this.images = images.map(image => new ImageViewModel(image))
    }
    this.createdAt = dateStr2DateTime(createdAt);
    this.updatedAt = dateStr2DateTime(updatedAt);
  }
}

module.exports = ProductViewModel;
