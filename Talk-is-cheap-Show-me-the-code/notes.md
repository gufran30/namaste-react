## What is `Props` ?

- props are just normal **arguments** to the function
- functional component is just a normal is Js function.
- helps to pass **dynamic** data to a component.

## How data come from the Backend ?

- data come in the form of **json**.

## what is config driven ui ?

`frontend interview Ques.`

- design pattern
- where the structure, layout, and behavior of a user interface are defined by external configuration files or data structures,
- rather than being hard-coded directly within the application's source code.
- Ex : **api** (in json format)
- UI is powered by data
- Sometimes we see offer/designs/UI etc. according to locationc

## What is configuration driven development?

`frontend interview Ques.`

- Configuration-driven development (CDD) is a software development approach
- that focuses on using external configuration data and files to drive the development process and to control the behavior and the functionality of the software.

## Why this warning ?

`listenToRuntimeErrors.js:137 Each child in a list should have a unique "key" prop.`

> The warning "Each child in a list should have a **unique 'key**' prop" in React means you need to provide a unique key prop to each element when rendering lists to help React efficiently update the UI. Use a stable, unique identifier for the key whenever possible.

> NOTE: it's okay to use index as a key **but not recommended**.

- This is a common React warning
- indicating that you are rendering a list of elements without providing a unique key prop to each item.
- React uses the key prop internally to efficiently update and re-render list items when the data changes.
- Without a unique key, React has difficulty identifying which items have changed, been added, or been removed, which can lead to performance issues and potential rendering errors.
