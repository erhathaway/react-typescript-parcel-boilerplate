# react-typescript-parcel-boilerplate
A React,Typescript, and Parcel boilerplate

...with MobX, Styled-Components, and AnimeJS along for the ride

# Usage

1. Edit the `package.json` file and specify project attributes. All of the following should be customized:
   - `name`
   - `version`
   - `description`
   - `repository`
   - `author`
   - `license`
   - `bugs`
   - `homepage`

2. Install the dependencies `npm install` or `yarn install`
3. Run the example app `npm run start`

# Architecture

The example app makes uses of something I call `Scene-Feature-State` organization. 

- `src/index`: The app is organized around `scenes` which describe the layout of features and the routing between them. If you make a large app, it can be useful to make a `src/scenes` folder and add a layer of composition to scenes for things like viewports.
- `src/features` Features are isolated units. State is bound to features via the React Context API and MobX. Features should only be a view layer and not contain the business logic. 
- `src/state`: Business logic is stored in the `state` folder. This logic is written in the functional reactive paradigm - hence the usage of MobX.
- `src/context`: The place where state is bound to the Context API. Business logic is instantiated here.
