import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://catppuccin-starlight.otterlord.dev",
	integrations: [
		starlight({
			title: "Catppuccin",
			logo: {
				src: "./src/assets/catppuccin.png",
				alt: "Catppuccin logo",
			},
			favicon: "/favicon.png",
			social: [
				{
					label: "GitHub",
					icon: "github",
					href: "https://github.com/TheOtterlord/catppuccin-starlight",
				},
			],
			expressiveCode: {
				themes: ["catppuccin-mocha", "catppuccin-latte"],
				styleOverrides: {
					textMarkers: {
						insBackground:
							"color-mix(in oklab, var(--sl-color-green-high) 25%, var(--sl-color-gray-6));",
						insBorderColor: "var(--sl-color-gray-5)",
						delBackground:
							"color-mix(in oklab, var(--sl-color-red-high) 25%, var(--sl-color-gray-6));",
						delBorderColor: "var(--sl-color-gray-5)",
					},
	        codeBackground: "var(--sl-color-gray-6)",
				},
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
			plugins: [catppuccin()],
		}),
	]
});
