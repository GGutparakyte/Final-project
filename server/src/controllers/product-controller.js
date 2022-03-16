const ProductModel = require('../models/product-model');
const ProductViewModel = require('../view-models/product-view-model');

const getProductsPaginated = async (req, res) => {
  const product = await ProductModel.paginate({}, {
    page: req.query.page, limit: req.query.limit, sort: { createdAt: req.query.order }, populate: ['brand', 'category', 'color', 'images']
  });
  const products = product.docs.map(ProductDocs => new ProductViewModel(ProductDocs));
  const productCount = product.total;
  res.status(200).json({ products, productCount });
};

const getProducts = async (req, res) => {
  const ProductDocs = await ProductModel
    .find()
    .populate('brand')
    .populate('category')
    .populate('color')
    .populate('images')
  console.log(ProductDocs);
  const Products = ProductDocs.map(Product => new ProductViewModel(Product));
  res.status(200).json(Products);
};

const createProduct = async (req, res) => {
  const { name, price, category, color, brand, images } = req.body;
  const ProductDoc = await ProductModel({
    name,
    price,
    category,
    color,
    brand,
    images
  });

  try {
    await ProductDoc.save();
    const Product = new ProductViewModel(ProductDoc);
    res.status(201).json(Product);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: `Klaida: jau yra toks produktas`,
    });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const ProductDoc = await ProductModel
      .findById(id)
      .populate('brand')
      .populate('category')
      .populate('color')
      .populate('images')
    const Product = new ProductViewModel(ProductDoc);
    res.status(200).json(Product);
  } catch (error) {
    res.status(404).json({
      message: `Elementas nerastas su id: '${id}'`,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const ProductDoc = await ProductModel.findByIdAndDelete(id);
    const Product = new ProductViewModel(ProductDoc);
    res.status(200).json(Product);
  }
  catch (error) {
    console.log(error.message)
    res.status(404).json({
      message: 'Produktas nerastas'
    });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    await ProductModel.findById(id);

    try {
      const ProductDoc = await ProductModel.findByIdAndUpdate(
        id,
        { name, price },
        { new: true }
      );
      const Product = new ProductViewModel(ProductDoc);
      res.status(200).json(Product);
    } catch (error) {
      res.status(400).json({ message: 'Blogi parametrai' });
    }
  } catch (error) {
    res.status(404).json({ message: 'Produktas nerastas' });
  }
};

const replaceProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    await ProductModel.findById(id);

    try {
      const ProductDoc = await ProductModel.findOneAndReplace(
        id,
        { name, price },
        { new: true }
      );
      const Product = new ProductViewModel(ProductDoc);
      res.status(200).json(Product);
    } catch (error) {
      res.status(400).json({ message: 'Blogi parametrai' });
    }
  } catch (error) {
    res.status(404).json({ message: 'Produktas nerastas' });
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  replaceProduct,
  getProductsPaginated,
};
