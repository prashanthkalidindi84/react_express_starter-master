import React, { Component } from 'react';
import './stocks.css';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import CellWithBackGround from './cellWithBackGround.js'
import { ColumnMenu } from './columnMenu.js';

class Stock extends Component {
  constructor() {
    super();
    this.state = {
      stocks: []
    };
  }

  componentDidMount() {
    fetch('/api/stocks')
      .then(res => res.json())
      .then(stocks => this.setState({stocks}, () => console.log('Customers fetched...', stocks)));
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        <Grid data= {this.state.stocks.map(
                        (stock) => 
                        ({symbol: stock.metaData.symbol, 
                          marketPrice:(parseInt(stock.monthlyTimeSeries.time20191212.buyPrice) + 
                          parseInt(stock.monthlyTimeSeries.time20191212.askPrice) /2 )
                        
                        })) 
                    }>
          <GridColumn field="symbol" title="Stock Symbol" columnMenu={ColumnMenu}
          style={{ width: '50%', margin:'auto'}}/>
          <GridColumn field="marketPrice" title="Market Price" cell={CellWithBackGround} columnMenu={ColumnMenu}/>
          
      </Grid>
      </div>
    );
  }
}

/* const element = (props) => (
  <Grid data={props.data} style={{ height: 'auto',width: '50%', margin:'auto' }}>
      <GridColumn field="ProductName" title="Stock Symbol" columnMenu={ColumnMenu}
      style={{ width: '50%', paddingLeft:'40px'}}/>
      <GridColumn field="UnitPrice" title="Market Price" cell={CellWithBackGround} columnMenu={ColumnMenu}/>
      
  </Grid>
);  */
export default Stock;
