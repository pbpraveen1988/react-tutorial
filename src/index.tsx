import * as React from "react";
import * as ReactDOM from "react-dom";

import { Showcase } from "./components/Showcase";

ReactDOM.render(
    <Showcase compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);