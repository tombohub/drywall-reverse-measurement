## Architecture

### application layers

Independent of React from top to bottom:

- utility layer: low level implementations and utilities. Not dependent on any other layer
- drywall layer: domain layer dealing with logic and rules for drywall measurements and other. Dependency only on implementation layer
- game layer: game logic and rules. Dependency on drywall layer and utility

React app itself has layers:

- store layer: Using redux slices. 
  There is possibility of moving some logic to the slice actions because it would be easier to follow events in redux dev tools time travel.
- hooks layer: Need to check
- ui layer: theme configuration, ui utility functions
- components layer: react components. Components are as dumb as possible. Only logic allowed is one closely related to the components display itself. All other logic especially game flow. Depends on ui layer, custom hooks and redux. 
