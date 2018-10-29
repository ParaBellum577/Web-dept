import React, { Component } from 'react';
import './App.css';
import Card from './components/card.js'

class App extends Component {
    state = {
      rows:  [
          [
            {
              title: "Title",
              description: "Description"
            }
          ],
        ]
    }
  ;
  handleDescriptionChange = (rowIndex, cellIndex, description) => {

    const rows = [
      ...this.state.rows.slice(0, rowIndex),
      [
          ...this.state.rows[rowIndex].slice(0, cellIndex),
          {
            ...this.state.rows[rowIndex][cellIndex],
            description: description ,
          },
          ...this.state.rows[rowIndex].slice(cellIndex + 1)
      ],
      ...this.state.rows.slice(rowIndex + 1)
    ]
    const newState = { rows }
    this.setState(newState)
  }
  handleTitleChange = (rowIndex, cellIndex, title) => {

    const rows = [
      ...this.state.rows.slice(0, rowIndex),
      [
          ...this.state.rows[rowIndex].slice(0, cellIndex),
          {
            ...this.state.rows[rowIndex][cellIndex],
            title: title,
          },
          ...this.state.rows[rowIndex].slice(cellIndex + 1)
      ],
      ...this.state.rows.slice(rowIndex + 1)
    ]
    const newState = { rows }
    this.setState(newState)
  }
  handleAddRight = (rowIndex, cellIndex) => {
    const rows = [
      ...this.state.rows.slice(0, rowIndex),
      [
          ...this.state.rows[rowIndex].slice(0, cellIndex + 1),
          {
            title: "Title",
            description: "Description"
          },
          ...this.state.rows[rowIndex].slice(cellIndex + 2)
      ],
      ...this.state.rows.slice(rowIndex + 1)
    ]
    const newState = { rows }
    this.setState(newState)
  }

  handleAddBottom = (rowIndex, cellIndex) => {

    const row = this.state.rows[rowIndex + 1] ? [...this.state.rows[rowIndex + 1]] : []
    row[cellIndex] =
     {
       title: 'Title',
       description: 'Description'
      }
    const rows = [
      ...this.state.rows.slice(0, rowIndex + 1),
      row,
      ...this.state.rows.slice(rowIndex + 2)
    ]
    const newState = { rows }
this.setState(newState)
  }
  handleDelete = (rowIndex, cellIndex) => {
    const rows = [
      ...this.state.rows.slice(0, rowIndex),
      [
          ...this.state.rows[rowIndex].slice(0, cellIndex),
          undefined,
          ...this.state.rows[rowIndex].slice(cellIndex + 1)
      ],
      ...this.state.rows.slice(rowIndex + 1)
    ]
    const newState = { rows }
    this.setState(newState)

  }

  saveData = () => {
    const str = JSON.stringify(this.state.rows);
    localStorage.setItem('key', str);

}

componentDidUpdate(){
  this.saveData()
}

componentDidMount(){

 const str = localStorage.getItem('key');
 const rows = JSON.parse(str);
     if (rows){
    this.setState({rows});
   } else {
    this.setState();
};

}

  createCells = (row, rowIndex) => {
    const res = []
    for(let i = 0; i < row.length; i++) {
      res.push(row[i])
    }
    return (
    res.map((cell, cellIndex) => (
        cell ? <Card
          key={rowIndex + '' + cellIndex}
          data={cell}
          rowIndex={rowIndex}
          cellIndex={cellIndex}
          onTitleChange={this.handleTitleChange}
          onDescriptionChange={this.handleDescriptionChange}
          handleAddRight={this.handleAddRight}
          handleAddBottom={this.handleAddBottom}
          handleDelete={this.handleDelete}
          isRightEmpty={!this.state.rows[rowIndex][cellIndex + 1]}
          isBottomEmpty={!this.state.rows[rowIndex + 1] || !this.state.rows[rowIndex + 1][cellIndex]}
        /> : <div key={rowIndex + '' + cellIndex} className='empty-cell' > </div>
      ))
    )
  }

  render() {
    return (
      <div className="App">
        {this.state.rows.map((row, rowIndex) => {
          return (
            <div className='row' key={rowIndex}>
              {this.createCells(row, rowIndex)}
            </div>
          )
        })}
      </div>
    );
  }
}
export default App;
