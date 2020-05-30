import React from 'react';
import './Sidebar.css';

function App() {
  return (
    <div className="sidebar">
            <h2>Factors</h2>

        <label class="switch">
        <input type="checkbox"></input>
        <span class="slider round"></span>
        </label>

      <div className="population_text"> 
            <b>Population Density</b> 
        </div>

    </div> 
  );
}
export default App;