import React from 'react';
import Calculator from './components/Calculator';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Heroes from './components/Heroes';


function App() {
  return (
    <Tabs defaultActiveKey="calculator" id="uncontrolled-tab-example">
      <Tab eventKey="calculator" title="Calculator">
        <Calculator></Calculator>
      </Tab>
      <Tab eventKey="herolist" title="Hero List">
        <Heroes></Heroes>
      </Tab>
    </Tabs>
  );
}

export default App;
