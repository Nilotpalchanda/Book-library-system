import React from 'react';
import {fieldName} from '../../Utils/constant'
export const TextareaComponent = props => {
  return <div>
                <label>{props.labelText}</label>
                <br />
                <textarea name={fieldName.Bookdescription} onChange={props.onChange} value={props.bookdescription} rows="8" cols="50" />
            </div>;
};