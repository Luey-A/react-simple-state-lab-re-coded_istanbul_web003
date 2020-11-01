import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {


  genRow = (vals) => {
    console.log(this.props.values)
    return vals.map(val =>  <div className="cell"><Cell value={val}/></div>) // replace me and render a cell component instead!
  }

  genMatrix = () => {
    //console.log(this.props.values)
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

const defaultColorArr = [];
for (let r = 0; r < 10; r++) {
  defaultColorArr[r] = [];
	for (let c = 0; c < 10; c++) {
      defaultColorArr[r].push("#F00");
     // console.log(defaultColorArr[r])
    }
}


Matrix.defaultProps = {
    values: defaultColorArr,
};

