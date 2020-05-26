import "../assets/styles/main.css";
import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";

class MyApp extends App {
  render() {
    const { Component, pageProps} = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
