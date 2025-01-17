import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {MoralisProvider} from "react-moralis";
import "./index.css";
import QuickStart from "components/QuickStart";
import {MoralisDappProvider} from "./providers/MoralisDappProvider/MoralisDappProvider";

/** Get your free Moralis Account https://moralis.io/ */
/*
const APP_ID = "vYOgIMso0FV6bq1YRg4Ew3qmfuJhOb2Yy5c2xCvW";
const SERVER_URL = "https://j0lecmwqvhvo.usemoralis.com:2053/server";
*/
const Application = () => {
  const isServerInfo = true;
  if (isServerInfo)
    return (
      <MoralisProvider appId="6KyON5tcUac3a61pGSP94t6hewyqGUl5HNpGOXvY" serverUrl="https://wsvywkyx3ozz.bigmoralis.com:2053/server">
        <MoralisDappProvider>
          <App isServerInfo />
        </MoralisDappProvider>
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <QuickStart />
      </div>
    );
  }
};

ReactDOM.render(
  // <React.StrictMode>
  <Application />,
  // </React.StrictMode>,
  document.getElementById("root")
);
