export default function reducer(state, action) {
  switch (action.type) {
    case "CHANGED_NAME": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
    case "INCREMENT_AGE": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
  }
}
