import React from 'react';
import './App.css';
import { RecoveredCases } from './ components/Recovered';
import { Deaths } from './ components/Deaths';
import { ConfirmedCases } from './ components/Confirmed';
import Countries from './ components/Countries';



function App() {
  return (
    <div className="app">
      <h1 style={{ textAlign: 'center' }}>Corona Cases Worldwide</h1>
      <div className="site-card-wrapper">
        <ConfirmedCases />
        <RecoveredCases />
        <Deaths />
      </div >
      <Countries />
    </div >

  );
}

export default App;
