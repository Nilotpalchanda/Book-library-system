import React from 'react';
import { InputComponent } from './InputComponent';
import { TextareaComponent } from './TextareaComponent';
import { DatalistComponent } from './DatalistComponent';
import {labelText,fieldName} from '../../Utils/constant'
export class FormControler extends React.Component {
    render() {
        return (<form onSubmit={this.props.onSubmit}>
            <InputComponent onChange={this.props.onChange} labelText={labelText.Title} name={fieldName.Bookname} value={this.props.bookname}></InputComponent>
            <InputComponent onChange={this.props.onChange} labelText={labelText.Author} name={fieldName.Bookauthor} value={this.props.bookauthor}></InputComponent>
            <DatalistComponent bookcategory={this.props.bookcategory} labelText={labelText.Category} onChange={this.props.onChange} dropDownDataValue={this.props.dropDownDataValue}></DatalistComponent>
            <InputComponent onChange={this.props.onChange} labelText={labelText.ImageUrl} name={fieldName.Bookimage} value={this.props.bookimage}></InputComponent>
            <InputComponent onChange={this.props.onChange} labelText={labelText.Count} name={fieldName.Bookcount} value={this.props.bookcount}></InputComponent>
            <InputComponent onChange={this.props.onChange} labelText={labelText.Price} name={fieldName.Bookprice} value={this.props.bookprice}></InputComponent>
            <TextareaComponent onChange={this.props.onChange} labelText={labelText.Description} bookdescription={this.props.bookdescription}></TextareaComponent>
            <button className="buttonStyle" type="submit">Submit</button>
        </form>);
    }
}
