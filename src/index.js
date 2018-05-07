import React from "react";
import { render } from "react-dom";
import Video from "./components/Video";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Video />
  </div>
);

render(<App />, document.getElementById("root"));
