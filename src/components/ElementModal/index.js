import React, { Component } from 'react';

class ElementModal extends Component {
    constructor(props) {
        super(props);
}

    render() {
        return (
            <div>
                <h3>Add Details</h3>
                <p>
                    <label>Label : 
                        <input type="text" value = {this.props.element.label}></input>
                    </label>
                </p>
                <p>
                    <label>Placeholder : 
                        <input type="text" value = {this.props.element.placeholder}></input>
                    </label>
                </p>
                    <label>Type : 
                        <input type="text" value = {this.props.element.type}></input>
                    </label>
                <p>
                    <label>maxLength : 
                        <input type="text" value = {this.props.element.maxLength}></input>
                    </label>
                </p>
                <p>
                    <label>minLength : 
                        <input type="text" value = {this.props.element.minLength}></input>
                    </label>
                </p>
                <input type="submit" value="Save"></input>
            </div>
        );
    }
}

export default ElementModal;
