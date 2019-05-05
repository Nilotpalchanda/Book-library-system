import React from 'react';
import {fieldName} from '../../Utils/constant'
export class TextareaComponent extends React.Component {
    render() {
        return (
            <div>
                <label>{this.props.labelText}</label>
                <br />
                <textarea name={fieldName.Bookdescription} onChange={this.props.onChange} value={this.props.bookdescription} rows="8" cols="50" />
            </div>
        );
    }
}
