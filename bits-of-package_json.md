```
{
  "name": "themoviedb-react-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^6.0.0"
  },
  "devDependencies": {
    "react-scripts": "4.0.0"
  }
}
```

```
{
  "scripts": {
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
  }
}
```

```
{
  "scripts": {
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
  },
  "dependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^6.0.0"
  },
  "devDependencies": {
    "@storybook/vue": "^7.0.0",
    "autoprefixer": "^11.0.0",
    "eslint": "^7.11.0",
    "husky": "^4.3.0",
    "lint-staged": "^11.2.2",
    "postcss": "^8.2.7",
    "prettier": "^2.2.1",
    "playwright": "^1.6.3",
    "tailwindcss": "^2.0.2",
    "vite": "^1.0.0-rc.9",
    "vite-plugin-react": "^1.0.0-rc.4",
    "vite-plugin-tailwind": "^1.0.0-rc.3"
  },
  "lint-staged": {
    "*.{js,mjs,cjs,ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "playwright"
    }
  }
}
```

```
{
  "name": "the-movie-database-app",
  "version": "1.0.0",
  "description": "A React app that lets users browse popular and top-rated movies, as well as movies by genre and actor. It uses The Movie Database API to get its data.",
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "storybook": "start-storybook -p 6006",
    "test": "jest",
    "lint": "eslint src/",
    "format": "prettier --write \"src/**/*.{js,jsx}\"",
    "deploy": "vercel"
  },
  "dependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.12.3",
    "@babel/preset-env": "^7.12.1",
    "@babel/preset-react": "^7.12.5",
    "babel-plugin-tailwind-components": "^2.1.0",
    "eslint": "^7.14.0",
    "eslint-config-airbnb": "^18.2.0",
    "eslint-config-prettier": "^7.0.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-prettier": "^3.2.0",
    "eslint-plugin-react": "^7.21.5",
    "husky": "^4.3.0",
    "jest": "^26.6.3",
    "lint-staged": "^11.3.3",
    "playwright": "^1.7.0",
    "prettier": "^2.2.1",
    "start-storybook": "^6.0.30",
    "storybook": "^7.0.0",
    "tailwindcss": "^2.0.3",
    "vite": "^2.4.0",
    "vite-plugin-react": "^2.4.0"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
```
