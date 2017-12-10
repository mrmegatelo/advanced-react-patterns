import * as React from "react";

// Import external components.
import Switch from "../Switch/Switch";

interface IToggleSwitchProps {
    on?: boolean;
    children?: React.ReactElement<any>;
}

const ToggleOn = ({on, children }: IToggleSwitchProps) => {
    return on ? children : null;
};

const ToggleOff = ({on, children }: IToggleSwitchProps) => {
    return on ? null : children;
};

interface IToggleButtonProps {
    on?: boolean;
    toggle?: () => void;
}

const ToggleButton = ({on, toggle, ...props}: IToggleButtonProps) => {
    return <Switch status={on} onClick={toggle} {...props} />;
};

interface ISwitchProps {
    onToggle?: (toggleStatus: boolean) => void;
}

interface ISwitchState {
    on?: boolean;
    toggle?: (toggleStatus: boolean) => void;
}

class CompoundToggle extends React.Component<ISwitchProps, ISwitchState> {

    public static On = ToggleOn;
    public static Off = ToggleOff;
    public static Button = ToggleButton;

    private static defaultProps = {
        // tslint:disable-next-line:no-empty
        onToggle: () => {},
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

    public render() {
        const { on } = this.state;
        const children = React.Children.map(
            this.props.children,
            (child) => React.cloneElement(child as React.ReactElement<any>, {
                on: this.state.on,
                toggle: this.handleToggleClick,
            }),
        );

        return (
            <div>{children}</div>
        );
    }
}

export default CompoundToggle;
