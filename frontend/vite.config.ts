import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
  //resolve: {
  //alias: [
  //{ find: "@shared", replacement: path.resolve(__dirname, "../shared") },
  //],
  //},
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
