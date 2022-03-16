import axios from 'axios';
import AuthService from './auth-service';

const ProductService = new (class ProductService {
  static validateToken() {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('Can not get user images without authentication');
    }
    return token;
  }

  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getProducts(page, limit, order) {
    try {
      const { data } = await this.requester.get('/', { params: { page, limit, order } });
      return data;
    } catch (error) {
      return error.message;
    }
  }

  async uploadProduct({
    name, price, color, category, brand, images,
  }) {
    const response = await this.requester.post('/products', {
      name, price, color, category, brand, images,
    });
    return response.data;
  }

  async deleteImage(id) {
    await this.requester.delete(`/images/${id}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async uploadImages(files) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i += 1) {
      formData.append('files', files[i]);
    }
    const { data } = await this.requester.post('/images/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data.images;
  }
})();

export default ProductService;
