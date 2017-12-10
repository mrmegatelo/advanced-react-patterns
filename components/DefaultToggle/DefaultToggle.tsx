import * as React from "react";

// Import the switch component.
import Switch from "../Switch/Switch";

// The props interface.
interface ISwitchProps {
    onToggle?: (toggleStatus: boolean) => void;
}

// The state interface.
interface ISwitchState {
    isToggleChecked: boolean;
}

class DefaultToggle extends React.Component<ISwitchProps, ISwitchState> {

    private static defaultProps = {
        // tslint:disable-next-line:no-empty
        onToggle: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            isToggleChecked: false,
        };

        // Bind the class methods.
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    public handleToggleClick() {
        this.setState(({isToggleChecked}) => ({isToggleChecked: !isToggleChecked}), () => {
            this.props.onToggle(this.state.isToggleChecked);
        });
    }

    public render() {
        const { isToggleChecked } = this.state;

        return (
            <Switch status={isToggleChecked} onClick={this.handleToggleClick} />
        );
    }
}

export default DefaultToggle;
