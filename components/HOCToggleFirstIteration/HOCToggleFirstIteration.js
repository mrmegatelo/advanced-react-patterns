var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as PropTypes from "prop-types";
import * as React from "react";
// Import external components.
import Switch from "../Switch/Switch";
const TOGGLE_CONTEXT = "__toggle__";
// Create a higher order component for the toggle.]
// Export the factory method.
export const withToggle = (Component) => {
    const Wrapper = (props, context) => {
        const toggleContext = context[TOGGLE_CONTEXT];
        return <Component {...toggleContext} {...props}/>;
    };
    Wrapper.contextTypes = {
        [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
    };
    return Wrapper;
};
const ToggleOn = withToggle(({ children, on }) => {
    return on ? children : null;
});
const ToggleOff = withToggle(({ children, on }) => {
    return on ? null : children;
});
const ToggleButton = withToggle((_a) => {
    var { on, toggle } = _a, props = __rest(_a, ["on", "toggle"]);
    return <Switch status={on} onClick={toggle} {...props}/>;
});
class FexibleCompoundToggleWithHOC extends React.Component {
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
    getChildContext() {
        return {
            [TOGGLE_CONTEXT]: {
                on: this.state.on,
                toggle: this.handleToggleClick,
            },
        };
    }
    render() {
        return (<div>{this.props.children}</div>);
    }
}
FexibleCompoundToggleWithHOC.On = ToggleOn;
FexibleCompoundToggleWithHOC.Off = ToggleOff;
FexibleCompoundToggleWithHOC.Button = ToggleButton;
FexibleCompoundToggleWithHOC.withToggle = withToggle;
FexibleCompoundToggleWithHOC.defaultProps = {
    // tslint:disable-next-line:no-empty
    onToggle: () => { },
};
FexibleCompoundToggleWithHOC.childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};
export default FexibleCompoundToggleWithHOC;
//# sourceMappingURL=HOCToggleFirstIteration.js.map