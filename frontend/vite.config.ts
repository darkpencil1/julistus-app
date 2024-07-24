import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8080/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  //base: "https://darkpencil1.github.io/julistus-app/",
  base: "/",
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
