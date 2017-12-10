import * as React from "react";
// Import some styles.
import "./CompoundApp.scss";
// Import the toggle component.
import CompoundToggle from "../../components/CompoundToggle/CompoundToggle";
class CompoundApp extends React.Component {
    constructor(props) {
        super(props);
        // Bind the class methods.
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle(toggleStatus) {
        // tslint:disable-next-line:no-console
        console.log(`The 'Compound' toggle status is ${toggleStatus}`);
    }
    render() {
        return (<CompoundToggle onToggle={this.onToggle}>
                <CompoundToggle.On>
                    <div className="text">The toggle button is On</div>
                </CompoundToggle.On>
                <CompoundToggle.Off>
                    <div className="text">The toggle button is Off</div>
                </CompoundToggle.Off>
                <CompoundToggle.Button />
            </CompoundToggle>);
    }
}
export default CompoundApp;
//# sourceMappingURL=CompoundApp.js.map