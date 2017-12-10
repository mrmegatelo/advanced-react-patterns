import * as PropTypes from "prop-types";
import * as React from "react";

// Import external components.
import Switch from "../Switch/Switch";

const TOGGLE_CONTEXT = "__toggle__";

interface IToggleContext {
    on?: boolean;
    children?: React.ReactElement<any>;
    toggle?: () => void;
}

const ToggleOn: React.StatelessComponent<IToggleContext> = ({ children }, context: IToggleContext) => {
    const { on } = context[TOGGLE_CONTEXT];
    return on ? children : null;
};

ToggleOn.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};

const ToggleOff: React.StatelessComponent<IToggleContext> = ({ children }, context: IToggleContext) => {
    const { on } = context[TOGGLE_CONTEXT];
    return on ? null : children;
};

ToggleOff.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};

const ToggleButton: React.StatelessComponent<IToggleContext> = (props, context: IToggleContext) => {
    const { on, toggle } = context[TOGGLE_CONTEXT];
    return <Switch status={on} onClick={toggle} {...props} />;
};

ToggleButton.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};

interface ISwitchProps {
    onToggle?: (toggleStatus: boolean) => void;
}

interface ISwitchState {
    on?: boolean;
    toggle?: (toggleStatus: boolean) => void;
}

class FexibleCompoundToggle extends React.Component<ISwitchProps, ISwitchState> {

    public static On = ToggleOn;
    public static Off = ToggleOff;
    public static Button = ToggleButton;

    private static defaultProps = {
        // tslint:disable-next-line:no-empty
        onToggle: () => {},
    };

    private static childContextTypes = {
        [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            on: false,
        };

        // Bind the class methods.
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    public handleToggleClick() {
        this.setState(({on}) => ({on: !on}), () => {
            this.props.onToggle(this.state.on);
        });
    }

    public getChildContext() {
        return {
            [TOGGLE_CONTEXT]: {
                on: this.state.on,
                toggle: this.handleToggleClick,
            },
        };
    }

    public render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

export default FexibleCompoundToggle;
