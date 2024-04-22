import store from "@/lib/redux/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

interface IProvider {
  children: ReactNode;
}

const reduxProvider = ({ children }: IProvider) => {
  return <Provider store={store}>{children}</Provider>;
};

export default reduxProvider;
