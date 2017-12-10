import * as React from "react";
// Import the component style.
import "./Switch.scss";
class Switch extends React.Component {
    render() {
        const { status, onClick } = this.props;
        return (<label className="switch">
              <input type="checkbox" checked={status} onClick={onClick}/>
              <span className="slider round"/>
            </label>);
    }
}
Switch.defaultProps = {
    // tslint:disable-next-line:no-empty
    onClick: () => { },
    status: false,
};
export default Switch;
//# sourceMappingURL=Switch.js.map