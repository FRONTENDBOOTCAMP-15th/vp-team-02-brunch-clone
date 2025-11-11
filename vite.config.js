import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // 메인 페이지
        index: 'index.html',

        // 사용자 관련

        // 게시판 관련

        // 에러 페이지
      },
    },
  },
  plugins: [tailwindcss()],
  appType: 'mpa', // fallback 사용안함
});
