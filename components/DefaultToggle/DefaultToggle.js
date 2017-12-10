import * as React from "react";
// Import the switch component.
import Switch from "../Switch/Switch";
class DefaultToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleChecked: false,
        };
        // Bind the class methods.
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(({ isToggleChecked }) => ({ isToggleChecked: !isToggleChecked }), () => {
            this.props.onToggle(this.state.isToggleChecked);
        });
    }
    render() {
        const { isToggleChecked } = this.state;
        return (<Switch status={isToggleChecked} onClick={this.handleToggleClick}/>);
    }
}
DefaultToggle.defaultProps = {
    // tslint:disable-next-line:no-empty
    onToggle: () => { },
};
export default DefaultToggle;
//# sourceMappingURL=DefaultToggle.js.map