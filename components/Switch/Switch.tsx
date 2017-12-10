import * as React from "react";

// Import the component style.
import "./Switch.scss";

// The props interface.
interface ISwitchProps {
    status?: boolean;
    onClick?: (event) => void;
}

class Switch extends React.Component<ISwitchProps, {}> {

    private static defaultProps = {
        // tslint:disable-next-line:no-empty
        onClick: () => {},
        status: false,
    };

    public render() {
        const { status, onClick } = this.props;

        return (
            <label className="switch">
              <input type="checkbox" checked={status} onClick={onClick} />
              <span className="slider round" />
            </label>
        );
    }
}

export default Switch;
