import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const apiClient = (baseUrl: string) => ({
  get: async (path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return axios.get(`${baseUrl}${path}`, config);
  },
  post: async (path: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return axios.post(`${baseUrl}${path}`, data, config);
  },
  put: async (path: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return axios.put(`${baseUrl}${path}`, data, config);
  },
  delete: async (path: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
    return axios.delete(`${baseUrl}${path}`, config);
  },
});

export default apiClient;
