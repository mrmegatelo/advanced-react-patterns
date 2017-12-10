import * as React from "react";

// Import an external toggle component with its styles.
import Toggle from "react-toggle";
import "react-toggle/style.css";

// Import some styles.
import "./HOCAppFirstIteration.scss";

// Import the toggle component.
import HOCToggleFirstIteration,
{ IToggleContext } from "../../components/HOCToggleFirstIteration/HOCToggleFirstIteration";

class HOCAppFirstIteration extends React.Component {

    constructor(props) {
        super(props);

        // Bind the class methods.
        this.onToggle = this.onToggle.bind(this);
    }

    public onToggle(toggleStatus: boolean) {
        // tslint:disable-next-line:no-console
        console.log(`The 'Flexible Compound with HOC' toggle status is ${toggleStatus}`);
    }

    public render() {

        // Use an external toggle to better demonstrate the purpose of higher order components.
        const ToggleComponent: React.StatelessComponent<IToggleContext> =
            HOCToggleFirstIteration.withToggle(({on, toggle}) => (
                <Toggle checked={on} onChange={toggle} />
            ));

        return (
            <HOCToggleFirstIteration onToggle={this.onToggle}>
                <HOCToggleFirstIteration.On>
                    <div className="blockDisplay">The toggle button is On</div>
                </HOCToggleFirstIteration.On>
                <HOCToggleFirstIteration.Off>
                    <div className="blockDisplay">The toggle button is Off</div>
                </HOCToggleFirstIteration.Off>
                <div className="blockDisplay">
                    <HOCToggleFirstIteration.Button  />
                </div>
                <ToggleComponent />
            </HOCToggleFirstIteration>
        );
    }
}

export default HOCAppFirstIteration;
