const express = require('express');

const app = express();


//ad
/* const customers = [
  {id: 1, firstName: 'John', lastName: 'Doe'},
  {id: 2, firstName: 'Brad', lastName: 'Traversy'},
  {id: 3, firstName: 'Mary', lastName: 'Swanson'},
]; */

app.get('/api/stocks', (req, res) => {
 
const customers = [
  {
    metaData:{
       information:'Monthly Prices (open, high, low, close) and Volumes',
       symbol:'MSFT',
       lastRefreshed:'2019-12-12 12:08:38',
       timeZone:'US/Eastern'
    },
    monthlyTimeSeries:{
       time20191212:{
          timeEvent:'2019-12-12',
          buyPrice:'151.8100',
          askPrice:'153.4200',
          low:'146.6500'
       },
       time20191129:{
          timeEvent:'2019-11-29',
          buyPrice:'144.2600',
          askPrice:'152.5000',
          low:'142.9650'
       },
       time20191031:{
          timeEvent:'2019-11-29',
          buyPrice:'139.6600',
          askPrice:'145.6700',
          low:'133.2200'
       }
    }
 }
];
  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);