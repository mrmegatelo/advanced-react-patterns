import * as PropTypes from "prop-types";
import * as React from "react";

// Import external components.
import Switch from "../Switch/Switch";

const TOGGLE_CONTEXT = "__toggle__";

export interface IToggleContext {
    on?: boolean;
    children?: React.ReactElement<any>;
    toggle?: () => void;
}

// Create a higher order component for the toggle.]
// Export the factory method.
export const withToggle = (Component: React.StatelessComponent<IToggleContext>) => {
    const Wrapper: React.StatelessComponent<IToggleContext> = (props, context) => {
        const toggleContext = context[TOGGLE_CONTEXT];
        return <Component {...toggleContext} {...props} />;
    };

    Wrapper.contextTypes = {
        [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
    };

    return Wrapper;
};

const ToggleOn: React.StatelessComponent<IToggleContext> = withToggle(({ children, on }) => {
    return on ? children : null;
});

const ToggleOff: React.StatelessComponent<IToggleContext> = withToggle(({ children, on }) => {
    return on ? null : children;
});

const ToggleButton: React.StatelessComponent<IToggleContext> = withToggle(({ on, toggle, ...props}) => {
    return <Switch status={on} onClick={toggle} {...props} />;
});

interface ISwitchProps {
    onToggle?: (toggleStatus: boolean) => void;
}

interface ISwitchState {
    on?: boolean;
    toggle?: (toggleStatus: boolean) => void;
}

class FexibleCompoundToggleWithHOC extends React.Component<ISwitchProps, ISwitchState> {

    public static On = ToggleOn;
    public static Off = ToggleOff;
    public static Button = ToggleButton;
    public static withToggle = withToggle;

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

export default FexibleCompoundToggleWithHOC;
