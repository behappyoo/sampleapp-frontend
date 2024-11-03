const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0', // 모든 IP에서 접근 가능
    port: 8080, // 원하는 포트 번호로 변경
    allowedHosts: 'all', // 모든 호스트 허용
  },
});
