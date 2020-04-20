# Design system

## Run storybook
```
// install dependencies
npm i 

// run storybook locally
npm run storybook
```

## Concept
The system is organised in tokens, atoms and components. 
A design system needs to be highly reusable as well as enhance experience for Developers, designers and users.
Theme is a backbone on this approach to provide flexibility and a great dark theme :)
This is just the initial approach. A system is expected to change and adapt over time.

### Tokens
Tokens are the base all our visual design(color, spacing, typography)

### Atoms
Atoms are styled elements that are highly reusable.

### Components 
Components provide functionality and enforce best practices for UX and accessibility.

## Tech
This project uses create-react-app [Create React App](https://github.com/facebook/create-react-app) with typescript and storybook. For styling uses styled-components with theme provider to allow some of the base properties to be changed.

## Highlights
* themes: by manually changing from `theme.light` to `theme.dark` in the file `.storybook/preview.js`, the dark theme will be applied to all components. The Card components is the best example, for now.

## Future

### Documentation 
Plays an important role in a design system, and has a big impact on adoption. 
Storybook plugin `@storybook/addon-docs` was added to provide a way to see the code. When running storybook, there are 2 tabs: `Canvas` and `Docs`. The documentation is available under the Docs tab.


### Accessibility
Support for accessibility is minimal for the initial delivery. Will be improved and provided where needed. 

There are great plugins for storybook to help shape accessibility to the recommended level.

### Support for CSS library
In order to be able to scale design system's usage to all products and marketing sites, the system should provide a css library using methodologies like OOCSS, SMACSS or BEM.

### 