import React from 'react';
import './App.css';
import ShipmentsTable from "../components/ShipmentsTable/ShipmentsTable";
import {Route, Routes } from 'react-router-dom';
import {OrderProfile} from "../components/Order/OrderProfile/OrderProfile";

function App() {


  return (
    <div className="App">
        <Routes>
            <Route>
                <Route path="/orderProfile" element={<OrderProfile/>}/>
                <Route path="/" element={<ShipmentsTable/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
