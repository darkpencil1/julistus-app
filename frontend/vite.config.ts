import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

const backendUrl = process.env.REACT_APP_BACKEND_URL ?? "localhost";
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
    proxy: {
      "/api": {
        target: `http://${backendUrl}:8080`,
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
