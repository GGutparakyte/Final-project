import axios from 'axios';
import store from '../store';
import { updateUser } from '../store/auth';

const ProductService = new (class ProductService {
  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async updateUserData(body) {
    const { data } = await this.requester.patch('/users/', body, {
      headers: {
      },
    });
    store.dispatch(updateUser({ user: data.user }));
  }

  async getUserImages() {
    const { data } = await this.requester.get('/images/', {
      headers: {
      },
    });
    return data.images;
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

  async deleteImage(id) {
    await this.requester.delete(`images/${id}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
})();

export default ProductService;
