import { defineConfig } from '@umijs/max';
import routers from './router'

export default defineConfig({
  dva: {},
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '小蚂蚁',
    locale: true,
    siderWidth: 208,
    navTheme: 'light',
    primaryColor: '#1890ff', // 默认是拂晓蓝
    layout: 'mix',
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: true,
    colorWeak: false,
  },
  routes: routers,
  npmClient: 'npm',
  proxy: {
    '/api': {
      'target': 'http://public-api-v1.aspirantzhang.com',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
});

