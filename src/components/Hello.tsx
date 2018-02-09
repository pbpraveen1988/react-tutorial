import * as React from "react";
import * as Blueprint from "@blueprintjs/core";
import { Tab2, Tabs2 } from "@blueprintjs/core";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (<Tabs2 id="Tabs2Example" vertical={true} >
            <Tab2 id="rx" title="React" panel={<div> React JS </div>} />
            <Tab2 id="ng" title="Angular" panel={<div> Angular JS </div>} />
            <Tab2 id="mb" title="Ember" panel={<div> Ember JS </div>} />
            <Tab2 id="bb" disabled title="Backbone" panel={<div> Backbone JS </div>} />
            <Tabs2.Expander />
            <input className="pt-input" type="text" placeholder="Search..." />
        </Tabs2>)

        //        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
        
    }
}