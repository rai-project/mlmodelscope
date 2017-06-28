# Web User Interface

## React & Cerebral

### Components

### Modules

#### State

##### Props

##### Compute

#### Actions

Actions may have multiple targets (i.e. bifurcation depending on the result --- success or failure for example). 
The following code checks if the `isError` field is set.
If it is, then it sets `app.isError` to `true` and copies the `message` property to `app.errorMessage`.
No actions are invoked if there are no errors.

```.js
when(props`isError`), {
  true: [
    set(state`app.isError`, true),
    set(state`app.errorMessage`, props`message`)
  ],
  false: []
}
```

#### Signals

##### Chains

A sequence of actions form a chain.
This allows one to create common sequences of actions (such as handling errors or setting the title bar) are reuse them in different places --- effectively composing actions.

For example, the following chain resets application errors.

```.js
const resetError = [
  set(state`app.isError`, false),
  set(state`app.errorMessage`, "")
]
```

It is used at the start of each signal.

```.js
[
  ...resetError,
  set(state`app.currentPage`, "Home"),
  set(state`app.name`, "CarML")
]
```

Common chains are placed in the [`src/modules/common/chains`](https://github.com/rai-project/carml/tree/master/src/modules/common/chains) directory within the CarML repository.

?> The ES6 [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) is useful to compose chains and incorporate them into signals.

## Components

React components are independent UI elements.
The full web UI is formed of these independent components.
This makes it possible to create reusable elements, and work on each component in isolation.

### Semanic UI

At the base, CarML uses [Semantic UI](http://semantic-ui.com) as the css framework through their [react](https://react.semantic-ui.com/) wrappers.
Semantic UI provides UI elements such as grids, buttons, forms, ...

?> If you are familiar with Bootstrap, then Semantic UI serves a similar purpose.

### Pages

!> We should use the new `import()` ES syntax to lazily load pages and break up the `.js` file into smaller components.

### Main Page

#### Upload Area

The upload are components uses [uppy](https://uppy.io) to expose a dashboard where users can drag and drop files to upload.
The upload area allows users to pause and resume uploads as well as uploading multiple files.

#### Model Selector

The model selector is a drop down list of all the models that are advertised through CarML.

### Results Page

#### Label Feature

#### Location Feature

### Models Page

### Model Information Page

#### Model Chart

#### Model Graph

## Development

When starting the web user interface through `yarn` (through `yarn run`).
All routes prefixed with `/api` are proxied to `localhost:8088/api`. 
This allows one to run the webpack server (which handles UI elements) independently from the webserver (which handles api endpoints).

?> You can use a tools such as [generact](https://github.com/diegohaz/generact) to clone a component and customize it.

### Debugging
