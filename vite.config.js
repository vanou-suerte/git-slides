import { defineConfig } from "vite";

export default defineConfig({
  base: "/git-slides/",
  server: {
    watch: {
      ignored: ["!**/public/slides/**"],
    },
  },
  plugins: [
    {
      name: "watch-external-markdown",
      handleHotUpdate({ file, server }) {
        if (file.endsWith(".md")) {
          server.ws.send({
            type: "full-reload",
            path: "*",
          });
        }
      },
    },
  ],
});
