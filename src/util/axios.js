import axios from 'axios';
import Vue from 'vue';
import { ElMessage } from 'element-plus';
const ajax = axios.create({
  timeout: 50000,
  baseURL: 'http://localhost:8081'
});

ajax.interceptors.request.use(config => config, error => {
  console.error('请求异常', error);
});

ajax.interceptors.response.use(res => {
  if (res.data.code !== 0) {
    ElMessage.error(res.data.msg);
    return false;
  }
  return res.data;
}, error => {
  if (error.message === 'Network Error') {
    ElMessage.error("Network Error");
  } else if (error.response.status === 400) {
    ElMessage.error(error.response.data.msg);
  } else if (error.response.status === 404) {
    ElMessage.error("后端接口未找到");
  } else if (error.response.status === 500) {
    ElMessage.error("后端接口异常");
  } else {
    ElMessage.error("未知错误");
  }
});

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    ajax.get(url, { params }).then(response => resolve(response)).catch(err => reject(err));
  });
}

export function post(url, data = {}) {
  data = JSON.stringify(data);
  const config = {
    headers: { 'Content-Type': 'application/json' }
  };
  return new Promise((resolve, reject) => {
    ajax.post(url, data, config).then(response => resolve(response)).catch(err => reject(err));
  });
}

// 挂载到 Vue 原型上
Vue.prototype.$ajax = ajax;

export default ajax;
