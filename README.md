# The Movie Database App

This app lets users browse popular and top-rated movies, as well as movies by genre and actor. It uses The Movie Database API to get its data.

## Setting Up

1. Clone this repository
2. Run `pnpm install`

## Developing

This app uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and code formatting. We use [lint-staged](https://github.com/okonet/lint-staged) and [Husky](https://github.com/typicode/husky) to run these tools on every commit. This means that any linting errors or unformatted code will prevent the commit from being successful.

To run the linting and formatting tools manually, run:

```
pnpm run lint
pnpm run format
```


## Storybook

This app uses [Storybook](https://storybook.js.org/) for component development. To run Storybook, run:

```
pnpm run test
```


## Building

To build the app for production, run:

```
pnpm run build
```


## Deploying

This app is deployed with [Vercel](https://vercel.com/). To deploy the app, run:

```
pnpm run deploy
```
