import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import Globalcontext from "./components/context/Globalcontext";

ReactDOM.render(
  <React.StrictMode>
    <Globalcontext>
      <App />
    </Globalcontext>
  </React.StrictMode>,
  document.getElementById("root")
);
