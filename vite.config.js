// https://vitejs.dev/config/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@images": path.resolve("./src/assets/images"),
      "@utils": path.resolve("./src/utils"),
      "@const": path.resolve("./src/const"),
      "@pages": path.resolve("./src/pages"),
      "@components": path.resolve("./src/components"),
    },
  },
});
