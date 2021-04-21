// Andrew Barlow
// index.tsx
// strictly speaking an unnecessary extra abstraction layer inherited from create-react-app
// not going to delete though, bc it works and so I'm not too concerned
// Universal Design
// 2021

import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
