import App from "next/app";
import { Provider } from "react-redux";
import store, { makeStore } from "../client/redux/store";
import { createWrapper } from "next-redux-wrapper";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
