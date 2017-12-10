import * as React from "react";
// Import an external toggle component with its styles.
import Toggle from "react-toggle";
import "react-toggle/style.css";
// Import a button.
import Button from "../../components/Button/Button";
// Import some styles.
import "./HOCAppSecondIteration.scss";
// Import the toggle component.
import HOCToggleSecondIteration from "../../components/HOCToggleSecondIteration/HOCToggleSecondIteration";
class HOCAppSecondIteration extends React.Component {
    constructor(props) {
        super(props);
        // Bind the class methods.
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle(toggleStatus) {
        // tslint:disable-next-line:no-console
        console.log(`The 'Flexible Compound with HOC namespacing' toggle status is ${toggleStatus}`);
    }
    render() {
        // Use an external toggle to better demonstrate the purpose of higher order components.
        const ImportedToggle = ({ toggle: { on, onClick } }) => (<Toggle checked={on} onChange={onClick}/>);
        const ToggleComponent = HOCToggleSecondIteration.withToggle(ImportedToggle);
        // If you want to change the display name of the react component in the dev-tools;
        // set the value of the component's displayName.
        ToggleComponent.displayName = "MyCustomImportedToggle";
        const EventComponent = (props) => {
            const { on: toggleOn, onClick } = props.toggle;
            const event = props.event;
            return toggleOn ? (<Button event={event} on={props.on}/>) : null;
        };
        const MyEventComponent = HOCToggleSecondIteration.withToggle(EventComponent);
        return (<HOCToggleSecondIteration onToggle={this.onToggle}>
                <HOCToggleSecondIteration.On>
                    <div className="blockDisplay">The toggle button is On</div>
                </HOCToggleSecondIteration.On>
                <HOCToggleSecondIteration.Off>
                    <div className="blockDisplay">The toggle button is Off</div>
                </HOCToggleSecondIteration.Off>
                <div className="blockDisplay">
                    <HOCToggleSecondIteration.Button />
                </div>
                <ToggleComponent />
                <MyEventComponent event="onClick" 
        // tslint:disable-next-line:jsx-no-lambda
        on={(e) => alert(e.type)}/>
            </HOCToggleSecondIteration>);
    }
}
export default HOCAppSecondIteration;
//# sourceMappingURL=HOCAppSecondIteration.js.map