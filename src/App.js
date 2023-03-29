import React from 'react';
import EncryptForm from './components/EncryptForm';

const App = () => {

  const centerClass = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '25%',
  }

  return (
    <div className="container mt-5">
      <img style={centerClass} src="logo-dh-02.png"/>
      <EncryptForm />
    </ div>
  )
}

export default App;
