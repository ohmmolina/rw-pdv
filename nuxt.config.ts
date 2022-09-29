import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  target: "static",
  serverMiddleware: [{ path: "/api", handler: "./server/api/index.ts" }],
  buildModules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/google-fonts",
		'nuxt-icon'
	],
});
