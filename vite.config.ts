import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/03-react-movies/",  // обязательно для GitHub Pages
  build: {
    sourcemap: true
  }
});
