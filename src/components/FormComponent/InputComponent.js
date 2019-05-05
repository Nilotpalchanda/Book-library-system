import React from 'react';
export const InputComponent = props => {
  return <div>
                <label>{props.labelText}</label>
                <br />
                <input type="text" name={props.name} onChange={props.onChange} value={props.value} />
            </div>;
};