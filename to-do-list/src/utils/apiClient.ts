import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const apiClient = (baseUrl: string) => ({
  get: async (path: string, params?: Record<string, any>, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return axios.get(`${baseUrl}${path}`, {
      params,
      ...config,
      withCredentials: true,
    });
  },
  post: async (path: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return axios.post(`${baseUrl}${path}`, data, {
      ...config,
      withCredentials: true,
    });
  },
  put: async (path: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return axios.put(`${baseUrl}${path}`, data, {
      ...config,
      withCredentials: true,
    });
  },
  delete: async (path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return axios.delete(`${baseUrl}${path}`, {
      ...config,
      withCredentials: true,
    });
  },
});

export default apiClient;

