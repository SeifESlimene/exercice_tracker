import DirectionProvider, {
  DIRECTIONS,
} from "react-with-direction/dist/DirectionProvider";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <DirectionProvider direction={DIRECTIONS.RTL}>
      <App />
    </DirectionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
