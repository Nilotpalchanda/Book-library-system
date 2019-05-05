import React from 'react';
export const DatalistComponent = props => {
  return <div>
                <label>{props.labelText}</label>
                <br />
                <div><input list="categoy" value={props.bookcategory} type="text" onChange={props.onChange} name="bookcategory" />
                    <datalist id="categoy">
                        {props.dropDownDataValue.map((value, index) => <option key={index} value={value} />)}
                    </datalist></div>
            </div>;
};