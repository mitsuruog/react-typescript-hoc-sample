import * as React from "react";

import { clickCountHOC } from "./ClickCountHOC";
import ClickArea from "./ClickArea";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Wrapped1 = clickCountHOC()(ClickArea);
const Wrapped2 = clickCountHOC({ debug: true })(ClickArea);

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div>
        <h1>Here is a simple example with HOC</h1>
        <Wrapped1 style={{ padding: 10 }} />
        <Wrapped2 style={{ padding: 10, background: "gray" }} />
      </div>
    )
  }
}
