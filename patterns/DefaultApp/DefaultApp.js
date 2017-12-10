import * as React from "react";
// Import the toggle component.
import DefaultToggle from "../../components/DefaultToggle/DefaultToggle";
class DefaultApp extends React.Component {
    constructor(props) {
        super(props);
        // Bind the class methods.
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle(toggleStatus) {
        // tslint:disable-next-line:no-console
        console.log(`The 'Default' toggle status is ${toggleStatus}`);
    }
    render() {
        return (<DefaultToggle onToggle={this.onToggle}/>);
    }
}
export default DefaultApp;
//# sourceMappingURL=DefaultApp.js.map