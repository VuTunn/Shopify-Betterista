## Tailwind css for Shopify
#### Install
```
Run: npm install
Update: tailwind.config.js
Use tw- for class prefixing
```
#### User Manual
```
Classes must have a prefix tw- prefix https://tailwindcss.com/docs/configuration#prefix
Tailwind will output to file /assets/tailwindoutput.css, cần thêm vào trong theme.liquid
```
#### Build tailwind
```
npm run build
```
#### Watch tailwind
```
npm run watch
```

#### Run tailwind
```
npx tailwindcss --postcss -i ./tailwind-source.css -o ./assets/tailwindoutput.css --minify
```
npx tailwindcss --postcss -i ./tailwind-source.css -o ./assets/tailwindoutput.css --watch --verbose
```
