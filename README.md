## Tailwind css for Shopify
#### Install
```
Run: npm install
Update: tailwind.config.js
Use tw- for class prefixing
```
#### Hướng dẫn sử dụng
```
Các class phải thêm tiền tố tw- prefix https://tailwindcss.com/docs/configuration#prefix
Tailwind sẽ output ra file /assets/tailwindoutput.css, cần thêm vào trong theme.liquid
```
#### Build tailwind
```
npm run watch
```
#### Watch tailwind
```
npm run build
```

#### Run tailwind
```
npx tailwindcss --postcss -i ./tailwind-source.css -o ./assets/tailwindoutput.css --minify
```
npx tailwindcss --postcss -i ./tailwind-source.css -o ./assets/tailwindoutput.css --watch --verbose
```
