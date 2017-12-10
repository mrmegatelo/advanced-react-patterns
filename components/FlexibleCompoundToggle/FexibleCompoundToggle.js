import * as PropTypes from "prop-types";
import * as React from "react";
// Import external components.
import Switch from "../Switch/Switch";
const TOGGLE_CONTEXT = "__toggle__";
const ToggleOn = ({ children }, context) => {
    const { on } = context[TOGGLE_CONTEXT];
    return on ? children : null;
};
ToggleOn.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};
const ToggleOff = ({ children }, context) => {
    const { on } = context[TOGGLE_CONTEXT];
    return on ? null : children;
};
ToggleOff.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};
const ToggleButton = (props, context) => {
    const { on, toggle } = context[TOGGLE_CONTEXT];
    return <Switch status={on} onClick={toggle} {...props}/>;
};
ToggleButton.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};
class FexibleCompoundToggle extends React.Component {
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
FexibleCompoundToggle.On = ToggleOn;
FexibleCompoundToggle.Off = ToggleOff;
FexibleCompoundToggle.Button = ToggleButton;
FexibleCompoundToggle.defaultProps = {
    // tslint:disable-next-line:no-empty
    onToggle: () => { },
};
FexibleCompoundToggle.childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};
export default FexibleCompoundToggle;
//# sourceMappingURL=FexibleCompoundToggle.js.map