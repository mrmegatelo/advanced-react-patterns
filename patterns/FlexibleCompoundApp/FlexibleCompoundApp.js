import * as React from "react";
// Import some styles.
import "./FlexibleCompoundApp.scss";
// Import the toggle component.
import FlexibleCompoundToggle from "../../components/FlexibleCompoundToggle/FexibleCompoundToggle";
class FlexibleCompoundApp extends React.Component {
    constructor(props) {
        super(props);
        // Bind the class methods.
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle(toggleStatus) {
        // tslint:disable-next-line:no-console
        console.log(`The 'Flexible Compound' toggle status is ${toggleStatus}`);
    }
    render() {
        return (<FlexibleCompoundToggle onToggle={this.onToggle}>
                <FlexibleCompoundToggle.On>
                    <div className="text">The toggle button is On</div>
                </FlexibleCompoundToggle.On>
                <FlexibleCompoundToggle.Off>
                    <div className="text">The toggle button is Off</div>
                </FlexibleCompoundToggle.Off>
                <FlexibleCompoundToggle.Button />
            </FlexibleCompoundToggle>);
    }
}
export default FlexibleCompoundApp;
//# sourceMappingURL=FlexibleCompoundApp.js.map