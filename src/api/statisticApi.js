import axiosClient from "./axiosClient";

const statisticApi = {
  getStatisticsUsers: (params) => {
    const url = `/admin/users/statistics`;
    return axiosClient.get(url, { params });
  },
  getChart: (params) => {
    const url = `/dashboard/earnings`;
    return axiosClient.get(url, { params });
  },
};

export default statisticApi;
