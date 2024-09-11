<!-- ------------------------------- Step 1 -------------------------------- -->

```
npm init --y
npm i -D typescript nodemon ts-node ts-jest supertest @types/jest @types/express @types/supertest
npm i express
```

```
npx tsc -init
npx ts-jest config:init
```

```
// package.json
"scripts": {
  "test": "jest"
}
```

```
npx jest
```

<!-- ------------------------------- Step 2 -------------------------------- -->

```
npm i -D prisma
npx prisma init --datasource-provider mysql
```

```
DATABASE_URL="mysql://johndoe:randompassword@localhost:3306/mydb"
```

```
npx prisma db push
```

<!-- ------------------------------ Mock User ------------------------------ -->

```
npm i -D jest-mock-extended
```

<!-- ------------------------- Mock External Data -------------------------- -->

```
npm i -D nock
```
