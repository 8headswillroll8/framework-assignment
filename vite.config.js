import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  base: "/framework-assignment/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        feed: resolve(__dirname, "feed/index.html"),
        profile: resolve(__dirname, "profile/index.html"),
      },
    },
  },
});
