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

2. Edit the `.github/CODEOWNERS` file and add your github user name

3. Install the dependencies `npm install` or `yarn install`
4. Run the example app `npm run start`

# Architecture

The example app makes uses of something I call `Layout-Component-State` organization.

-   `src/layouts`: The app is organized around `layouts`. Layouts describe how components visually appear with respect to one another and how the components are routed. Animations, routing, and viewport adjustmens should be handled at the layout level.
-   `src/components` Components are isolated units. State is bound to components via the React Context API and MobX. Components should only be a view layer and all the business logic should just be interpolated into the view layer, not defined in the view layer!.
-   `src/state`: Business logic is stored in the `state` folder. This logic is written in the functional reactive paradigm - hence the usage of MobX.
-   `src/context`: The place where state is bound to the Context API. Business logic is instantiated here.
