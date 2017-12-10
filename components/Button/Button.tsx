import * as React from "react";

// Import the component style.
import "./Button.scss";

// The props interface.
export interface IButtonProps {
    event?: string;
    // We are using on for as the prop name to demonstrate collision between props.
    on?: (event) => void;
}

class Button extends React.Component<IButtonProps> {

    private static defaultProps = {
        event: "",
        // tslint:disable-next-line:no-empty
        on: () => {},
    };

    public render() {
        const { on, event } = this.props;

        return (
            <button onClick={on} className="Button">
                The {event} event
            </button>
        );
    }
}

export default Button;
