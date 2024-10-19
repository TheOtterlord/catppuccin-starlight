<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://github.com/withastro/starlight">Starlight</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/TheOtterlord/catppuccin-starlight/stargazers"><img src="https://img.shields.io/github/stars/TheOtterlord/catppuccin-starlight?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/TheOtterlord/catppuccin-starlight/issues"><img src="https://img.shields.io/github/issues/TheOtterlord/catppuccin-starlight?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/TheOtterlord/catppuccin-starlight/contributors"><img src="https://img.shields.io/github/contributors/TheOtterlord/catppuccin-starlight?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

![Catppuccin Starlight Preview](./assets/catppuccin-starlight.png)

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="./assets/latte.png"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="./assets/frappe.png"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="./assets/macchiato.png"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="./assets/mocha.png"/>
</details>

## Usage

1. Install the theme package to your project with your preferred package manager:
```sh
npm install starlight-theme-catppuccin
pnpm add starlight-theme-catppuccin
yarn add starlight-theme-catppuccin
```

2. Add the theme to your Starlight config.

```ts
import catppuccin from "starlight-theme-catppuccin";

export default defineConfig({
  // ...
  integrations: [
    starlight({
      // ...
      plugins: [
        catppuccin()
      ]
    })
  ]
})
```

3. (Optional) Customize your theme for light/dark mode using `{flavor}-{accent}`.

```ts
import catppuccin from "starlight-theme-catppuccin";

export default defineConfig({
  // ...
  integrations: [
    starlight({
      // ...
      plugins: [
        catppuccin({ dark: "frappe-sky", light: "latte-sky" })
      ]
    })
  ]
})
```

## 💝 Thanks to
- [TheOtterlord](https://github.com/TheOtterlord)
- [Louis Escher](https://github.com/louisescher)