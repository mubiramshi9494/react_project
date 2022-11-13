import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/index";
import Header from "./components/Header";
import Users from './components/Users/index'
import Body from './components/Body/index'
import SinglePost from './components/SinglePost/index'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/all-users" element={<Users />} />
        <Route exact path="/single-post/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
