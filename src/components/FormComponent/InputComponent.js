import React from 'react';
export class InputComponent extends React.Component {
    render() {
        return (
            <div>
                <label>{this.props.labelText}</label>
                <br />
                <input type="text" name={this.props.name} onChange={this.props.onChange} value={this.props.value} />
            </div>
        );
    }
}
