# bluesquare-components
A library of UI components to be used in [Bluesquare](https://www.bluesquarehub.com) apps.

## Depend on it locally

run `npm run build && npm pack` (webpack) ot `npm run compile && npm pack` (Babel) to generate a tgz file.

In your application's `package.json`, add:
```json
"bluesquare-components":"file:/local/path/to/bluesquare-components-[version].tgz"
```

run `npm i`

## Depend on the repository

In your application's `package.json`, add:
```json
"bluesquare-components":"git://github.com/BLSQ/bluesquare-components.git"
```

run `npm i`

## Docker issues

When depending on a local version, you will have to modify your Dockerfile to copy the .tgz file into the container

When depending on the repo, you will have to pass credentials or the container won't be able to clone the repo.

## Publishing on npm?

Is coming soon.