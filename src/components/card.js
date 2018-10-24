import React from 'react';
import './card.css';

export default class Card extends React.Component {

handleDescriptionChange = event => {
const description = event.target.value;
this.props.onDescriptionChange(this.props.rowIndex, this.props.cellIndex, description)
}

handleTitleChange = e => {
  const title = e.target.value;
  this.props.onTitleChange(this.props.rowIndex, this.props.cellIndex, title)
}

render () {
  return (
<div className='cell'>
   <input type ="text" value={this.props.data.title} className ="inp" onChange={this.handleTitleChange} ></input>
   <textarea type ="text" value={this.props.data.description} className ="inp" onChange={this.handleDescriptionChange}></textarea>
   <button  disabled={!this.props.isRightEmpty} className="btn-rgt" onClick={()=> this.props.handleAddRight(this.props.rowIndex, this.props.cellIndex)}><i class="fa fa-plus" aria-hidden="true"></i></button>
   <button disabled={!this.props.isBottomEmpty} className="btn-bot" onClick={()=>this.props.handleAddBottom(this.props.rowIndex, this.props.cellIndex)} ><i class="fa fa-plus" aria-hidden="true"></i></button>
   <button disabled={this.props.rowIndex === 0 && this.props.cellIndex === 0} className="btn-del" onClick={()=>this.props.handleDelete(this.props.rowIndex, this.props.cellIndex)}><i class="fa fa-times" aria-hidden="true"></i> </button>
 </div>

 );
}
}
