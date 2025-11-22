import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LikeCounter from "./components/LikeCounter/LikeCounter";
import { Provider } from "react-redux";
import { store } from "./Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

    {/* <h1>Latest Posts</h1>
    <div className='posts'>
      <LikeCounter title='1. Pierwszy post' description='Opis naszego artykulu' count='5' bgcolor='lightblue' autor='Jakis Pan1'></LikeCounter>
      <LikeCounter title='2. Pierwszy post' description='Opis naszego artykulu' count='16' bgcolor='lightgreen' autor='Jakis Pan2'></LikeCounter>
      <LikeCounter title='3. Pierwszy post' description='Opis naszego artykulu' count='3' bgcolor='lightpink' autor='Jakis Pan3'></LikeCounter>
    </div> */}
  </React.StrictMode>
);
