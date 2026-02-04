# React Class

### React class :

- nothing but a js class
- just like functional component is nothing but component in js

### Whenever the class is instanciated:

- constructor is called
- render() is called

```js
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div></div>;
  }
}
```

### What is the use of componentDidMount() ?

- to make api call

```js
componentDidMount() {
    console.log("Child Component Mount")
}
```
