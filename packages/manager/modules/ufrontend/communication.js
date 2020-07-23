import BaseApi from './src/api.base.class';

export function emit(data, opts) {
  const api = new BaseApi(window.ovhMicroFrontend);
  return api.emit(data, opts);
}

export function listen(...args) {
  const api = new BaseApi(window.ovhMicroFrontend);
  return api.listen(...args);
}

export default {
  emit,
  listen,
};
