import * as PropTypes from "prop-types";
import * as React from "react";
import { IButtonProps } from "../Button/Button";

// Import external components.
import Switch from "../Switch/Switch";

const TOGGLE_CONTEXT = "__toggle__";

interface IToggle {
    on?: boolean;
    onClick?: () => void;
}

// If we want the higher order component to be able to accept the button
// components' props. Then, we must extend its interface.
export interface IToggleContext extends IButtonProps {
    children?: React.ReactElement<any>;
    toggle?: IToggle;
}

// Create a higher order component for the toggle.
// Export the factory method.
export const withToggle = (Component: React.StatelessComponent<IToggleContext>) => {
    const Wrapper: React.StatelessComponent<IToggleContext> = (props, context) => {
        const toggleContext = context[TOGGLE_CONTEXT];
        return <Component toggle={toggleContext} {...props} />;
    };

    Wrapper.contextTypes = {
        [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
    };

    Wrapper.displayName = `withToggle(${Component.displayName || Component.name})`;

    return Wrapper;
};

const ToggleOn: React.StatelessComponent<IToggleContext> = ({toggle: { on }, children}) => {
    return on ? children : null;
};

const ToggleOff: React.StatelessComponent<IToggleContext> = ({toggle: { on }, children}) => {
    return on ? null : children;
};

const ToggleButton: React.StatelessComponent<IToggleContext> =
    ({toggle: { on, onClick }, ...props}) => {
        return <Switch status={on} onClick={onClick} {...props} />;
    };

interface ISwitchProps {
    onToggle?: (toggleStatus: boolean) => void;
}

interface ISwitchState {
    on?: boolean;
    toggle?: (toggleStatus: boolean) => void;
}

class FexibleCompoundToggleWithHOC extends React.Component<ISwitchProps, ISwitchState> {

    public static On = withToggle(ToggleOn);
    public static Off = withToggle(ToggleOff);
    public static Button = withToggle(ToggleButton);
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
                onClick: this.handleToggleClick,
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
