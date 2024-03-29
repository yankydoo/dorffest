import React from 'react';
import './App.css';
import {MenuTable} from "./MenuTable";
import {menu} from "./data/menu";
import {Paper} from "@mui/material";

const App: React.FC = () => {
  return (
    <Paper className="App">
      <MenuTable menuItems={menu} />
    </Paper>
  );
};

export default App;
