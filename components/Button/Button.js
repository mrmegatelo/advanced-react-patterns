import * as React from "react";
// Import the component style.
import "./Button.scss";
class Button extends React.Component {
    render() {
        const { on, event } = this.props;
        return (<button onClick={on} className="Button">
                The {event} event
            </button>);
    }
}
Button.defaultProps = {
    event: "",
    // tslint:disable-next-line:no-empty
    on: () => { },
};
export default Button;
//# sourceMappingURL=Button.js.map