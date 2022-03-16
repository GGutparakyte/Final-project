const express = require('express');
const { uploadManyMiddleware } = require('../middlewares/upload-middleware');
const {
  getImages,
  uploadImages,
  deleteImage,
} = require('../controllers/image-controller');

const router = express.Router();

router.get('/', getImages);

router.post('/', uploadManyMiddleware('files'), uploadImages);

router.delete('/:id', deleteImage);

module.exports = router;
