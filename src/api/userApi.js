import axiosClient from "./axiosClient";

const userApi = {
  getAll: () => {
    const url = `/admin/users`;
    return axiosClient.get(url);
  },

  get: (id) => {
    const url = `/admin/${id}`;
    return axiosClient.get(url);
  },

  create: (data) => {
    const url = `/admin`;
    return axiosClient.post(url, data);
  },

  update: (id, data) => {
    const url = `/admin/${id}`;
    return axiosClient.put(url, data);
  },

  delete: (id) => {
    const url = `/admin/user/${id}`;
    return axiosClient.delete(url);
  },

  // delete: (id) => {
  //   const url = `/admin/user/${id}`;
  //   return axiosClient.delete(url);
  // },

  //
  getShops: () => {
    const url = `/admin/shops`;
    return axiosClient.get(url);
  },
};

export default userApi;
