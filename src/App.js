import React from 'react';
import Calculator from './components/Calculator';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Heroes from './components/Heroes';
import Apod from './components/Apod';
import Beers from './components/Beers';

function App() {
  return (
    <Tabs defaultActiveKey="beers" id="uncontrolled-tab-example">
      <Tab eventKey="calculator" title="Calculator">
        <Calculator></Calculator>
      </Tab>
      <Tab eventKey="herolist" title="Hero List">
        <Heroes></Heroes>
      </Tab>
      <Tab eventKey="apod" title="Apod">
        <Apod></Apod>
      </Tab>
      <Tab eventKey="beers" title="Beers">
        <Beers></Beers>
      </Tab>
    </Tabs>
  );
}

export default App;
