import * as React from "react";

// Import the toggle component.
import DefaultToggle from "../../components/DefaultToggle/DefaultToggle";

class DefaultApp extends React.Component {

    constructor(props) {
        super(props);

        // Bind the class methods.
        this.onToggle = this.onToggle.bind(this);
    }

    public onToggle(toggleStatus: boolean) {
        // tslint:disable-next-line:no-console
        console.log(`The 'Default' toggle status is ${toggleStatus}`);
    }

    public render() {
        return (
            <DefaultToggle onToggle={this.onToggle} />
        );
    }
}

export default DefaultApp;
