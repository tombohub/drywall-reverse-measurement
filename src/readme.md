## Architecture

### application layers

Independent of React from top to bottom:

- utility layer: low level implementations and utilities2q . Not dependent on any other layer
- drywall layer: domain layer dealing with logic and rules for drywall measurements and other. Dependency only on implementation layer
- game layer: game logic and rules. Dependency on drywall layer and utility

React app itself has layers:

- store layer: Using redux slices. Only logic allowed is logic closely related to the slice state. For example countdown. It's logical to stop countdown when it reaches zero. Dependency on game layer only for setting up initial state.
  There is possibility of moving some logic to the slice actions because it would be easier to follow events in redux dev tools time travel.
- hooks layer: Brain of the app. Similar to controller in MVC. Dependency on game layer and store. Logic for managing state by calling redux actions. When what where runs in game is managed here and states are exported from this layer.
- ui layer: theme configuration, ui utility functions
- components layer: react components. Components are as dumb as possible. Only logic allowed is one closely related to the components display itself. All other logic especially game flow and state belongs to hooks. Depends on ui layer and custom hooks. Using redux state is not allowed.
