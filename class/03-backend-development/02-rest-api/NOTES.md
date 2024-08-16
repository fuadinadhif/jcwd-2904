# NOTES

## `JSON` vs `.json()`

1. Ownership

- `JSON`: Owned by JavaScript
- `.json()`: Owned by Express.js

2. Functionality

- `JSON`: To convert JSON to POJO or vice versa. e.g:
  - `JSON.parse()`: Convert JSON to POJO
  - `JSON.stringify()`: Convert POJO to JSON
- `.json()`: To send a response object from server side to the client side in JSON format

## `&&` and `||`

1. `&&`: If the first variable is falsy, return the first argument. Else return the second argument. E.g:

```
// 1.
return <Loading/> && <Header/>

// 2.
const auth = auth && 1000;

```

2. `||`: The opposite of `&&`
