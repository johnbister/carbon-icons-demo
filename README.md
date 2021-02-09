# Carbon Icons Demo

This is a demo site to show potential variations of animations for Carbon Icons. 

- The CSS for the animations is located at carbon-icons-demo/src/styles/CustomIconAnimations.scss
- Currently the icons being styled are located at carbon-icons-demo/node_modules/@carbon/icons-vue/lib, and the title of each icon is listed by the corresponding animation in the SCSS file.  
- I placed these icons in the repo as part of an exploration in which I made changes to the @carbon-icon code to add HTML data attributes, and currently I am using those data attributes as selectors in the SCSS file. This is not a long-term solution.  Ideally we would style using classes instead.  


This project was created using ```vue-create```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
