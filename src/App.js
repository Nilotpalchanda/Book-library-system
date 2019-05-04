import React from 'react';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="row">
          {props.children}
        </div>
      </div>

    </div>
  );
}

export default App;
