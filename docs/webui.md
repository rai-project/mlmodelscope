# Web User Interface

![website](<assets/screenshots/main-page.png|height=247, width=213, align=floated> "CarML Main Page")

## React & Cerebral

### Components

### Modules

#### State

##### Props

##### Compute

#### Actions

Actions may have multiple targets (i.e. bifurcation depending on the result --- success or failure for example). 
The following code checks if the `error` field is populated.
If it is, then it sets `app.error` is not `null` and copies the `error` property to `app.error`.
No actions are invoked if there are no errors.

```.js
when(props`error`), {
  true: [
    set(state`app.error`, props`error`)
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
  set(state`app.error`, null)
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

![upload area](<assets/screenshots/upload-area.png|height=185, width=386, align=center> "CarML Upload Area")

The upload are components uses [uppy](https://uppy.io) to expose a dashboard where users can drag and drop files to upload.
The upload area allows users to pause and resume uploads as well as uploading multiple files.

#### Model Selector

The model selector is a drop down list of all the models that are advertised through CarML.

### Results Page

![results page](<assets/screenshots/inference-results-page.png|height=257, width=253, align=center> "Results Page")

#### Label Feature

![label feature](<assets/screenshots/label-feature.png|height=126, width=383, align=center> "Label feature")

#### Location Feature

![location feature](<assets/screenshots/location-feature.png|height=185, width=387, align=center> "Location feature")

### Models Page

![models page](<assets/screenshots/models-page.png|height=257, width=253, align=center> "Models Page")

### Model Information Page

#### Model Chart

#### Model Graph

## Development

When starting the web user interface through `yarn` (through `yarn run`).
All routes prefixed with `/api` are proxied to `localhost:8088/api`. 
This allows one to run the [webpack](https://webpack.js.org/) server (which handles UI elements) independently from the webserver (which handles api endpoints).

?> You can use a tools such as [generact](https://github.com/diegohaz/generact) to clone a component and customize it.

### Debugging

![cerebral-debugger](<assets/screenshots/cerebral-debugger.png|height=325, width=425, align=center> "Cerebral Debugger")

### State Tree

![cerebral-state](<assets/screenshots/cerebral-state.png|height=325, width=425, align=center> "Cerebral State")

!> The current state tree structure is not ideal. It creates artificial limits, such as the inability to perform inference on multiple frameworks or models.

### Component Dependencies

![cerebral-components](<assets/screenshots/cerebral-components.png|height=325, width=425, align=center> "Cerebral Components")

### Mutations

![cerebral-mutations](<assets/screenshots/cerebral-mutations.png|height=325, width=425, align=center> "Cerebral Mutations")
