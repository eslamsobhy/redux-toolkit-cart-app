<a name="readme-top"></a>
<br />

<div align="center">
  <a href="https://github.com/eslamsobhy/redux-toolkit-cart-app">
    <img src="public/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">Redux Toolkit Cart-app</h1>

  <p align="center">
    <a href="https://cart-app-rho.vercel.app/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center"><img src="public/images/screenshot.jpg" alt="screenshot" width="80%" height=auto></div>
<br/>

Shopping Cart app is a single page application that is responsible for displaying all of your shopping
cart items with the ability to:

- Remove a specific item.
- Increase or decrease the amount of a specific item.
- Remove the whole cart.
- Live update of the whole cart amount and price.

I've built the same application with almost the same functionalities BUT used different tools:

- `Context API`.
- `useReducer Hook`.

You can check it out from here: <a href="https://github.com/eslamsobhy/cart-app">Shopping cart app</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p><hr/>

### ⚡ Technologies

- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3)
- [![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)
- ![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react)

<p align="right">(<a href="#readme-top">back to top</a>)</p><hr/>

<!-- GETTING STARTED -->

## Getting Started

Here I'll guide you through all of the steps followed during implementing this app:

### Installation

- Install The Project with redux from the beginning:

```sh
npx create-react-app shopping-cart-app --template redux
```

- @latest

```sh
npx create-react-app@latest shopping-cart-app --template redux
```

#### OR:

- Install Redux to an existing project:

```sh
npm install @reduxjs/toolkit react-redux
```

#### @reduxjs/toolkit

consists of few libraries

- redux (core library, state management)
- immer (allows to mutate state)
- redux-thunk (handles async actions)
- reselect (simplifies reducer functions)

#### Extras

- redux devtools
- combine reducers

### Steps

1. Connecting our app to redux:

#### Setup Store:

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

#### Setup Provider:

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import store and provider
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

- <p align="center">(<a href="https://github.com/eslamsobhy/redux-toolkit-cart-app/commit/00105435f59d449bc7220396d033d5d2458c6f9e" target="_blank">visit source code</a>)</p><hr/>

2. Setup the Cart Slice:

<p align="right">(<a href="#readme-top">back to top</a>)</p><hr/>
