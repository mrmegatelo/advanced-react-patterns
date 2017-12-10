var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from "react";
// Import external components.
import Switch from "../Switch/Switch";
const ToggleOn = ({ on, children }) => {
    return on ? children : null;
};
const ToggleOff = ({ on, children }) => {
    return on ? null : children;
};
const ToggleButton = (_a) => {
    var { on, toggle } = _a, props = __rest(_a, ["on", "toggle"]);
    return <Switch status={on} onClick={toggle} {...props}/>;
};
class CompoundToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            on: false,
        };
        // Bind the class methods.
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(({ on }) => ({ on: !on }), () => {
            this.props.onToggle(this.state.on);
        });
    }
    render() {
        const { on } = this.state;
        const children = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
            on: this.state.on,
            toggle: this.handleToggleClick,
        }));
        return (<div>{children}</div>);
    }
}
CompoundToggle.On = ToggleOn;
CompoundToggle.Off = ToggleOff;
CompoundToggle.Button = ToggleButton;
CompoundToggle.defaultProps = {
    // tslint:disable-next-line:no-empty
    onToggle: () => { },
};
export default CompoundToggle;
//# sourceMappingURL=CompoundToggle.js.map