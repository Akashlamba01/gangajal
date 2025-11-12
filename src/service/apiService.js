// import { API_URLS } from '../config/config.js';

const handleApiError = (error, endpoint, method) => {
  console.error(`Error in ${method} ${endpoint}:`, error);
  throw error;
};

const request = async (method, endpoint, data, requireAuth = true) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(requireAuth && { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }),
      },
      credentials: 'same-origin',
    };

    if (data) options.body = JSON.stringify(data);

    const response = await fetch(endpoint, options);

    if (!response.ok) {
      const errorData = await response.json();
      return await Promise.reject(errorData?.validation?.body?.message || errorData.message || 'API request failed');
    }

    return response.json();
  } catch (error) {
    return handleApiError(error, endpoint, method);
  }
};

export const apiService = {
  get: (endpoint, requireAuth = true) => request('GET', endpoint, null, requireAuth),
  post: (endpoint, data, requireAuth = true) => request('POST', endpoint, data, requireAuth),
  put: (endpoint, data, requireAuth = true) => request('PUT', endpoint, data, requireAuth),
  delete: (endpoint, requireAuth = true) => request('DELETE', endpoint, null, requireAuth),
  patch: (endpoint, data, requireAuth = true) => request('PATCH', endpoint, data, requireAuth),
};
