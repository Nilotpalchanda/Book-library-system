import React from 'react';
export class DatalistComponent extends React.Component {
    render() {
        return (
            <div>
                <label>{this.props.labelText}</label>
                <br />
                <div><input list="categoy" value={this.props.bookcategory} type="text" onChange={this.props.onChange} name="bookcategory" />
                    <datalist id="categoy">
                        {this.props.dropDownDataValue.map((value, index) => <option key={index} value={value} />)}
                    </datalist></div>
            </div>
        );
    }
}
