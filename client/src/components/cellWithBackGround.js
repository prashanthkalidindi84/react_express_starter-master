import React, { Component } from 'react';
import './stocks.css';
import ReactDOM from 'react-dom';
class CellWithBackGround extends React.Component {
    render() {
        const examplePrice = this.props.dataItem.UnitPrice < 15;

        const icon = examplePrice ?
            <span className="k-icon k-i-sort-desc-sm" /> :
            <span className="k-icon k-i-sort-asc-sm" />;

        const style = {
            backgroundColor: examplePrice ?
                "rgb(243, 23, 0, 0.32)" :
                "rgb(55, 180, 0,0.32)"
        };

        return (
            <td style={style}>
                {this.props.dataItem[this.props.field]} 
            </td>
        );
    }
}
export default CellWithBackGround;