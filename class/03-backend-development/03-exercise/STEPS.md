# Steps to Initate Express Project

1. Init package.json - `npm init --y`
2. Install development dependencies - `npm i -D nodemon @types/express typescript concurrently`
3. Init tsconfig.json - `tsc --init`
4. Edit outDir property in tsconfig.json - `"outDir": "./dist"`
5. Edit scripts in package.json to run our project

```
"scripts": {
    "dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\""
  }
```

6. Make src folder with index.ts file inside it

```
mkdir src
touch src/index.ts
```
