// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/e-plantShopping/", // ← MUST MATCH your repo name
    plugins: [react()],
});
