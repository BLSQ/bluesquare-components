# bluesquare-components
A library of UI components to be used in [Bluesquare](https://www.bluesquarehub.com) apps.

## Making changes

If you make additions or changes to the library, run `npm run compile` and commit the updated `/dist` folder before pushing.

## Depend on it locally

run `npm run build-local` to generate a tgz file.

In your application's `package.json`, add:
```json
"bluesquare-components":"file:/local/path/to/lib/bluesquare-components-<version>.tgz"
```

Note that the .tgz file should be in a `/lib` folder

run `npm i`, or `npm update bluesquare-components` to update to the latest version if it's already installed.

## Depend on the repository 

In your application's `package.json`, add:
```json
"bluesquare-components":"git://github.com/BLSQ/bluesquare-components"
```

Be careful as the command below will work locally but cause authetication failure when run in Docker: 
```json
"bluesquare-components":"git://github.com/BLSQ/bluesquare-components.git#<commit-ish>"
```

run `npm i` to install, or `npm update bluesquare-components` to update to the latest version if you already depend on the package.

## With Docker

To depend on the repo, run `npm run compile` and push the `dist` folder, then depend on the library as mentioned above.

To depend on a local version of the library:

- Run `npm run build-local`
- Build an image from the Dockerfile: `docker build --tag <library-name> .`
- Modify your `package.json`: 
```json
"bluesquare-components":"file:path/to/lib/compiled_file.tgz"
```
- In your project, run `npm i`
- Modify your project's Dockerfile to have a [multi staged build](https://stackoverflow.com/questions/57910644/docker-multistage-how-to-copy-built-files-between-stages) in order to be able to copy the .tgz file in your container.
- Build your projects Docker image and start the container.

To update the dependency:

- Run `npm run build-local`
- Build an image from the Dockerfile: `docker build --tag <library-name> .`
- In your project, run `npm update bluesquare-components`
- Update your project's Docker image
- Start the container


## Publishing on npm?

Coming soon.