import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "starlight-theme-catppuccin";

// https://astro.build/config
export default defineConfig({
	site: 'https://catppuccin-starlight.otterlord.dev',
	integrations: [
		starlight({
			title: "Catppuccin",
			logo: {
				src: "./src/assets/catppuccin.png",
				alt: "Catppuccin logo",
			},
			favicon: "/favicon.png",
			social: {
				github: "https://github.com/TheOtterlord/catppuccin-starlight",
			},
			expressiveCode: {
				themes: ['catppuccin-mocha', 'catppuccin-latte'],
			},
			customCss: [
				"@fontsource/inter/400.css",
				"@fontsource/inter/600.css",
				"./src/custom.css",
			],
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Install", slug: "guides/install" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
			plugins: [catppuccin({ dark: 'mocha-mauve', light: 'latte-mauve' })],
		}),
	],
	devToolbar: {
		enabled: false,
	},
});
