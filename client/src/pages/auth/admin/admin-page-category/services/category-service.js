import axios from 'axios';
import AuthService from '../../../../../services/auth-service';

const CategoryService = new (class CategoryService {
  static validateToken() {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('Can not get user images without authentication');
    }
    return token;
  }

  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/categories',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async createCategory(formData) { // kuriamas metodas
    // tam, kad galetume prideti kategorija, mums reikia buti adminu
    const token = CategoryService.validateToken();
    if (!token) return 'You ar not authorized'; // jeigu nera token, gražinti error žinutę
    try {
      const { data } = await this.requester.post('/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      if (error) return error.message;
      return error;
    }
  }

  async updateCategory(id, formData) {
    const token = CategoryService.validateToken();
    if (!token) return 'You are not authorized';
    try {
      const { data } = await this.requester.patch(`/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      if ((error).isAxiosError) {
        const axiosError = error;
        if (axiosError.response) {
          return axiosError.response.data.message;
        }
      }
      if (error) return error.message;
      return error;
    }
  }

  async getCategories() {
    const token = CategoryService.validateToken();
    if (!token) return 'You are not authorized'; // jeigu nėra token, gražinti error žinutę
    try {
      const { data } = await this.requester.get('/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      if ((error).isAxiosError) {
        const axiosError = error;
        if (axiosError.response) {
          return axiosError.response.data.message;
        }
      }
      if (error instanceof Error) return error.message;
      return error;
    }
  }

  async deleteCategory(id) {
    const token = CategoryService.validateToken();
    if (!token) return 'You are not authorized';
    try {
      // id perduodame per parametrus, nes taip esame pasirase routeryje
      const { data } = await this.requester.delete(`/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      if ((error)) {
        const axiosError = error;
        if (axiosError.response) {
          return axiosError.response.data.message;
        }
      }
      if (error) return error.message;
      return error;
    }
  }
})();

export default CategoryService;
